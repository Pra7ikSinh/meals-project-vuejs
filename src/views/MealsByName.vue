<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { RouterLink, useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';
import ViewOriginalSourceButton from '../components/ViewOriginalSourceButton.vue';
import MealItem from '../components/MealItem.vue';

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
        <img class="" src="../assets/Icons/search.svg" alt="" />
        Search
    </div>
    <div class="flex p-8 pt-2 justify-center">
        <input type="text" class="rounded border-2 border-gray-200 w-full" v-model="searchedKeyword" placeholder="Search for Meals" @change="searchByName" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 p-8 pt-0">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
</template>

<style></style>