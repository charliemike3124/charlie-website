import { defineStore } from "pinia";

export const useConfigStore = defineStore({
    id: "config-store",
    state: () => {
        return {
            msg: {},
        };
    },
});
