export default defineNuxtRouteMiddleware(async (to, from) => {
    const configStore = useConfigStore();
    const response = await useFetch("/api/storage", {
        method: "GET",
    });

    configStore.msg = response.data.value.en || {};
    configStore.lang = to.query.lang ?? "en";

    if (configStore.lang === "es" && response.data.value?.es) {
        configStore.msg = response.data.value.es;
    }
});
