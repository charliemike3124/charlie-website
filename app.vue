<template>
	<nav class="p-5 border-gray-50 border-2">
		<div class="flex flex-row">
			<div class="w-1/2">
				<span>Projects</span>
				<span>About Me</span>
			</div>
			<div class="w-1/2">
				<ContactBtn @openContactForm="openContactForm"></ContactBtn>
			</div>
		</div>
	</nav>
	<NuxtLayout name="HomePage">{{ common.test }}</NuxtLayout>
	<NuxtLayout name="ContactForm"><button @click="common.increment">Contact</button></NuxtLayout>
</template>

<script setup>
import { useCommonStore } from './stores/common';

const common = useCommonStore();

function openContactForm() {
	console.log('open');
}
</script>
