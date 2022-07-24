import { defineStore } from 'pinia'
import { SupabaseClient, User } from "@supabase/supabase-js";
import {definitions} from "~/types/supabase";

export const useAuthStore = defineStore('auth', {
    state() {
        return {
            user: null as null | User,
            profile: null as null | definitions['profiles']
        }
    },
    actions: {
        async autoSignIn(supabase: SupabaseClient){
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
            })
        },
        async createProfileIfNotExist(supabase: SupabaseClient, user: User): Promise<definitions['profiles']>{
            const {data: profile, error} = await supabase
                .from<definitions['profiles']>('profiles')
                .select('*')
                .eq('id', user.id)
                .single()
            if (error) {
                let newProfile: definitions['profiles']
                switch (user.app_metadata.provider) {
                    case 'google':
                        const [first_name, second_name] = user.user_metadata?.full_name?.split(' ')
                        newProfile = {
                            id: user.id,
                            avatar_url: user.user_metadata.avatar_url,
                            first_name, second_name
                        }
                        break;
                }
                if (newProfile) {
                    newProfile.avatar_url = await this.uploadAvatar(supabase, newProfile)
                    const { data: createdProfile, error } = await supabase
                        .from<definitions['profiles']>('profiles')
                        .insert(newProfile)
                        .single()
                    return createdProfile
                }
                throw new Error(`Автоматическое создание профиля не имплементировано для ${user.app_metadata.provider}`)
            }
            return profile
        },
        async uploadAvatar(supabase: SupabaseClient, userProfile: definitions['profiles']) {
            const avatarResponse = await fetch(userProfile.avatar_url, { referrerPolicy: 'no-referrer' })
            const avatarFile = await avatarResponse.blob()
            const filePath = `${userProfile.id}/avatar.${avatarFile.type.split('/')[1]}`
            if (avatarFile) {
                await supabase
                    .storage
                    .from('avatars')
                    .upload(filePath, avatarFile, {
                        cacheControl: '3600',
                        upsert: true
                    })
                const { publicURL } = supabase.storage.from('avatars').getPublicUrl(filePath)
                return publicURL
            }
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
            return `https://avatars.dicebear.com/api/adventurer-neutral/asgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.svg`
        }
    }
})
