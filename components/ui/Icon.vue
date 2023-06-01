<template>
    <SvgIcon type="mdi" :path="path" class="hover:-translate-y-2 hover:text-primary ease-in duration-200" />
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
    mdiArrowDownRight,
} from "@mdi/js";

const props = defineProps<{ icon: String }>();

const iconMap = {
    linkedin: mdiLinkedin,
    github: mdiGithub,
    openInNew: mdiOpenInNew,
    web: mdiWeb,
    cog: mdiCogOutline,
    consulting: mdiAccountTie,
    tutoring: mdiSchoolOutline,
    whatsapp: mdiWhatsapp,
    arrowDownRight: mdiArrowDownRight,
};
const path = computed(() => {
    return iconMap[props.icon] || null;
});
</script>
