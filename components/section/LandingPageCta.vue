<template>
    <NuxtLayout name="section">
        <div class="landing-page-cta text-secondary-text flex flex-col items-center">
            <div class="h-full py-2 flex flex-col text-center self-center">
                <div>
                    <p class="mb-4 text-5xl font-bold" data-aos="fade-right" data-aos-delay="200">
                        {{ $t("ctaHeading.1") }} <span class="heading-cta">{{ $t("ctaHeading.2") }}</span
                        >{{ $t("ctaHeading.3") }}
                    </p>
                    <p class="mb-4 text-xl" data-aos="fade-right" data-aos-delay="600">{{ $t("ctaSubheading") }}</p>
                </div>
                <div class="flex gap-6 justify-center">
                    <a href="#solutions">
                        <UiButton data-aos="fade-right" data-aos-delay="800">
                            {{ $t("buttons.solutions") }} <UiIcon icon="arrowDownRight" class="w-5" />
                        </UiButton>
                    </a>
                    <a href="https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US" target="_blank">
                        <UiButton data-aos="fade-right" data-aos-delay="800" outlined>
                            {{ $t("buttons.contact") }}
                        </UiButton>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <IllustrationDeveloper class="absolute" data-aos="fade-in" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const mail = useFirebaseEmail();
function sendEmail() {
    mail.sendEmail({
        to: "carlosvillalobos1047@gmail.com",
        subject: "test",
        html: "holardo",
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
        width: 400px;
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
