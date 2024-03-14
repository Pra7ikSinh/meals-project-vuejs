<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItem from '../components/MealItem.vue';



const mealByLetter = ref(null);
const route = useRoute();
const meals = computed(() => store.state.mealByLetter)

onMounted(() => {
    if (route.params.letter) getMealsByLetter(route.params.letter);
})

watch(route, () =>{
    getMealsByLetter(route.params.letter)
})

function getMealsByLetter(letter) {
    store.dispatch('getMealByLetter', letter)
}
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
</script>

<template>
    <div class="pt-8 mx-8 font-extrabold flex gap-3">
        <img class="" src="../assets/Icons/sort_by_alpha.svg" alt="" />
        Meals By Letter
    </div>
    <div class="flex p-8 pt-2 justify-center gap-5 font-bold font-mono text-2xl mt-5">
        <RouterLink :to="{ name: 'search-by-letter', params: { letter } }" v-for="letter of letters()" :key="letter">
            {{ letter }}
        </RouterLink>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 p-8 pt-0">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
</template>

<style></style>