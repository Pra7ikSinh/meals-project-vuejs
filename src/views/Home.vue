<script setup>
import { RouterLink } from 'vue-router';
import axiosClient from '../config/axiosClient';
import { computed, onMounted, ref } from 'vue';

const meals = ref([]);
/**
 *  letters - return letters array
 *  @param charA String  
 *  @param charB String  
 */
const letters = (charA = "A", charZ = "Z") => {
	var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
	for (; i <= j; ++i) {
		a.push(String.fromCharCode(i));
	}
	return a;
};


onMounted( async () => {
	try {
		const response = await axiosClient.get('list.php?i=list');
		console.log(response);
		meals.value = response.data;
	} catch (error) {
		console.error(`An error occurred while fetching data. Please try again. ERROR: ${error.message}`);
	}
});
</script>

<template>
	<div class="flex flex-col p-8 justify-center">
		<input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals">
		<div class="flex justify-center gap-3 mt-5 font-bold">
			<RouterLink :to="{ name: 'search-by-letter', params: { letter } }" v-for="letter of letters()" :key="letter">
				{{ letter }}
			</RouterLink>
		</div>
	</div>
	<pre>{{ meals }}</pre>
</template>

<style></style>