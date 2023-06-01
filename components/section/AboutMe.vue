<template>
    <NuxtLayout name="section">
        <div class="about-me">
            <p class="text-center text-6xl font-bold" data-aos="fade-right">About Me</p>
            <UiDivider class="mt-3 mb-10 mx-auto" data-aos="fade-right" />

            <div class="flex flex-col items-center gap-4">
                <div>
                    <img src="@/assets/me-nobg.png" alt="Charlie Villalobos" id="me-img" />
                </div>
                <p class="text-center text-2xl font-semibold" data-aos="fade-right">{{ $t("aboutMe.name") }}</p>
                <div
                    class="lg:w-8/12 text-lg lg:text-xl flex items-center text-center"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <p>{{ $t("aboutMe.intro") }}</p>
                </div>

                <div class="flex gap-4 flex-wrap w-7/12 justify-center my-8">
                    <div data-aos="fade-up" :data-aos-delay="200 * i" v-for="(tech, i) in techs" :key="i">
                        <div
                            class="p-4 shadow-md bg-white rounded-xl flex justify-center items-center duration-200 hover:-translate-y-1"
                        >
                            <img :src="tech.import" :alt="tech.name" loading="lazy" />
                        </div>
                    </div>
                </div>

                <div class="flex flex-nowrap overflow-x-auto w-full py-4" data-aos="fade-right" data-aos-delay="400">
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
    </NuxtLayout>
</template>

<script setup>
import vueImage from "@/assets/vue.png";
import nuxtImage from "@/assets/nuxt.png";
import firebaseImage from "@/assets/firebase.png";
import htmlImage from "@/assets/html.png";
import cssImage from "@/assets/css.png";
import javascriptImage from "@/assets/javascript.png";
import typescriptImage from "@/assets/typescript.png";
import pythonImage from "@/assets/python.png";
import awsImage from "@/assets/aws.png";
import sqlImage from "@/assets/sql.png";
import cSharp from "@/assets/csharp.png";

useBlurEffect("me-img");
const { t } = useI18n();

const experiences = [
    {
        year: 2023,
        role: "Sr. Frontend Engineer",
        company: "Unosquare",
        description: "Collaborated with diverse teams for US-based companies and clients.",
        isCurrent: true,
    },
    {
        year: 2022,
        role: "Sr. Software Engineer Consultant",
        company: "VASS Latam",
        description: "Provide consultancy services for diverse project types and clients.",
    },
    {
        year: 2020,
        role: "Fullstack Software Developer",
        company: "NSerio / Codifico",
        description: "Led the development and maintenance of multiple web applications.",
    },
    {
        year: 2019,
        role: "Junior Fullstack Developer",
        company: "Puerto Bahía",
        description: "Create and maintain functionalities for the company's web portal.",
    },
];

const techs = [
    { import: vueImage, name: "Vue" },
    { import: nuxtImage, name: "Nuxt" },
    { import: firebaseImage, name: "Firebase" },
    { import: htmlImage, name: "HTML" },
    { import: cssImage, name: "CSS" },
    { import: javascriptImage, name: "JavaScript" },
    { import: typescriptImage, name: "TypeScript" },
    { import: cSharp, name: "Python" },
    { import: pythonImage, name: "Python" },
    { import: awsImage, name: "AWS" },
    { import: sqlImage, name: "SQL" },
];
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
