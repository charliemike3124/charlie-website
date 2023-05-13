import tailwindConfig from './tailwind.config';

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],

    app: {
        head: {
            // @ts-ignore
            style: [{ children: tailwindConfig.cssRootVars, type: 'text/css' }],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/global.scss" as *;',
                },
            },
        },
    },

    runtimeConfig: {
        // The private keys which are only available within server-side
        secret: 'XXX',
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: '/api',
        },
    },

    i18n: {
        vueI18n: './i18n.config.ts',
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
    },

    experimental: {
        componentIslands: true,
    },
});
