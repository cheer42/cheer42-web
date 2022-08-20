import {SupabaseClient} from "@supabase/supabase-js";
import {definitions} from "~/types/supabase";

export const parseProfileAvatar = async (supabase: SupabaseClient, userProfile: definitions['profiles']) => {
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