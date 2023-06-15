<template>
    <div>
        <div class="text-white bg-radial-gradient relative">
            <SectionNavBar />
            <nuxt-img
                preload
                format="webp"
                src="/bg.webp"
                alt="Side fade"
                class="absolute top-0 left-0 opacity-5 w-full pointer-events-none"
            />
            <nuxt-img
                preload
                format="webp"
                src="/cta-bottom.webp"
                alt="Bottom fade"
                class="absolute w-screen"
                style="bottom: -1px"
            />

            <SectionLandingPageCta />
        </div>
        <LazySectionServices />
        <LazySectionSolutions :key="key" />
        <LazySectionAboutMe :key="key" />
        <LazySectionFooter />
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: "index",
    });
</script>
