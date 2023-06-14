<template>
    <NuxtLayout name="section" class="bg-background-1 relative" id="solutions">
        <span class="bg-text pointer-events-none">WORKS</span>
        <div class="text-center flex flex-col gap-4 items-center" data-aos="fade-right">
            <p class="text-6xl font-bold">{{ configStore.msg.solutions.title }}</p>
            <UiDivider />
        </div>
        <div class="flex flex-wrap gap-y-12 gap-x-12 justify-center items-center mt-8 duration-200" data-aos="fade-in">
            <UiCardSolution v-bind="sol" v-for="(sol, i) in solutions" :key="i" />
        </div>
    </NuxtLayout>
</template>

<script setup>
    const configStore = useConfigStore();

    const solutions = reactive([
        {
            title: configStore.msg.solutions.peopleFinders,
            href: "https://www.peoplefinders.com/",
            img: "/peoplefinders-thumb.png",
            description: `${configStore.msg.solutions.teamProject}, Web App`,
            type: "Web-Apps",
        },
        {
            title: configStore.msg.solutions.ntune,
            href: "https://www.relativity.com/data-solutions/customizations/app-hub/ntune/",
            img: "/ntune.png",
            description: `${configStore.msg.solutions.teamProject}, ${configStore.msg.solutions.realtime}, Web App`,
            type: "Web-Apps",
        },
        {
            title: configStore.msg.solutions.duranyalvarez,
            href: "https://www.duranyalvarez.com/ ",
            img: "duranyalvarez-thumb.png",
            description: `${configStore.msg.solutions.soloProject}, ${configStore.msg.solutions.portfolio}, Blog`,
            type: "Blogs",
        },
        {
            title: configStore.msg.solutions.mibanco,
            href: "https://www.mibanco.com.co/#!inicio",
            img: "mibanco-thumb.png",
            description: `${configStore.msg.solutions.teamProject}, Dashboard, ${configStore.msg.solutions.bank}`,
            type: "Web-Apps",
        },
        {
            title: configStore.msg.solutions.fundacion,
            href: "https://portales.fundaciondelamujer.com/",
            img: "fundaciondelamujer-thumb.png",
            description: `${configStore.msg.solutions.teamProject}, Dashboard, ${configStore.msg.solutions.bank}`,
            type: "Web-Apps",
        },
        {
            title: configStore.msg.solutions.pcfactory,
            href: "https://www.pcfactory.cl/ ",
            img: "pcfactory-thumb.png",
            description: `${configStore.msg.solutions.teamProject}, E-Commerce, Web App`,
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
