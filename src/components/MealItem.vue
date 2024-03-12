<script setup>

import { RouterLink } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';
import ViewOriginalSourceButton from '../components/ViewOriginalSourceButton.vue';

const props = defineProps({
    meal : Object,
})

</script>

<template>
    <div class="bg-white drop-shadow-md rounded-xl hover:scale-105 hover:shadow-lg">
        <RouterLink :to="{ name: 'meal-details', params: { id: meal.idMeal } }">
            <img class="rounded-t-2xl" :src="meal.strMealThumb" :alt="meal.strMeal + 'image'" />
        </RouterLink>
        <div class="px-2 pt-2">
            <div>
                <h3 class="p-2 font-semibold">{{ meal.strMeal }}</h3>
            </div>
            <!-- <p class="mb-5">{{ strInstructions }}</p> -->
            <div class="pb-2 mt-2 flex flex-row sm:flex-row md:flex-col justify-start align-middle items-start">
                <YoutubeButton :youtubeLink="meal.strYoutube"></YoutubeButton>
                <ViewOriginalSourceButton :sourceLink="meal.strSource"></ViewOriginalSourceButton>
            </div>
        </div>
    </div>
</template>

<style scoped></style>