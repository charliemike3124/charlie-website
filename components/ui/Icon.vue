<template>
    <SvgIcon type="mdi" :path="path" />
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import {
    mdiLinkedin,
    mdiGithub,
    mdiOpenInNew,
    mdiWeb,
    mdiCogOutline,
    mdiAccountTie,
    mdiSchoolOutline,
    mdiWhatsapp,
} from "@mdi/js";

const props = defineProps<{ icon: String }>();

const path = computed(() => {
    switch (props.icon) {
        case "linkedin":
            return mdiLinkedin;
        case "github":
            return mdiGithub;
        case "openInNew":
            return mdiOpenInNew;
        case "web":
            return mdiWeb;
        case "cog":
            return mdiCogOutline;
        case "consulting":
            return mdiAccountTie;
        case "tutoring":
            return mdiSchoolOutline;
        case "whatsapp":
            return mdiWhatsapp;
    }
});
</script>
