<script setup>
import { RouterLink } from 'vue-router';
import axiosClient from '../config/axiosClient';
import { computed, onMounted, ref } from 'vue';

const meals = ref([]);



onMounted(async () => {
	try {
		const response = await axiosClient.get('list.php?i=list');
		meals.value = response.data;
	} catch (error) {
		console.error(`An error occurred while fetching data. Please try again. ERROR: ${error.message}`);
	}
});
</script>

<template>
	<pre>{{ meals }}</pre>
</template>

<style></style>