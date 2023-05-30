<template>
    <section class="services my-36 px-24 text-primary-text">
        <div class="flex h-full">
            <div class="flex flex-col align-middle justify-center w-1/2 pr-36">
                <div class="delivery-arrow">
                    <img src="@/assets/delivery-arrow.png" alt="deliver" data-aos="fade-left" data-aos-delay="200" />
                </div>
                <div class="deliver">
                    <img src="@/assets/deliver.png" alt="deliver" data-aos="fade-left" data-aos-delay="200" />
                </div>
                <div data-aos="fade-right" data-aos-delay="200">
                    <p class="text-5xl font-bold mb-8">Here's what I can deliver.</p>
                    <p class="text-xl">
                        Leverage the expertise of a seasoned web developer to elevate your online presence and achieve
                        exceptional results.
                    </p>
                </div>
            </div>
            <div class="flex w-1/2 relative">
                <span class="bg-text">DELIVERY</span>
                <div class="flex flex-col gap-y-4 self-center" data-aos="fade-right">
                    <UiCardHoverGradient
                        class="card bg-white rounded-md shadow-xl w-44 -translate-x-20 -translate-y-10 sm:-rotate-1"
                    >
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:rotate-1">Web Development</p>
                        <p class="text-s text-gray-600 sm:rotate-1">
                            Craft exceptional websites with cutting-edge technologies, smooth UX, and responsive
                            designs.
                        </p>
                    </UiCardHoverGradient>
                    <UiCardHoverGradient
                        class="card bg-white rounded-md shadow-xl w-44 -translate-x-20 -translate-y-10 sm:-rotate-1"
                    >
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:rotate-1">API Integration</p>
                        <p class="text-s text-gray-600 sm:rotate-1">
                            Seamlessly integrate third-party APIs to enhance functionality and deliver seamless
                            experiences.
                        </p>
                    </UiCardHoverGradient>
                </div>
                <div class="flex flex-col gap-y-4 pl-4 self-center" data-aos="fade-left">
                    <UiCardHoverGradient class="card bg-white rounded-md shadow-xl w-44 -translate-x-20 sm:rotate-1">
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:-rotate-1">Consulting</p>
                        <p class="text-s text-gray-600 sm:-rotate-1">
                            Analyze, optimize, and achieve your web goals through project collaboration and expert
                            recommendations.
                        </p>
                    </UiCardHoverGradient>
                    <UiCardHoverGradient class="card bg-white rounded-md shadow-xl w-44 -translate-x-20 sm:rotate-1">
                        <p class="text-xl font-bold mb-4 text-gray-700 sm:-rotate-1">Tutoring</p>
                        <p class="text-s text-gray-600 sm:-rotate-1">
                            Gain insights and expand your skills with expert guidance with personalized sessions.
                        </p>
                    </UiCardHoverGradient>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.services {
    height: 600px;
    position: relative;

    .card {
        padding: 20px;
        height: 200px;
        width: 300px;
    }

    .deliver {
        width: 150px;
        transform: scaleX(-1);
        transform: scaleX(-1) rotate(7deg);
        position: absolute;
        top: 30px;
        left: 120px;
    }

    .delivery-arrow {
        position: absolute;
        top: -20px;
        transform: rotate(39deg);
        left: 340px;
    }

    .bg-text {
        font-size: 400px;
        position: absolute;
        opacity: 0.02;
        bottom: -160px;
        left: -554px;
    }
}
</style>
