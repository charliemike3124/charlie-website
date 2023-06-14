<template>
    <div class="flex items-center gap-1">
        <a href="/#" class="cursor-pointer">en <UiHoverUnderline :show="configStore.lang === 'en'" /> </a>
        <UiIcon icon="web" no-hover-effect />
        <a href="/?lang=es" class="cursor-pointer">es <UiHoverUnderline :show="configStore.lang === 'es'" /> </a>
    </div>
</template>

<script setup>
    const configStore = useConfigStore();
</script>
