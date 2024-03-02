<script setup>
import { RouterLink } from 'vue-router';


const alphabets = (charA = "A", charZ = "Z") => {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
};
</script>

<template>
	<div class="flex flex-col p-8 justify-center">
		<input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals">
		<div class="flex justify-center gap-3 mt-5 font-bold">
			<RouterLink :to="{ name:'search-by-letter', params: {letter:alphabet} }" v-for="alphabet of alphabets()" :key="letter">
				{{ alphabet }}
			</RouterLink>
		</div>
	</div>

	
</template>

<style>

</style>