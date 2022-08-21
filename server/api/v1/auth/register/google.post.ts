import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import {definitions} from "~/types/supabase";
import {parseProfileAvatar} from "~/server/utils/parseProfileAvatar.server";

export default defineEventHandler(async (event) => {
    const supabase = serverSupabaseClient(event)
    const user = await serverSupabaseUser(event)

    const [first_name, second_name] = user.user_metadata?.full_name?.split(' ')
    const newProfile: definitions['profiles'] = {
        id: user.id,
        avatar_url: user.user_metadata.avatar_url,
        first_name, second_name
    }
    newProfile.avatar_url = await parseProfileAvatar(supabase, newProfile)
    const { data: createdProfile, error } = await supabase
        .from<definitions['profiles']>('profiles')
        .insert(newProfile)
        .single()
    return createdProfile
})