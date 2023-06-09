import { useConfigStore } from "@/store/config";
export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log("Route Middleware");
    const configStore = useConfigStore();
    const response = await useFetch("/api/storage", {
        method: "GET",
    });
    configStore.msg = response.data.value || {};
});
