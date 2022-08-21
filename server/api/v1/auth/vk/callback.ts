import jwt from 'jsonwebtoken'
import {setCookie, sendRedirect, useQuery, CompatibilityEvent} from "h3";
import { serverSupabaseServiceRole, serverSupabaseUser, serverSupabaseClient } from '#supabase/server'
import { VK } from 'vk-io';
import {definitions} from "~/types/supabase";
import {parseProfileAvatar} from "~/server/utils/parseProfileAvatar.server";
import {SupabaseClient, User} from "@supabase/supabase-js";

type AccessTokenSuccess = {
    access_token: string,
    expires_in: number,
    user_id: number,
    email?: string
}

type AccessTokenError = {
    error: string,
    error_description: string,
}

export default defineEventHandler(async (event) => {
    return
    // Обработать запрос от VK OAuth
    const {code} = useQuery(event)
    const oauthResponse = await $fetch<AccessTokenSuccess>(
            'https://oauth.vk.com/access_token', {
            params: {
                client_id: process.env.VK_CLIENT_ID,
                client_secret: process.env.VK_CLIENT_SECRET,
                redirect_uri: `${process.env.HOST || 'http://localhost:3000'}/api/v1/auth/vk/callback`,
                code: code
            }
        }
    )
    // Создать клиент VK API на основе полученного токена доступа
    const vk = new VK({ token: oauthResponse.access_token })
    // Получить информацию о пользователе
    const [vkAccountInfo] = await vk.api.users.get({ fields: ['bdate', 'photo_200_orig', 'photo_max_orig', 'sex'] })
    const supabaseService = serverSupabaseServiceRole(event)
    // Найти пользователя по vk ID
    const { data: existingUser} = await supabaseService
        .from('users')
        .select()
        .eq('raw_user_meta_data->vk_id', vkAccountInfo.id)
        .single()
    // Если пользователь существует, то авторизовать его
    if (existingUser) {
        const token = createJwt(existingUser)
        await setAuth(event, token)
        await sendRedirect(event, '/')
        return
    }
    // Иначе зарегестрировать пользователя в supabase
    const { user: supabaseUser} = await supabaseService.auth.api.createUser({
        email: oauthResponse.email,
        email_confirm: true,
        app_metadata: {
            provider: 'vk',
            providers: ['vk']
        },
        user_metadata: {
            avatar_url: vkAccountInfo.photo_max_orig,
            email: oauthResponse.email,
            first_name: vkAccountInfo.first_name,
            last_name: vkAccountInfo.last_name,
            iss: `https://api.vk.com/method/users.get`,
            picture: vkAccountInfo.photo_max_orig,
            vk_id: vkAccountInfo.id,
            sub: vkAccountInfo.id,
            bdate: vkAccountInfo.bdate
        }

    })
    // Авторизовать пользователя
    const token = createJwt(supabaseUser)
    await setAuth(event, token)
    // Создать профиль пользователя
    await createProfile(supabaseService, supabaseUser)
    await sendRedirect(event, '/')
    return
})

function createJwt(user: User){
    const token_body = {
        sub: user.id,
        aud: user.aud,
        email: user.email,
        phone: user.phone,
        role: user.role,
        app_metadata: user.app_metadata,
        user_metadata: user.user_metadata
    }
    const token = jwt.sign(token_body, process.env.SUPABASE_JWT_SECRET, {noTimestamp: true})
    return token
}

async function setAuth(event: CompatibilityEvent, token: string) {
    const supabase = serverSupabaseClient(event)
    supabase.auth.setAuth(token)
    setCookie(event, 'vk-user-jwt', token, { maxAge: 5*1000} )

}

async function createProfile(supabase: SupabaseClient, user: User){
    const newProfile: definitions['profiles'] = {
        id: user.id,
        avatar_url: user.user_metadata.avatar_url,
        first_name: user.user_metadata.first_name,
        second_name: user.user_metadata.last_name
    }
    newProfile.avatar_url = await parseProfileAvatar(supabase, newProfile)
    const { data: createdProfile, error } = await supabase
        .from<definitions['profiles']>('profiles')
        .insert(newProfile)
        .single()
    return createdProfile
}