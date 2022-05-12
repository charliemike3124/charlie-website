<template>
	<button class="p-5 rounded-lg bg-blue-500 text-white" @click="$emit('openContactForm')">Contact Me</button>
</template>

<script setup>
defineEmits(['openContactForm']);
</script>
