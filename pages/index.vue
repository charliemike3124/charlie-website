<template>
    <div class="mb-48">
        <div class="text-white px-24 cta relative">
            <SectionNavBar />
            <img src="@/assets/cta-bottom.png" class="absolute bottom-0 -mx-24" />
            <SectionLandingPageCta />
        </div>
        <SectionServices />
        <SectionSolutions />
        <SectionAboutMe />
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

<style>
.cta {
    background: radial-gradient(at top, #0d3c68, #001528);
}
</style>
