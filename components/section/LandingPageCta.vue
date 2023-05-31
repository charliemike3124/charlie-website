<template>
    <section>
        <div class="card text-secondary-text flex flex-col items-center">
            <div class="h-full py-2 flex flex-col text-center self-center">
                <div>
                    <p class="mb-4 text-5xl font-bold" data-aos="fade-right" data-aos-delay="200">
                        {{ $t('ctaHeading.1') }} <span class="heading-cta">{{ $t('ctaHeading.2') }}</span
                        >{{ $t('ctaHeading.3') }}
                    </p>
                    <p class="mb-4 text-xl" data-aos="fade-right" data-aos-delay="600">{{ $t('ctaSubheading') }}</p>
                </div>
                <div class="flex gap-6 justify-center">
                    <a href="#solutions">
                        <button
                            data-aos="fade-right"
                            data-aos-delay="800"
                            class="bg-primary text-white font-bold py-2 px-4 rounded-sm shadow-lg my-4 z-10 w-40"
                        >
                            {{ $t('buttons.solutions') }}
                        </button>
                    </a>
                    <button
                        data-aos="fade-right"
                        data-aos-delay="800"
                        class="bg-transparent border-primary border-2 text-white font-bold py-2 px-4 rounded-sm shadow-lg my-4 z-10 w-40"
                    >
                        {{ $t('buttons.contact') }}
                    </button>
                </div>
                <!-- <div class="flex gap-2 justify-center" data-aos="fade-right" data-aos-delay="1000">
                    <a :href="contactLinks.linkedin" target="_blank" alt="linkedin">
                        <UiIcon icon="linkedin" class="cursor-pointer" />
                    </a>
                    <a :href="contactLinks.github" target="_blank" alt="github">
                        <UiIcon icon="github" class="cursor-pointer" />
                    </a>
                </div> -->
            </div>
            <div class="img-container">
                <IllustrationDeveloper class="absolute" data-aos="fade-in" />
            </div>
        </div>
    </section>
</template>

<script setup>
const contactLinks = {
    linkedin: 'https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US',
    github: 'https://github.com/charliemike3124',
};

const mail = useFirebaseEmail();
function sendEmail() {
    mail.sendEmail({
        to: 'carlosvillalobos1047@gmail.com',
        subject: 'test',
        html: 'holardo',
    });
}
</script>

<style lang="scss" scoped>
.card {
    height: 750px;
    @media (min-width: 1280px) {
        height: 750px;
    }

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
