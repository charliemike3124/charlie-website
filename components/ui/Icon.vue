<template>
    <SvgIcon type="mdi" :path="path" />
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLinkedin, mdiGithub, mdiOpenInNew } from '@mdi/js';

const props = defineProps<{ icon: String }>();

const path = computed(() => {
    switch (props.icon) {
        case 'linkedin':
            return mdiLinkedin;
        case 'github':
            return mdiGithub;
        case 'openInNew':
            return mdiOpenInNew;
    }
});
</script>
