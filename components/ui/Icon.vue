<template>
    <SvgIcon
        type="mdi"
        :path="path"
        class="ease-in duration-200 w-8 h-8 md:w-6 md:h-8"
        :class="noHoverEffect ? '' : 'hover:-translate-y-2 hover:text-primary'"
    />
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
        mdiClose,
        mdiHamburger,
        mdiEmail,
    } from "@mdi/js";

    const props = defineProps<{
        icon: String;
        noHoverEffect?: Boolean;
    }>();

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
        close: mdiClose,
        hamburger: mdiHamburger,
        email: mdiEmail,
    };

    const path = computed(() => {
        return iconMap[props.icon] || null;
    });
</script>
