<template>
    <section>
        <UiCardHoverGradient class="card mt-4">
            <img
                data-aos="fade-right"
                data-aos-delay="200"
                src="~//assets/me-nobg.png"
                alt="charlie-villalobos-img"
                class="lg:visible invisible absolute bottom-0 left-6"
            />
            <div class="ml-6 h-full p-4 sm:p-10 flex flex-col justify-center">
                <div>
                    <p class="text-3xl mb-4" data-aos="fade-left" data-aos-delay="200">{{ $t('welcome1') }}</p>
                    <p class="text-3xl mb-4" data-aos="fade-left" data-aos-delay="400">
                        {{ $t('welcome2.A') }} <span class="text-green-400 font-bold">Vue</span> {{ $t('welcome2.B') }}
                        <span class="font-bold">{{ $t('welcome2.C') }}</span> {{ $t('welcome2.D') }}
                    </p>
                    <p class="text-3xl mb-4" data-aos="fade-left" data-aos-delay="600">{{ $t('welcome3') }}</p>
                </div>
                <button
                    data-aos="fade-left"
                    data-aos-delay="800"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg my-4 z-10 w-32"
                    @click="showModal = !showModal"
                >
                    {{ $t('buttons.contactMe') }}
                </button>
                <div class="flex gap-2" data-aos="fade-left" data-aos-delay="1000">
                    <a :href="contactLinks.linkedin" target="_blank">
                        <UiIcon icon="linkedin" class="cursor-pointer" />
                    </a>
                    <a :href="contactLinks.github" target="_blank">
                        <UiIcon icon="github" class="cursor-pointer" />
                    </a>
                </div>
                <UiModal :is-active="showModal"></UiModal>
            </div>
        </UiCardHoverGradient>
    </section>
</template>

<script setup>
const contactLinks = {
    linkedin: 'https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US',
    github: 'https://github.com/charliemike3124',
};

const showModal = ref(false);
</script>

<style lang="scss" scoped>
.card {
    background: linear-gradient(to bottom right, #001528, #002b5c);
    height: 520px;
    @media (min-width: 1280px) {
        height: 450px;
    }

    img {
        filter: drop-shadow(0 0 4px white);
    }

    > div {
        @media (min-width: 1024px) {
            margin-left: calc(392px + 1.5rem);
        }
    }
}
</style>
