<template>
    <div>
        <div class="text-white bg-radial-gradient relative">
            <SectionNavBar />
            <img src="/bg.png" alt="Side fade" class="absolute top-0 left-0 opacity-5 w-full pointer-events-none" />
            <img src="/cta-bottom.png" alt="Bottom fade" class="absolute w-screen" style="bottom: -1px" />
            <SectionLandingPageCta />
        </div>
        <LazySectionServices />
        <LazySectionSolutions />
        <LazySectionAboutMe />
        <LazySectionFooter />
    </div>
</template>
