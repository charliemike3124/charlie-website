<template>
    <div>
        <button :class="btnClass" class="flex justify-center items-center">
            <slot />
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        outlined: Boolean,
        primary: Boolean,
    });

    const btnClass = computed(() => {
        let name =
            "flex justify-center text-primary-text font-semibold py-2 px-4 rounded-2xl shadow-lg my-4 z-10 w-40 hover:bg-primary hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 ";
        if (props.outlined) {
            name += props.primary
                ? "bg-primary border-primary border-2 text-white"
                : "text-white bg-transparent border-background-1 border-2 ";
        } else {
            name += props.primary ? "bg-primary text-white hover:text-primary-text" : "bg-background-1 ";
        }

        return name;
    });
</script>
