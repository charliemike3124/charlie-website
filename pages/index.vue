<template>
    <div class="mb-48">
        <div class="text-white lg:px-24 px-8 cta relative">
            <SectionNavBar />
            <img
                src="@/assets/cta-bottom.png"
                alt="Bottom fade"
                style="bottom: -1px"
                class="absolute -mx-8 lg:-mx-24 w-screen"
            />
            <SectionLandingPageCta />
        </div>
        <LazySectionServices />
        <LazySectionSolutions />
        <LazySectionAboutMe />
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Charlie Villalobos',
});
useSeoMeta({
    title: 'Charlie Villalobos',
    ogTitle: 'Charlie Villalobos',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
});
</script>

<style lang="scss">
.cta {
    background: $radial-gradient;
}
</style>
