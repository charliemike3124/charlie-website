const primaryLanguage = "en";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const configStore = useConfigStore();
    const response = await useFetch("/api/storage", {
        method: "GET",
    });

    configStore.msg = response.data.value[primaryLanguage] || {};
    configStore.lang = to.query.lang ?? primaryLanguage;

    if (configStore.lang === "es" && response.data.value?.es) {
        configStore.msg = response.data.value.es;
    }
});
