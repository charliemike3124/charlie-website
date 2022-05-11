<template>
	<NuxtLayout name="HomePage">{{ common.test }}</NuxtLayout>
	<NuxtLayout name="ContactForm"><button @click="common.increment">Contact</button></NuxtLayout>
</template>

<script setup>
import { useCommonStore } from '../stores/common';

const common = useCommonStore();
</script>
