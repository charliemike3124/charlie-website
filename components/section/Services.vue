<template>
    <NuxtLayout name="section" class="services relative mt-64 text-primary-text">
        <div class="offset-scroll" id="services"></div>
        <span class="bg-text pointer-events-none">DELIVERY</span>
        <div class="flex flex-col lg:flex-row">
            <div class="flex flex-col align-middle justify-center lg:w-1/2 lg:pr-36">
                <div class="delivery-arrow hidden lg:block">
                    <nuxt-img
                        src="/delivery-arrow.png"
                        alt="deliver"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        loading="lazy"
                        format="webp"
                    />
                </div>
                <div class="deliver hidden lg:block">
                    <nuxt-img
                        src="/deliver.png"
                        alt="deliver"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        loading="lazy"
                        format="webp"
                    />
                </div>
                <div data-aos="fade-right" data-aos-delay="200" class="text-center lg:text-left mb-20 lg:mb-0">
                    <p class="text-5xl font-bold mb-8">{{ configStore.msg.services.title }}</p>
                    <p class="text-xl">
                        {{ configStore.msg.services.subtitle }}
                    </p>
                    <div class="flex justify-center lg:justify-start">
                        <UiButton class="lg:translate-y-8" primary @click="$emit('showContactForm')">{{
                            configStore.msg.buttons.contact
                        }}</UiButton>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row w-full lg:w-1/2 lg:justify-normal justify-center">
                <div class="flex flex-col gap-y-8 self-center" data-aos="fade-right">
                    <div
                        class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 -translate-y-10 sm:-rotate-1"
                    >
                        <div class="icon-wrapper text-primary"><UiIcon icon="web" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:rotate-1 mt-4">
                            {{ configStore.msg.services.webDevelopment }}
                        </p>
                        <p class="text-s text-gray-600 sm:rotate-1">
                            {{ configStore.msg.services.webDevelopmentText }}
                        </p>
                    </div>
                    <div
                        class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 -translate-y-10 sm:-rotate-1"
                    >
                        <div class="icon-wrapper text-accent-1"><UiIcon icon="cog" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:rotate-1 mt-4">
                            {{ configStore.msg.services.api }}
                        </p>
                        <p class="text-s text-gray-600 sm:rotate-1">
                            {{ configStore.msg.services.apiText }}
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-y-8 pl-4 self-center" data-aos="fade-left">
                    <div class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 sm:rotate-1">
                        <div class="icon-wrapper text-accent-2"><UiIcon icon="consulting" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:-rotate-1 mt-4">
                            {{ configStore.msg.services.consulting }}
                        </p>
                        <p class="text-s text-gray-600 sm:-rotate-1">
                            {{ configStore.msg.services.consultingText }}
                        </p>
                    </div>
                    <div class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 sm:rotate-1">
                        <div class="icon-wrapper text-gray-600"><UiIcon icon="tutoring" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:-rotate-1 mt-4">
                            {{ configStore.msg.services.tutoring }}
                        </p>
                        <p class="text-s text-gray-600 sm:-rotate-1">
                            {{ configStore.msg.services.tutoringText }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const configStore = useConfigStore();
</script>

<style lang="scss" scoped>
    .services {
        min-height: 600px;
        position: relative;
        > div {
            min-height: 600px;
        }

        .card {
            padding: 20px;
            height: 200px;
            width: 300px;
            .icon-wrapper {
                position: absolute;
                top: -20px;
                left: 15px;
                border-radius: 50%;
                overflow: hidden;
                border: 4px solid var(--background-1);
                background: white;
                height: 50px;
                width: 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                > svg {
                    width: 33px;
                    height: 33px;
                }
            }
        }

        .deliver {
            width: 130px;
            transform: scaleX(-1);
            transform: scaleX(-1) rotate(7deg);
            position: absolute;
            top: 0;

            @media (min-width: 1024px) {
                width: 140px;
                top: -30px;
            }

            @media (min-width: 1536px) {
                width: 150px;
                top: -10px;
                left: 300px;
            }
        }

        .delivery-arrow {
            position: absolute;
            top: -40px;
            transform: rotate(39deg);
            left: 300px;

            @media (min-width: 1024px) {
                width: 140px;
            }
            @media (min-width: 1280px) {
                top: -70px;
                left: 380px;
                width: 170px;
            }
            @media (min-width: 1536px) {
                top: -70px;
                left: 480px;
                width: 190px;
            }
        }

        .bg-text {
            font-size: 400px;
            position: absolute;
            opacity: 0.02;
            bottom: 20%;
            left: -300px;
            filter: blur(5px);
        }
    }
</style>
