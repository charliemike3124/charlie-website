<template>
    <div class="card rounded-2xl shadow-sm">
        <div class="thumbnail">
            <img
                src="@/assets/work-thumbnail.png"
                alt="Solution Background Thumbnail"
                loading="lazy"
                class="bg-texture"
            />
            <img :src="props.img" alt="Solution Preview" loading="lazy" class="preview" />
        </div>
        <div class="px-8 py-4 text-left flex flex-col">
            <div>
                <p class="text-md lg:text-xl font-bold mb-4">{{ props.title }}</p>
                <p class="text-xs lg:text-s text-gray-400">{{ props.description }}</p>
            </div>
            <div class="flex-grow flex items-end py-8">
                <a :href="props.href" target="_blank" class="underline flex gap-2">
                    {{ $t("solutions.visit") }} <UiIcon icon="openInNew" class="w-4"
                /></a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    img: String,
    title: String,
    description: String,
    href: String,
});
const min = -20;
const max = 20;
const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
const randomHue = `${randomValue}deg`;
</script>

<style lang="scss" scoped>
.card {
    min-height: 300px;
    width: 285px;
    background: white;
    overflow: hidden;
    transition: all 0.7s ease;

    .thumbnail {
        width: 100%;
        height: 215px;
        padding: 10px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .preview {
            cursor: pointer;
            filter: drop-shadow(2px 4px 6px gray);
            transition: all 300ms ease;
            &:hover {
                rotate: 5deg;
                scale: 1.05;
            }
        }
        .bg-texture {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0.7;
            filter: blur(7px) hue-rotate(v-bind("randomHue"));
        }
    }
}
</style>
