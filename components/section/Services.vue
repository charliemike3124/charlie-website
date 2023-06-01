<template>
    <NuxtLayout name="section" class="services relative mt-64 text-primary-text" id="services">
        <span class="bg-text pointer-events-none">DELIVERY</span>
        <div class="flex flex-col lg:flex-row">
            <div class="flex flex-col align-middle justify-center lg:w-1/2 lg:pr-36">
                <div class="delivery-arrow hidden lg:block">
                    <img
                        src="@/assets/delivery-arrow.png"
                        alt="deliver"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        loading="lazy"
                    />
                </div>
                <div class="deliver hidden lg:block">
                    <img
                        src="@/assets/deliver.png"
                        alt="deliver"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        loading="lazy"
                    />
                </div>
                <div data-aos="fade-right" data-aos-delay="200" class="text-center lg:text-left mb-20 lg:mb-0">
                    <p class="text-5xl font-bold mb-8">{{ $t("services.title") }}</p>
                    <p class="text-xl">
                        {{ $t("services.subtitle") }}
                    </p>
                    <a href="https://wa.me/573174027001" target="_blank" class="flex justify-center lg:justify-start">
                        <UiButton class="lg:translate-y-8" primary>{{ $t("buttons.contact") }}</UiButton>
                    </a>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row w-full lg:w-1/2 lg:justify-normal justify-center">
                <div class="flex flex-col gap-y-8 self-center" data-aos="fade-right">
                    <div
                        class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 -translate-y-10 sm:-rotate-1"
                    >
                        <div class="icon-wrapper text-primary"><UiIcon icon="web" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:rotate-1 mt-4">
                            {{ $t("services.webDevelopment") }}
                        </p>
                        <p class="text-s text-gray-600 sm:rotate-1">
                            {{ $t("services.webDevelopmentText") }}
                        </p>
                    </div>
                    <div
                        class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 -translate-y-10 sm:-rotate-1"
                    >
                        <div class="icon-wrapper text-accent-1"><UiIcon icon="cog" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:rotate-1 mt-4">{{ $t("services.api") }}</p>
                        <p class="text-s text-gray-600 sm:rotate-1">
                            {{ $t("services.apiText") }}
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-y-8 pl-4 self-center" data-aos="fade-left">
                    <div class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 sm:rotate-1">
                        <div class="icon-wrapper text-accent-2"><UiIcon icon="consulting" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:-rotate-1 mt-4">
                            {{ $t("services.consulting") }}
                        </p>
                        <p class="text-s text-gray-600 sm:-rotate-1">
                            {{ $t("services.consultingText") }}
                        </p>
                    </div>
                    <div class="card relative bg-white rounded-md shadow-xl lg:-translate-x-20 sm:rotate-1">
                        <div class="icon-wrapper text-gray-600"><UiIcon icon="tutoring" /></div>
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:-rotate-1 mt-4">
                            {{ $t("services.tutoring") }}
                        </p>
                        <p class="text-s text-gray-600 sm:-rotate-1">
                            {{ $t("services.tutoringText") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

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
        width: 150px;
        transform: scaleX(-1);
        transform: scaleX(-1) rotate(7deg);
        position: absolute;
        top: 0;

        @media (min-width: 1536px) {
            width: 150px;
            top: 30px;
            left: 220px;
        }
    }

    .delivery-arrow {
        position: absolute;
        top: -20px;
        transform: rotate(39deg);
        left: 300px;

        @media (min-width: 1024px) {
            width: 140px;
        }
        @media (min-width: 1280px) {
            top: -50px;
            left: 380px;
            width: 170px;
        }
        @media (min-width: 1536px) {
            left: 400px;
            width: 340px;
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
