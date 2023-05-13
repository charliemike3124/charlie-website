<template>
    <ui-card-hover-gradient class="card shadow-md rounded-md mt-4 overflow-hidden">
        <img
            data-aos="fade-right"
            data-aos-delay="200"
            src="~//assets/me-nobg.png"
            alt="charlie-villalobos-img"
            class="md:visible invisible absolute bottom-0 left-6"
        />
        <div class="ml-6 h-full flex items-center">
            <div class="p-10">
                <p class="text-3xl mb-2" data-aos="fade-left" data-aos-delay="200">{{ $t('welcome1') }}</p>
                <p class="text-3xl mb-2" data-aos="fade-left" data-aos-delay="400">
                    {{ $t('welcome2.A') }} <span class="text-green-400 font-bold">Vue</span> {{ $t('welcome2.B') }}
                    <span class="font-bold">{{ $t('welcome2.C') }}</span> {{ $t('welcome2.D') }}
                </p>
                <p class="text-3xl mb-2" data-aos="fade-left" data-aos-delay="600">{{ $t('welcome3') }}</p>
                <button
                    data-aos="fade-left"
                    data-aos-delay="800"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg my-4 z-10"
                >
                    {{ $t('buttons.contactMe') }}
                </button>
            </div>
        </div>
    </ui-card-hover-gradient>
</template>

<style lang="scss" scoped>
.card {
    background: linear-gradient(to bottom right, #001528, #002b5c);
    height: 450px;

    img {
        filter: drop-shadow(0 0 4px white);
    }

    > div {
        @media (min-width: 768px) {
            margin-left: calc(392px + 1.5rem);
        }
    }
}
</style>

<script setup>
import CardHoverGradient from './ui/card-hover-gradient.vue';


</script>
