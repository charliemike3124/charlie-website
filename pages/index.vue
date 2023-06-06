<template>
    <div>
        <div class="text-white bg-radial-gradient relative">
            <SectionNavBar />
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
            <FormsContact :closeModal="modal?.close" />
        </UiModal>
    </div>
</template>

<script setup>
    const modal = ref(null);
    const key = ref(1);

    const { locale } = useI18n();
    watch(locale, () => {
        key.value++;
    });
</script>
