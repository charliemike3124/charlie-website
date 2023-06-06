import tailwindConfig from "./tailwind.config";

export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-mail", "@nuxt/image-edge"],

    // @ts-ignore
    app: {
        head: {
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
    },

    runtimeConfig: {
        MAILER_HOST: "",
        MAILER_PORT: "",
        MAILER_USER: "",
        MAILER_PASS: "",
        MAILER_FROM_ADDRESS: "",
        MAILER_FROM_NAME: "",
        public: {},
    },

    i18n: {
        vueI18n: "./i18n/i18n.config.ts",
        defaultLocale: "en",
    },

    image: {
        dir: "assets",
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
