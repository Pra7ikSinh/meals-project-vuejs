<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { RouterLink, useRoute } from 'vue-router';

const searchedKeyword = ref('');
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

/**
 * searchByName - search inputted value in the meals db.
 */
function searchByName() {
    // Dispatch `searchMeals` action using store - vuex.
    route.params.name = searchedKeyword.value
    store.dispatch('searchMeals', searchedKeyword.value)
}

onMounted(() => {
    searchedKeyword.value = route.params.name;
    if (searchedKeyword.value) searchByName();
})
</script>

<template>
    <div class="pt-8 mx-8 font-extrabold flex gap-3">
        <img class="" src="../assets/Icons/search.svg" alt=""/>
        Search By Name
    </div>
    <div class="flex p-8 pt-2 justify-center">
        <input type="text" class="rounded border-2 border-gray-200 w-full" v-model="searchedKeyword" placeholder="Search for Meals" @change="searchByName" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 p-8 pt-0">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white drop-shadow-md rounded-xl hover:scale-105 hover:shadow-lg">
            <RouterLink :to="{name: 'meal-details', params: { id: meal.idMeal }}">
                <img class="rounded-t-2xl" :src="meal.strMealThumb" :alt="meal.strMeal + 'image'" />
            </RouterLink>
            <div class="px-2 pt-2">
                <h3 class="p-2 font-semibold">{{ meal.strMeal }}</h3>
                <p class="mb-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi adipisci illum molestiae, ipsa saepe, perferendis vitae at eum voluptates minus veniam dicta unde, omnis cupiditate velit neque officia aperiam. Ad.</p>
                <div class="pb-2 m-2">
                    <a :href="meal.strYoutube" target="_blank" class=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">YouTube</a>
                    <RouterLink to="/" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        View
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>