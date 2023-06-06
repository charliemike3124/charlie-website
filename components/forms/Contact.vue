<template>
    <div class="contact-form">
        <p class="text-5xl mb-4 font-bold text-primary">{{ $t("contact.title") }}</p>
        <p class="text-md text-gray-700 mb-2">{{ $t("contact.subtitle") }}</p>
        <div class="mb-8 flex gap-2">
            <a href="https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US" target="_blank" alt="linkedin">
                <p class="flex items-center gap-2 underline">
                    <UiIcon icon="linkedin" class="cursor-pointer" /></p
            ></a>
            <a href="https://github.com/charliemike3124" target="_blank" alt="github">
                <p class="flex items-center gap-2 underline">
                    <UiIcon icon="github" class="cursor-pointer" /></p
            ></a>
            <a href="https://wa.me/573174027001" target="_blank">
                <p class="flex items-center gap-2 underline">
                    <UiIcon icon="whatsapp" class="cursor-pointer" />
                </p>
            </a>
        </div>
        <form @submit.prevent.stop="onSubmit" class="flex flex-col gap-4">
            <label for="name">Name (Optional)</label>
            <input
                id="name"
                autofocus
                class="bg-white rounded-lg h-12 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary"
                v-model="form.name"
            />
            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                class="bg-white rounded-lg h-12 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary"
                required
                v-model="form.email"
            />
            <label for="message">Message</label>
            <textarea
                id="message"
                required
                @keydown.enter="onsubmit"
                class="bg-white rounded-lg h-24 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary resize-none"
                v-model="form.message"
            />
            <UiButton type="submit" primary :disabled="submitBtn.disabled" :class="submitBtn.class">{{
                submitBtn.text
            }}</UiButton>
        </form>
    </div>
</template>

<script setup>
    const props = defineProps({
        closeModal: Function,
    });
    const form = ref({
        name: "",
        email: "",
        message: "",
    });

    const submitBtn = ref({
        text: "Send Message",
        disabled: false,
        class: "",
    });

    const mail = useMail();
    function onSubmit() {
        form.value.name = form.value.name.replaceAll(/\s/g, "");

        mail.send({
            html: `Una persona se quiere contactar contigo: <br><br>
                Nombre: ${form.value.name} <br>
                Email: ${form.value.email} <br>
                Mensaje: ${form.value.message} <br>
                `,
        });

        submitBtn.value.text = "Sent!";
        submitBtn.value.disabled = true;
        submitBtn.value.class = "duration-200 -translate-y-2";

        setTimeout(() => {
            props.closeModal();
        }, 1000);
    }
</script>

<style lang="scss" scoped>
    .contact-form {
        max-width: 600px;
    }
</style>
