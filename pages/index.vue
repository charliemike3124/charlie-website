<template>
    <div>
        <div class="text-white bg-radial-gradient relative">
            <SectionNavBar @showContactForm="modal?.show" />
            <nuxt-img
                preload
                format="webp"
                src="/bg.png"
                alt="Side fade"
                class="absolute top-0 left-0 opacity-5 w-full pointer-events-none"
            />
            <nuxt-img
                preload
                format="webp"
                src="/cta-bottom.png"
                alt="Bottom fade"
                class="absolute w-screen"
                style="bottom: -1px"
            />

            <SectionLandingPageCta @showContactForm="modal?.show" />
        </div>
        <LazySectionServices @showContactForm="modal?.show" />
        <LazySectionSolutions :key="key" />
        <LazySectionAboutMe :key="key" />
        <LazySectionFooter @showContactForm="modal?.show" />

        <UiModal ref="modal">
            <p class="text-5xl mb-4 font-bold text-primary">{{ configStore.msg.contact.title }}</p>
            <p class="text-md text-gray-700 mb-2">{{ configStore.msg.contact.subtitle }}</p>
            <div class="mb-8 flex gap-2">
                <a href="https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US" target="_blank" alt="linkedin">
                    <p class="flex items-center gap-2 underline">
                        <UiIcon icon="linkedin" class="cursor-pointer" /></p
                ></a>
                <a href="https://github.com/charliemike3124" target="_blank" alt="github">
                    <p class="flex items-center gap-2 underline">
                        <UiIcon icon="github" class="cursor-pointer" /></p
                ></a>
                <a href="https://wa.me/573174027001" target="_blank">
                    <p class="flex items-center gap-2 underline">
                        <UiIcon icon="whatsapp" class="cursor-pointer" />
                    </p>
                </a>
            </div>
            <FormsContact :closeModal="modal?.close" />
        </UiModal>
    </div>
</template>

<script setup>
    const configStore = useConfigStore();

    const modal = ref(null);

    definePageMeta({
        middleware: "index",
    });
</script>
