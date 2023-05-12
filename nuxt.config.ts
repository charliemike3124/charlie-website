import tailwindConfig from "./tailwind.config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      // @ts-ignore
      style: [{ children: tailwindConfig.cssRootVars, type: "text/css" }],
    },
  },

  runtimeConfig: {
    // The private keys which are only available within server-side
    secret: "XXX",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "/api",
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
});
