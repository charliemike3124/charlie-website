<template>
    <section data-aos="fade-in">
        <nav class="h-14 flex justify-between items-center">
            <div>
                <a class="font-extrabold italic cursor-pointer" href="#"> Charlie Villalobos </a>
            </div>

            <div class="text-center text-sm hidden sm:flex">
                <div v-for="(l, i) in links" :key="i" class="m-5">
                    <a class="cursor-pointer m-auto" :href="l.href"
                        >{{ l.name }}
                        <UiHoverUnderline />
                    </a>
                </div>
            </div>

            <div class="flex">
                <LangSwitcher />
            </div>
        </nav>
        <UiDivider />
    </section>
</template>

<script setup>
const { t } = useI18n();
const links = computed(() => [
    {
        name: t('navBar.solutions'),
        href: '#solutions',
    },
    {
        name: t('navBar.aboutMe'),
        href: '#',
    },
    {
        name: t('navBar.contact'),
        href: '#',
    },
]);
</script>

<style lang="scss" scoped>
.show {
    width: 100%;
    border: solid 1px white;
}
</style>
