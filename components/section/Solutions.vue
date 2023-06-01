<template>
    <NuxtLayout name="section" class="bg-background-1 relative" id="solutions">
        <span class="bg-text pointer-events-none">WORKS</span>
        <div class="text-center flex flex-col gap-4 items-center" data-aos="fade-right">
            <p class="text-6xl font-bold">My Latest Works</p>
            <UiDivider />
        </div>
        <div class="mt-16 flex justify-center" data-aos="fade-right">
            <p class="text-xl text-gray-600 flex gap-3">
                <span @click="currentFilter = 'All'" class="cursor-pointer"
                    >All<UiHoverUnderline color="var(--primary)" />
                </span>
                <span @click="currentFilter = 'Web-Apps'" class="cursor-pointer"
                    >Web-Apps <UiHoverUnderline color="var(--primary)"
                /></span>
            </p>
        </div>
        <div class="flex flex-wrap gap-y-12 gap-x-12 justify-center items-center mt-8 duration-200" data-aos="fade-in">
            <UiCardSolution v-bind="sol" v-for="(sol, i) in solutions" :key="i" />
        </div>
    </NuxtLayout>
</template>

<script setup>
import peoplefinders from '@/assets/peoplefinders-thumb.png';
import ntune from '@/assets/ntune.png';
import mibanco from '@/assets/mibanco-thumb.png';
import fundaciondelamujer from '@/assets/fundaciondelamujer-thumb.png';
import pcfactory from '@/assets/pcfactory-thumb.png';
import duranyalvarez from '@/assets/duranyalvarez-thumb.png';

const unfilteredSolutions = [
    {
        title: 'Person Finder: Locate Anyone in USA',
        href: 'https://www.peoplefinders.com/',
        img: peoplefinders,
        description: 'Team Project, Web App',
        type: 'Web-Apps',
    },
    {
        title: 'Real-time collaboration application similar to Teams.',
        href: 'https://www.relativity.com/data-solutions/customizations/app-hub/ntune/',
        img: ntune,
        description: 'Team Project, Real-Time Chat, Web App',
        type: 'Web-Apps',
    },
    {
        title: 'Online portfolio and blog website.',
        href: 'https://www.duranyalvarez.com/ ',
        img: duranyalvarez,
        description: 'Solo Project, Portfolio, Blog',
        type: 'Blogs',
    },
    {
        title: 'Accessible banking solution for all.',
        href: 'https://www.mibanco.com.co/#!inicio',
        img: mibanco,
        description: 'Team Project, Dashboard, UI',
        type: 'Web-Apps',
    },
    {
        title: 'Colombian bank driving positive change and empowering women.',
        href: 'https://portales.fundaciondelamujer.com/',
        img: fundaciondelamujer,
        description: 'Team Project, UI',
        type: 'Web-Apps',
    },
    {
        title: 'E-commerce website centered around techonology products.',
        href: 'https://www.pcfactory.cl/ ',
        img: pcfactory,
        description: 'Team Project, E-commerce, UI',
        type: 'E-commerce',
    },
];
const currentFilter = ref('All');
const solutions = computed(() => {
    return unfilteredSolutions.filter((sol) => sol.type === currentFilter.value || currentFilter.value === 'All');
});
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
