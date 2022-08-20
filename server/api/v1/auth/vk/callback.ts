import jwt from 'jsonwebtoken'
import {setCookie, sendRedirect, useQuery} from "h3";

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
    const data = {}
    const token = jwt.sign(data, process.env.SUPABASE_JWT_SECRET)
    // setCookie(event, 'jwt', token)
    const {code} = useQuery(event)
    const response = await $fetch<AccessTokenSuccess | AccessTokenError>(
            'https://oauth.vk.com/access_token', {
            params: {
                client_id: process.env.VK_CLIENT_ID,
                client_secret: process.env.VK_CLIENT_SECRET,
                redirect_uri: `${process.env.HOST || 'http://localhost:3000'}/api/v1/auth/vk/callback`,
                code: code
            }
        }
    )
    console.log(response)
    return ''
})