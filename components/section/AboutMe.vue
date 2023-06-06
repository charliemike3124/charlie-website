<template>
    <NuxtLayout name="section" id="aboutMe">
        <div class="about-me">
            <p class="text-center text-6xl font-bold" data-aos="fade-right">{{ $t("aboutMe.title") }}</p>
            <UiDivider class="mt-3 mb-10 mx-auto" data-aos="fade-right" />

            <div class="flex flex-col items-center gap-4">
                <div>
                    <nuxt-img format="webp" loading="lazy" src="/me-nobg.png" alt="Charlie Villalobos" id="me-img" />
                </div>
                <p class="text-center text-2xl font-semibold" data-aos="fade-right">{{ $t("aboutMe.name") }}</p>
                <div
                    class="lg:w-8/12 text-lg lg:text-xl flex items-center text-center"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <p>{{ $t("aboutMe.intro") }}</p>
                </div>

                <div class="flex gap-4 flex-wrap lg:w-7/12 justify-center my-8">
                    <div data-aos="fade-up" :data-aos-delay="100 * i" v-for="(tech, i) in techs" :key="i">
                        <UiTooltip :text="tech.name">
                            <div
                                class="p-3 shadow-md bg-white rounded-xl flex justify-center items-center duration-200 w-16 h-16"
                                :tooltip="tech.name"
                            >
                                <nuxt-img
                                    :src="tech.import"
                                    :alt="tech.name"
                                    loading="lazy"
                                    format="webp"
                                    width="50"
                                    height="50"
                                />
                            </div>
                        </UiTooltip>
                    </div>
                </div>

                <div class="relative w-full" data-aos="fade-right" data-aos-delay="400">
                    <img
                        src="fade-overflow.png"
                        loading="lazy"
                        class="absolute top-0 z-10 pointer-events-none w-full h-full invisible sm:visible"
                    />
                    <div class="flex flex-nowrap overflow-x-auto w-full py-4 px-8">
                        <div class="experience-card rounded-lg shadow-lg" v-for="(exp, i) in experiences" :key="i">
                            <p class="text-md md:text-lg font-bold text-primary">
                                {{ exp.year }} {{ exp.isCurrent ? " (Current Role)" : "" }}
                            </p>
                            <p class="text-md md:text-xl font-bold">{{ exp.role }}</p>
                            <p class="text-xs md:text-sm font-bold text-gray-500">{{ exp.company }}</p>
                            <p class="text-sm md:text-md mt-4">{{ exp.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { t } = useI18n();

    const experiences = ref([
        {
            year: 2023,
            role: "Sr. Frontend Engineer",
            company: "Unosquare",
            description: t("aboutMe.unosquare"),
            isCurrent: true,
        },
        {
            year: 2022,
            role: "Sr. Software Engineer Consultant",
            company: "VASS Latam",
            description: t("aboutMe.vass"),
        },
        {
            year: "2020-2021",
            role: "Fullstack Software Developer",
            company: "NSerio / Codifico",
            description: t("aboutMe.codifico"),
        },
        {
            year: 2019,
            role: "Junior Fullstack Developer",
            company: "Puerto Bahía",
            description: t("aboutMe.puertobahia"),
        },
    ]);

    const techs = [
        { import: "vue.png", name: "Vue" },
        { import: "nuxt.png", name: "Nuxt" },
        { import: "firebase.png", name: "Firebase" },
        { import: "html.png", name: "HTML" },
        { import: "css.png", name: "CSS" },
        { import: "javascript.png", name: "JavaScript" },
        { import: "typescript.png", name: "TypeScript" },
        { import: "cSharp.png", name: "Python" },
        { import: "python.png", name: "Python" },
        { import: "aws.png", name: "AWS" },
        { import: "sql.png", name: "SQL" },
    ];
    useBlurEffect("me-img");
</script>

<style lang="scss" scoped>
    .about-me {
        position: relative;

        .experience-card {
            min-width: 260px;
            height: 220px;
            padding: 30px 20px;
            margin-right: 10px;
            display: inline-block;
            background: white;
            @media (min-width: 768px) {
                min-width: 360px;
                margin-right: 20px;
            }
        }

        ::-webkit-scrollbar {
            width: 4px; /* Set the width of the scrollbar */
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--primary); /* Set the color of the scrollbar thumb */
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #5aad99; /* Set the color of the scrollbar thumb on hover */
        }
    }
</style>
