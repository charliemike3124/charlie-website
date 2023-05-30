<template>
    <section class="bg-background-2" id="solutions">
        <img src="@/assets/cta-bottom.png" class="rotate-180" />
        <p class="text-3xl font-bold">Solutions</p>
        <UiDivider class="mt-3 mb-10" />
        <div class="flex gap-4 mb-5">
            <div class="cursor-pointer" @click="currentFilter = 'All'">
                {{ $t('solutions.all') }}<UiHoverUnderline :show="currentFilter === 'All'" />
            </div>
            <div class="cursor-pointer" @click="currentFilter = 'Web-Apps'">
                {{ $t('solutions.webApps') }}<UiHoverUnderline :show="currentFilter === 'Web-Apps'" />
            </div>
            <div class="cursor-pointer" @click="currentFilter = 'E-commerce'">
                {{ $t('solutions.ecommerce') }}<UiHoverUnderline :show="currentFilter === 'E-commerce'" />
            </div>
            <div class="cursor-pointer" @click="currentFilter = 'Blogs'">
                {{ $t('solutions.blogs') }}<UiHoverUnderline :show="currentFilter === 'Blogs'" />
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            <transition-group name="card" mode="out-in">
                <UiCardHoverGradient v-for="sol in solutions" :key="sol.title" class="card border-2">
                    <div class="flex-col h-full px-3">
                        <div class="py-2">
                            <p class="text-xl font-bold">{{ sol.title }}</p>
                            <UiDivider class="my-2" />
                        </div>
                        <div class="rounded-md overflow-hidden hover:scale-105 duration-500 flex justify-center">
                            <a :href="sol.href" target="_blank"
                                ><img :src="sol.img" :alt="`${sol.title} image`" class="max-h-48 cursor-pointer"
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
                </UiCardHoverGradient>
            </transition-group>
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
        title: 'Peoplefinders',
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
    background: $card-gradient;
    min-height: 420px;

    img {
        width: 100%;
        height: 190px;
    }
}
.card-enter-active,
.card-leave-active {
    transition: opacity 0.3s ease-in;
}

.card-enter-from,
.card-leave-to {
    opacity: 0;
}
</style>
