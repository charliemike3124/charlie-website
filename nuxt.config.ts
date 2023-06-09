import tailwindConfig from "./tailwind.config";

export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-mail", "@nuxt/image-edge", "@pinia/nuxt"],

    app: {
        head: {
            script: [
                {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-J28JXHGG4T",
                    async: true,
                },
                {
                    innerHTML: `  window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-J28JXHGG4T');`,
                },
            ],
            style: [{ children: tailwindConfig.cssRootVars, type: "text/css" }],
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
        logLevel: "error",
        define: {},
    },

    runtimeConfig: {
        MAILER_HOST: "",
        MAILER_PORT: "",
        MAILER_USER: "",
        MAILER_PASS: "",
        MAILER_FROM_ADDRESS: "",
        MAILER_FROM_NAME: "",
        FIREBASE_API_KEY: "",
        FIREBASE_AUTH_DOMAIN: "",
        FIREBASE_PROJECT_ID: "",
        FIREBASE_STORAGE_BUCKET: "",
        FIREBASE_MESSAGING_SENDER_ID: "",
        FIREBASE_APP_ID: "",

        public: {},
    },

    i18n: {
        vueI18n: "./i18n/i18n.config.ts",
        defaultLocale: "en",
    },

    image: {
        dir: "public",
        provider: "netlify",
    },

    mail: {
        message: {
            to: process.env.MAILER_TO_ADDRESS,
            from: process.env.MAILER_FROM_NAME,
            subject: "Charlie Website Contact Form",
        },
        smtp: {
            service: "gmail",
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASS,
            },
        },
    },

    axios: {
        baseURL: process.env.BASE_URL,
    },
});
