import jwt from 'jsonwebtoken'
import {setCookie, sendRedirect, useQuery} from "h3";
import { serverSupabaseServiceRole } from '#supabase/server'
import { VK } from 'vk-io';

type AccessTokenSuccess = {
    access_token: string,
    expires_in: number,
    user_id: number
}

type AccessTokenError = {
    error: string,
    error_description: string,
}

export default defineEventHandler(async (event) => {
    // Обработать запрос от VK OAuth
    const {code} = useQuery(event)
    const response = await $fetch<AccessTokenSuccess>(
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
    const vk = new VK({ token: response.access_token })
    // Получить информацию о пользователе
    const [vkAccountInfo] = await vk.api.users.get({ fields: ['bdate', 'photo_200_orig', 'photo_max_orig', 'sex'] })
    console.log(vkAccountInfo)
    return ''
})