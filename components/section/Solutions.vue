<template>
    <section class="bg-background-1 md:px-12 2xl:px-64" id="solutions">
        <div class="text-center flex flex-col gap-4 items-center">
            <p class="text-6xl font-bold">My Latest Works</p>
            <UiDivider />
        </div>
        <div class="flex flex-wrap gap-y-12 gap-x-24 justify-center items-center mt-16 w-10/12 m-auto">
            <div class="card rounded-md shadow-xl" v-for="(sol, i) in solutions" :key="i">
                <div class="h-3/6 overflow-hidden border-8 rounded-xl border-white">
                    <img :src="sol.img" alt="Solution Preview" class="w-full" loading="lazy" />
                </div>
                <div class="h-3/6 px-2 lg:px-12 py-4 text-center flex flex-col items-center">
                    <div>
                        <p class="text-2xl lg:text-4xl font-bold mb-4">{{ sol.title }}</p>
                        <p>{{ sol.description }}</p>
                    </div>
                    <div class="flex-grow flex items-end pb-10">
                        <a :href="sol.href">
                            <button
                                class="rounded-3xl w-full py-4 px-8 flex self-end button-bg text-secondary-text font-bold"
                            >
                                Visit Website
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import peoplefinders from '@/assets/peoplefinders.jpg';
import ntune from '@/assets/ntune.png';
import mibanco from '@/assets/mibanco.webp';
import fundaciondelamujer from '@/assets/fundaciondelamujer.jpg';
import pcfactory from '@/assets/pcfactory.jpg';
import duranyalvarez from '@/assets/duranyalvarez.jpg';

const unfilteredSolutions = [
    {
        title: 'PeopleFinders.com',
        href: 'https://www.peoplefinders.com/',
        img: peoplefinders,
        description: 'A website used to find any person in the United States.',
        type: 'Web-Apps',
    },
    {
        title: 'Ntune',
        href: 'https://www.relativity.com/data-solutions/customizations/app-hub/ntune/',
        img: ntune,
        description: 'Real-time collaboration application similar to Teams.',
        type: 'Web-Apps',
    },
    {
        title: 'MiBanco',
        href: 'https://www.mibanco.com.co/#!inicio',
        img: mibanco,
        description: 'Easy to use and access bank for less-priviledged people.',
        type: 'Web-Apps',
    },
    {
        title: 'Fundación de la mujer',
        href: 'https://portales.fundaciondelamujer.com/',
        img: fundaciondelamujer,
        description: 'Colombian bank focused on improving womens quality of life.',
        type: 'Web-Apps',
    },
    {
        title: 'PcFactory',
        href: 'https://www.pcfactory.cl/ ',
        img: pcfactory,
        description: 'E-commerce website centered around techonology products.',
        type: 'E-commerce',
    },
    {
        title: 'Duran y Álvarez',
        href: 'https://www.duranyalvarez.com/ ',
        img: duranyalvarez,
        description: 'Online portfolio and blog website.',
        type: 'Blogs',
    },
];
const currentFilter = ref('All');
const solutions = computed(() => {
    return unfilteredSolutions.filter((sol) => sol.type === currentFilter.value || currentFilter.value === 'All');
});
</script>

<style lang="scss" scoped>
.card {
    height: 500px;
    width: 340px;
    background: white;
    overflow: hidden;

    @media (min-width: 1024px) {
        height: 600px;
        width: 380px;
    }

    .button-bg {
        background: $btn-radial-gradient;
    }
}
</style>
