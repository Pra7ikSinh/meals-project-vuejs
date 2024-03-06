<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import store from '../store';


const meal = computed(() => store.state.mealByID);
const mealID = ref(null);
const route = useRoute();



onMounted(() => {
    mealID.value = route.params.id;
    if (mealID.value) getMealByID();
})

/**
 * getMealByID - get meal details by ID.
 * @param mealID Integer
 * 
 */
function getMealByID() {
    route.params.id = mealID.value;
    store.dispatch('getMealByID', mealID.value);
}

</script>

<template>
    <div class="p-10">
        <div class="rounded-2xl bg-white p-10">
            <div class="flex justify-center">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl">
            </div>
            <div class="flex justify-center">
                <h1 class="items-center  text-orange-500 rounded-3xl pt-8 text-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:text-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-bold text-3xl">{{ meal.strMeal }}</h1>
            </div>
            <hr class="m-5">
            <div class="flex justify-evenly text-2xl pr-20">
                <div><span class="text-cyan-500 font-semibold"> Category: </span>{{ meal.strCategory }}</div>
                <div><span class="text-cyan-500 font-semibold"> Area: </span>{{ meal.strArea }}</div>
                <div><span class="text-cyan-500 font-semibold"> Tags: </span>{{ meal.strTags }}</div>
            </div>
            <hr class="m-5"/>
            <div class="flex justify-center">
                <h1 class="font-bold text-2xl text-cyan-500">Instruction</h1>
            </div>
            <div class="text-xl pr-20 indent-20 w-full pl-20 pt-2 text-pretty">
                {{ meal.strInstructions }}
            </div>
            <hr class="m-5">
        </div>

    </div>
    <pre>
        {{ meal }}
    </pre>
</template>

<style scoped></style>