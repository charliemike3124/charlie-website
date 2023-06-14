<template>
    <div class="contact-form">
        <form @submit.prevent.stop="onSubmit" class="flex flex-col gap-4 text-left">
            <label for="name">{{ $t("form.name") }}</label>
            <input
                id="name"
                class="bg-white rounded-lg h-12 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary text-primary-text"
                v-model="form.name"
            />
            <label for="email">{{ $t("form.mail") }}</label>
            <input
                id="email"
                type="email"
                class="bg-white rounded-lg h-12 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary text-primary-text"
                required
                v-model="form.email"
            />
            <label for="message">{{ $t("form.message") }}</label>
            <textarea
                id="message"
                required
                @keydown.enter="onsubmit"
                class="bg-white rounded-lg h-24 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary resize-none text-primary-text"
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
        min-width: 340px;

        @media (min-width: 768px) {
            min-width: 400px;
        }
    }
</style>
