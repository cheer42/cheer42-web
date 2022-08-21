import { defineStore } from 'pinia'
import { SupabaseClient, User } from "@supabase/supabase-js";
import {definitions} from "~/types/supabase";
import {Router} from "vue-router";
import NuxtConfig from "~/nuxt.config";
import {RuntimeConfig} from "@nuxt/schema";

export const useAuthStore = defineStore('auth', {
    state() {
        return {
            user: null as null | User,
            profile: null as null | definitions['profiles']
        }
    },
    actions: {
        async autoSignIn(supabase: SupabaseClient, vkJwt: string | null){
            if (vkJwt) {
                supabase.auth.setAuth(vkJwt)
            }
            const user = supabase.auth.user()
            this.user = user
            if (user) {
                const profile = await this.createProfileIfNotExist(supabase, user)
                this.profile = profile
            }
        },
        async signOut(supabase: SupabaseClient) {
            const { error } = await supabase.auth.signOut()
            this.user = null
            this.profile = null
        },
        async signInWithGoogle(supabase: SupabaseClient) {
            const { user, session, error } = await supabase.auth.signIn({
                provider: 'google'
            }, {
                redirectTo: window.location.origin
            })
        },
        async signInWithVk(config: RuntimeConfig) {
            // function encodeQueryData(data) {
            //     const ret = [];
            //     for (let d in data)
            //         ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            //     return ret.join('&');
            // }
            // const query = {
            //     client_id: config.VK_CLIENT_ID,
            //     redirect_uri: `${window.location.origin}/api/v1/auth/vk/callback`,
            //     display: 'page',
            //     response_type: 'code',
            //     scope: 4194304 + 65536
            // }
            // const vkOauthUrl = `https://oauth.vk.com/authorize?${encodeQueryData(query)}`
            // window.location.href = vkOauthUrl
        },
        async createProfileIfNotExist(supabase: SupabaseClient, user: User): Promise<definitions['profiles']>{
            const {data: profile, error} = await supabase
                .from<definitions['profiles']>('profiles')
                .select('*')
                .eq('id', user.id)
                .single()
            if (error) {
                switch (user.app_metadata.provider) {
                    case 'google':
                        return await $fetch<definitions["profiles"]>('/api/v1/auth/register/google', { method: 'POST' })
                    default:
                        throw new Error(`Автоматическое создание профиля не имплементировано для ${user.app_metadata.provider}`)
                }
            }
            return profile
        }
    },
    getters: {
        userInitials(){
            const profile: null | definitions['profiles'] = this.profile
            return profile ? `${profile.second_name} ${profile.first_name?.charAt(0) || ''}${profile.father_name?.charAt(0) || ''}` : 'Гость'
        },
        userAvatar(){
            const profile: null | definitions['profiles'] = this.profile
            if (profile){
                return profile.avatar_url || `https://avatars.dicebear.com/api/adventurer-neutral/${profile.id}.svg`
            }
            return `https://avatars.dicebear.com/api/adventurer-neutral/guest.svg`
        }
    }
})
