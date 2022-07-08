import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/supabase',
        '@pinia/nuxt'
    ],
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
            }),
        ],
        // @ts-expect-error: Missing ssr key
        ssr: {
            noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
        },
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        }
    }
})
