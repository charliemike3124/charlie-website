<template>
    <div class="footer text-white bg-radial-gradient-2 relative overflow-hidden">
        <nuxt-img
            format="webp"
            src="/bg.png"
            alt="Side fade"
            class="absolute top-0 left-0 opacity-5 w-full pointer-events-none"
        />
        <nuxt-img
            format="webp"
            src="/cta-bottom.png"
            alt="Bottom fade"
            class="absolute w-screen rotate-180"
            style="top: -1px"
        />
        <NuxtLayout name="section" class="flex flex-col gap-6 text-center justify-center items-center !mb-0">
            <p class="text-4xl lg:text-6xl font-bold" data-aos="fade-right">{{ $t("footer.interested") }}</p>
            <FormsContact data-aos="fade-right" data-aos-delay="200" />
            <div
                class="flex flex-col gap-2 justify-center items-center mt-12 w-full"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <div class="flex flex-col md:flex-row gap-12 md:gap-24 text-left justify-between">
                    <div class="md:w-1/3">
                        <p class="text-xl font-bold">Charlie Villalobos</p>
                        <UiDivider class="mb-2" />
                        <p>{{ $t("footer.TLDR") }}</p>
                    </div>
                    <div class="flex flex-col md:items-center md:w-1/3">
                        <div>
                            <p class="text-xl font-bold">{{ $t("footer.explore") }}</p>
                            <UiDivider class="mb-2" />
                            <a :href="`#${l.elementId}`" v-for="(l, i) in c.websiteLinks" :key="i" class="underline"
                                ><p>
                                    {{ l.name }}
                                </p></a
                            >
                        </div>
                    </div>
                    <div class="flex flex-col md:items-end md:w-1/3">
                        <div>
                            <p class="text-xl font-bold">{{ $t("footer.contact") }}</p>
                            <UiDivider class="mb-2" />
                            <p class="flex gap-2 items-center" v-for="(l, i) in c.contactLinks" :key="i">
                                <UiIcon :icon="l.icon" />
                                <a
                                    :href="l.link"
                                    target="_blank"
                                    :alt="l.name"
                                    v-if="l.link"
                                    class="underline cursor-pointer"
                                >
                                    {{ l.text }}
                                </a>
                                <span v-else>{{ l.text }}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between gap-12 md:gap-24 mt-8">
                    <p>© Copyright {{ new Date().getFullYear() }}</p>
                    <LangSwitcher />
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
    const c = useConstants();
</script>

<style>
    .footer {
        min-height: 600px;
        padding-top: 240px;
        margin-top: 240px;
        padding-bottom: 40px;
    }
</style>
