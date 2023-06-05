<template>
    <NuxtLayout name="section" class="bg-background-1 relative" id="solutions">
        <span class="bg-text pointer-events-none">WORKS</span>
        <div class="text-center flex flex-col gap-4 items-center" data-aos="fade-right">
            <p class="text-6xl font-bold">{{ $t("solutions.title") }}</p>
            <UiDivider />
        </div>
        <div class="flex flex-wrap gap-y-12 gap-x-12 justify-center items-center mt-8 duration-200" data-aos="fade-in">
            <UiCardSolution v-bind="sol" v-for="(sol, i) in solutions" :key="i" />
        </div>
    </NuxtLayout>
</template>

<script setup>
    import peoplefinders from "@/assets/peoplefinders-thumb.png";
    import ntune from "@/assets/ntune.png";
    import mibanco from "@/assets/mibanco-thumb.png";
    import fundaciondelamujer from "@/assets/fundaciondelamujer-thumb.png";
    import pcfactory from "@/assets/pcfactory-thumb.png";
    import duranyalvarez from "@/assets/duranyalvarez-thumb.png";

    const { t } = useI18n();

    const solutions = reactive([
        {
            title: t("solutions.peopleFinders"),
            href: "https://www.peoplefinders.com/",
            img: peoplefinders,
            description: `${t("solutions.teamProject")}, Web App`,
            type: "Web-Apps",
        },
        {
            title: t("solutions.ntune"),
            href: "https://www.relativity.com/data-solutions/customizations/app-hub/ntune/",
            img: ntune,
            description: `${t("solutions.teamProject")}, ${t("solutions.realtime")}, Web App`,
            type: "Web-Apps",
        },
        {
            title: t("solutions.duranyalvarez"),
            href: "https://www.duranyalvarez.com/ ",
            img: duranyalvarez,
            description: `${t("solutions.soloProject")}, ${t("solutions.portfolio")}, Blog`,
            type: "Blogs",
        },
        {
            title: t("solutions.mibanco"),
            href: "https://www.mibanco.com.co/#!inicio",
            img: mibanco,
            description: `${t("solutions.teamProject")}, Dashboard, ${t("solutions.bank")}`,
            type: "Web-Apps",
        },
        {
            title: t("solutions.fundacion"),
            href: "https://portales.fundaciondelamujer.com/",
            img: fundaciondelamujer,
            description: `${t("solutions.teamProject")}, Dashboard, ${t("solutions.bank")}`,
            type: "Web-Apps",
        },
        {
            title: t("solutions.pcfactory"),
            href: "https://www.pcfactory.cl/ ",
            img: pcfactory,
            description: `${t("solutions.teamProject")}, E-Commerce, Web App`,
            type: "E-commerce",
        },
    ]);
</script>

<style lang="scss" scoped>
    .bg-text {
        font-size: 400px;
        position: absolute;
        opacity: 0.02;
        bottom: 20%;
        left: -100px;
        filter: blur(5px);
    }
</style>
