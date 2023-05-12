<template>
    <div class="card shadow-md rounded-sm mt-4 relative">
        <img
            src="~//assets/me-nobg.png"
            alt="charlie-villalobos-img"
            class="md:visible invisible absolute bottom-0 left-6"
        />
        <div class="ml-6 h-full flex items-center">
            <div class="p-10">
                <p class="text-3xl"> {{$t('welcome')}}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    background: linear-gradient(to bottom right, #001528, #002b5c);
    height: 450px;

    img {
        filter: drop-shadow(0 -4px 4px white);
    }

    > div {
        margin-left: calc(392px + 1.5rem);
    }
}
</style>
