<template>
    <section data-aos="fade-in" class="mb-0 mx-auto px-12 lg:px-32 2xl:px-64">
        <nav class="h-24 flex justify-between items-center">
            <div>
                <a class="font-extrabold italic cursor-pointer text-lg" href="#"> Charlie Villalobos. </a>
            </div>

            <div class="text-center font-bold text-sm hidden sm:flex">
                <div v-for="(l, i) in links" :key="i" class="m-5">
                    <a class="cursor-pointer m-auto" :href="l.href"
                        >{{ l.name }}
                        <UiHoverUnderline />
                    </a>
                </div>
            </div>

            <LangSwitcher />
        </nav>
    </section>
</template>

<script setup>
const { t } = useI18n();
const links = computed(() => [
    {
        name: t("navBar.services"),
        href: "#services",
    },
    {
        name: t("navBar.solutions"),
        href: "#solutions",
    },
    {
        name: t("navBar.aboutMe"),
        href: "#aboutMe",
    },
]);
</script>
