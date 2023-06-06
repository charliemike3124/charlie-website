<template>
    <NuxtLayout name="section">
        <div class="landing-page-cta text-secondary-text flex flex-col items-center">
            <div class="h-full py-2 flex flex-col text-center self-center">
                <div>
                    <p class="mb-4 text-5xl font-bold" data-aos="fade-right">
                        {{ $t("ctaHeading.1") }} <span class="heading-cta">{{ $t("ctaHeading.2") }}</span
                        >{{ $t("ctaHeading.3") }}
                    </p>
                    <p class="mb-4 text-xl" data-aos="fade-right" data-aos-delay="200">{{ $t("ctaSubheading") }}</p>
                </div>
                <div class="flex justify-center items-center gap-4" data-aos="fade-right" data-aos-delay="400">
                    <a href="https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US" target="_blank" alt="linkedin">
                        <p class="flex gap-2 underline">
                            <UiIcon icon="linkedin" class="cursor-pointer" /></p
                    ></a>
                    <a href="https://github.com/charliemike3124" target="_blank" alt="github">
                        <p class="flex gap-2 underline">
                            <UiIcon icon="github" class="cursor-pointer" /></p
                    ></a>
                    <a href="https://wa.me/573174027001" target="_blank">
                        <p class="flex gap-2 underline">
                            <UiIcon icon="whatsapp" class="cursor-pointer" />
                        </p>
                    </a>
                </div>
                <div class="flex gap-6 justify-center items-center">
                    <a href="#solutions">
                        <UiButton data-aos="fade-right" data-aos-delay="600">
                            {{ $t("buttons.solutions") }} <UiIcon icon="arrowDownRight" class="!w-4 !h-4" />
                        </UiButton>
                    </a>
                    <UiButton data-aos="fade-right" data-aos-delay="600" outlined @click="sendEmail">
                        {{ $t("buttons.contact") }}
                    </UiButton>
                </div>
            </div>
            <div class="img-container">
                <IllustrationDeveloper class="absolute" data-aos="fade-in" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const config = useRuntimeConfig();

    const mail = useMail();
    function sendEmail() {
        config.MAILER_TO_ADDRESS = "charliemike31245@gmail.com";
        mail.send({
            html: "",
        });
    }
</script>

<style lang="scss" scoped>
    .landing-page-cta {
        height: 750px;

        .heading-cta {
            filter: drop-shadow(0px 0px 3px white);
        }

        .img-container {
            position: relative;
            height: 50%;
            width: 360px;
            @media (min-width: 768px) {
                width: 500px;
            }
            @media (min-width: 1280px) {
                width: 600px;
            }
            > svg {
                bottom: -100px;
            }
        }
    }
</style>
