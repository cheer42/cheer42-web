import { defineStore } from 'pinia'
import { SupabaseClient, User } from "@supabase/supabase-js";

export const useAuthStore = defineStore('auth', {
    state() {
        return {
            user: null as null | User,
            profile: null as any
        }
    },
    actions: {
        setUser(user){
            this.user = user
        },
        autoSignIn(supabase: SupabaseClient){
            this.setUser(supabase.auth.user())
        },
        async signOut(supabase: SupabaseClient) {
            const { error } = await supabase.auth.signOut()
            this.user = null
        },
        async signInWithGoogle(supabase: SupabaseClient) {
            const { user, session, error } = await supabase.auth.signIn({
                provider: 'google'
            })
            console.log(user)
        },
    },
    getters: {
        userInitials(){
            const user: null | User = this.user
            return user?.email || 'Гость'
        }
    }
})
