import tailwindConfig from './tailwind.config';

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],

    app: {
        head: {
            // @ts-ignore
            style: [{ children: tailwindConfig.cssRootVars, type: 'text/css' }],
            script: [
                {
                    src: 'https://smtpjs.com/v3/smtp.js',
                },
            ],
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
            FIREBASE_API_KEY: 'AIzaSyDPvxgx2v_hyDWeYoa0fMZotRRA5qAi244',
            FIREBASE_APP_ID: '1:51045206277:web:fd2c5cd9b6e1a1d92a8f6c',
            FIREBASE_AUTH_DOMAIN: 'charlie-website-e55f2.firebaseapp.com',
            FIREBASE_STORAGE_BUCKET: 'charlie-website-e55f2.appspot.com',
            FIREBASE_MESSAGING_SENDER_ID: '51045206277',
            FIREBASE_PROJECT_ID: 'charlie-website-e55f2',
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
