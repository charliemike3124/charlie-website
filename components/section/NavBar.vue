<template>
    <section data-aos="fade-in" class="mb-0 mx-auto px-12 lg:px-32 2xl:px-64">
        <nav>
            <ul class="h-24 flex justify-between items-center">
                <li>
                    <a class="font-extrabold italic cursor-pointer text-lg" href="#"> Charlie Villalobos. </a>
                </li>
                <li class="text-center font-bold text-sm hidden md:flex">
                    <div v-for="(l, i) in c.websiteLinks" :key="i" class="m-5">
                        <a
                            class="cursor-pointer m-auto"
                            :href="`#${l.elementId}`"
                            @click.prevent="onLinkClick(l.elementId)"
                            >{{ l.name }}
                            <UiHoverUnderline />
                        </a>
                    </div>
                </li>

                <li class="md:hidden flex justify-end w-full relative">
                    <UiIcon
                        icon="hamburger"
                        :no-hover-effect="true"
                        class="cursor-pointer"
                        @click="showHamburgerMenu = !showHamburgerMenu"
                    />
                    <div
                        :class="showHamburgerMenu ? 'opacity-100 translate-y-2' : 'opacity-0'"
                        class="absolute right-0 top-10 bg-background-1 rounded-sm shadow-lg text-primary-text p-2 z-50 duration-300 w-36 stickymenu"
                    >
                        <div v-for="(l, i) in c.websiteLinks" :key="i" class="m-5">
                            <a
                                class="cursor-pointer m-auto"
                                :href="`#${l.elementId}`"
                                @click.prevent="onLinkClick(l.elementId)"
                                >{{ l.name }}
                                <UiHoverUnderline color="black" />
                            </a>
                        </div>
                    </div>
                </li>

                <li>
                    <UiButton
                        data-aos="fade-right"
                        data-aos-delay="600"
                        @click="$emit('showContactForm')"
                        primary
                        class="hidden md:block"
                    >
                        {{ $t("buttons.contact") }}
                    </UiButton>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script setup>
    const c = useConstants();
    const showHamburgerMenu = ref(false);

    function onLinkClick(id) {
        const el = document.getElementById(id);
        el.scrollIntoView();
    }
</script>

<style lang="scss">
    .stickymenu {
        z-index: 1 !important;
        [data-aos] {
            pointer-events: none !important;
            &.aos-animate {
                pointer-events: auto !important;
            }
        }
    }
</style>
