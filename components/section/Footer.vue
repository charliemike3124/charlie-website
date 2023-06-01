<template>
    <div class="footer text-white bg-radial-gradient-2 relative overflow-hidden">
        <img
            src="@/assets/bg.png"
            alt="Side fade"
            class="absolute top-0 left-0 opacity-5 w-full pointer-events-none"
            loading="lazy"
        />
        <img
            src="@/assets/cta-bottom.png"
            alt="Bottom fade"
            class="absolute w-screen rotate-180"
            style="top: -1px"
            loading="lazy"
        />
        <div class="flex flex-col gap-6 text-center justify-center items-center h-full">
            <p class="text-6xl font-bold" data-aos="fade-right">Interested in collaborating with me?</p>
            <UiButton data-aos="fade-right" data-aos-delay="200">Contact Me!</UiButton>
            <div
                class="flex flex-col gap-2 justify-center mt-12"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-offset="-300"
            >
                <p class="flex gap-2">
                    <a :href="contactLinks.linkedin" target="_blank" alt="linkedin">
                        <UiIcon icon="linkedin" class="cursor-pointer duration-200 hover:-translate-y-2 ease-in" /> </a
                    >My LinkedIn
                </p>
                <p class="flex gap-2">
                    <a :href="contactLinks.github" target="_blank" alt="github">
                        <UiIcon icon="github" class="cursor-pointer duration-200 hover:-translate-y-2 ease-in" /> </a
                    >My Github
                </p>
                <p class="flex gap-2">
                    <UiIcon icon="whatsapp" class="duration-200 hover:-translate-y-2 ease-in" /> (+57) 317 4027001
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const contactLinks = {
    linkedin: "https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US",
    github: "https://github.com/charliemike3124",
};
</script>

<style>
.footer {
    height: 600px;
    padding-top: 240px;
    margin-top: 240px;
    padding-bottom: 100px;
}
</style>
