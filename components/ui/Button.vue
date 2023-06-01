<template>
    <div>
        <button :class="btnClass">
            <slot />
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    outlined: Boolean,
});

const btnClass = computed(() => {
    let name =
        "text-primary-text font-semibold py-2 px-4 rounded-2xl shadow-lg my-4 z-10 w-40 hover:bg-primary hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 ";
    if (props.outlined) {
        name += "text-white bg-transparent border-background-1 border-2 ";
    } else {
        name += "bg-background-1 ";
    }
    return name;
});
</script>
