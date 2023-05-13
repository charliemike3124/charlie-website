<template>
    <div class="mb-48">
        <meta name="description" content="Charlie Villalobos' personal website. Need a web solution? Contact me." />
        <SectionNavBar />
        <SectionLandingPageCta />
        <SectionSolutions data-aos="fade-in" />
        <SectionAboutMe data-aos="fade-in" />
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
