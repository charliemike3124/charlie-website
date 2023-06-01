<template>
    <div class="footer text-white bg-radial-gradient-2 relative overflow-hidden">
        <img src="@/assets/bg.png" alt="Side fade" class="absolute top-0 left-0 opacity-5 w-full pointer-events-none" />
        <img src="@/assets/cta-bottom.png" alt="Bottom fade" class="absolute w-screen rotate-180" style="top: -1px" />
        <div class="flex flex-col gap-6 text-center justify-center items-center h-full px-12">
            <p class="text-4xl lg:text-6xl font-bold" data-aos="fade-right">{{ $t("footer.interested") }}</p>
            <a href="https://wa.me/573174027001" target="_blank">
                <UiButton data-aos="fade-right" data-aos-delay="200">{{ $t("buttons.contact") }}</UiButton>
            </a>
            <div
                class="flex flex-col gap-2 justify-center items-center mt-12"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-offset="-300"
            >
                <LangSwitcher class="mb-8" />
                <a :href="contactLinks.linkedin" target="_blank" alt="linkedin">
                    <p class="flex gap-2 underline">
                        <UiIcon icon="linkedin" class="cursor-pointer" />
                        {{ $t("footer.linkedin") }}
                    </p></a
                >
                <a :href="contactLinks.github" target="_blank" alt="github">
                    <p class="flex gap-2 underline">
                        <UiIcon icon="github" class="cursor-pointer" />
                        {{ $t("footer.github") }}
                    </p></a
                >
                <a href="https://wa.me/573174027001" target="_blank">
                    <p class="flex gap-2 underline">
                        <UiIcon icon="whatsapp" class="cursor-pointer" />
                        {{ $t("footer.whatsapp") }} - (+57) 317 4027001
                    </p>
                </a>
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
