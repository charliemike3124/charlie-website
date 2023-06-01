<template>
    <div>
        <div class="text-white bg-radial-gradient relative">
            <SectionNavBar />
            <img
                src="@/assets/bg.png"
                alt="Side fade"
                class="absolute top-0 left-0 opacity-5 w-full pointer-events-none"
            />
            <img src="@/assets/cta-bottom.png" alt="Bottom fade" class="absolute w-screen" style="bottom: -1px" />
            <SectionLandingPageCta />
        </div>
        <LazySectionServices />
        <LazySectionSolutions />
        <LazySectionAboutMe />
        <LazySectionFooter />
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
