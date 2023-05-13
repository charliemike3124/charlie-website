<template>
    <section class="mt-28" id="solutions">
        <p class="text-3xl font-bold">Solutions</p>
        <UiDivider class="mt-3 mb-10" />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            <LazyUiCardHoverGradient v-for="(sol, i) in solutions" :key="i" class="card border-2">
                <div class="flex-col h-full px-3">
                    <div class="py-2">
                        <p class="text-xl font-bold">{{ sol.title }}</p>
                        <UiDivider class="my-2" />
                    </div>
                    <div class="rounded-md overflow-hidden hover:scale-105 duration-500">
                        <a :href="sol.href" target="_blank"
                            ><img :src="sol.img" :alt="`${sol.title} image`" class="w-full max-h-48 cursor-pointer"
                        /></a>
                    </div>
                    <div class="flex-grow pt-4">
                        <p>{{ sol.description }}</p>
                    </div>
                    <div class="pt-4 pb-2 flex m-auto w-full flex-grow">
                        <a :href="sol.href" target="_blank" class="flex gap-1 underline">
                            Visit
                            <UiIcon icon="openInNew" class="w-3 underline" />
                        </a>
                    </div>
                </div>
            </LazyUiCardHoverGradient>
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

const solutions = [
    {
        title: 'Peoplefinders',
        href: 'https://www.peoplefinders.com/',
        img: peoplefinders,
        description: 'A website used to find any person in the United States.',
    },
    {
        title: 'Ntune',
        href: 'https://www.relativity.com/data-solutions/customizations/app-hub/ntune/',
        img: ntune,
        description: 'Real-time collaboration application similar to Teams.',
    },
    {
        title: 'MiBanco',
        href: 'https://www.mibanco.com.co/#!inicio',
        img: mibanco,
        description: 'Easy to use and access bank for less-priviledged people.',
    },
    {
        title: 'Fundación de la mujer',
        href: 'https://portales.fundaciondelamujer.com/',
        img: fundaciondelamujer,
        description: 'Colombian bank focused on improving womens quality of life.',
    },
    {
        title: 'PcFactory',
        href: 'https://www.pcfactory.cl/ ',
        img: pcfactory,
        description: 'E-commerce website centered around techonology products.',
    },
    {
        title: 'Duran y Alvarez',
        href: 'https://www.duranyalvarez.com/ ',
        img: duranyalvarez,
        description: 'Online portfolio and blog website.',
    },
];
</script>

<style lang="scss" scoped>
.card {
    min-height: 420px;
}
</style>
