<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router';
import store from '../store';
import YoutubeButton from '../components/YoutubeButton.vue';
import ViewOriginalSourceButton from '../components/ViewOriginalSourceButton.vue';


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
        <div class="rounded-2xl bg-white p-5 pt-10">
            <div class="flex justify-center">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl">
            </div>
            <div class="flex justify-center">
                <h1 class="items-center  text-orange-500 rounded-3xl pt-8 text-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:text-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-bold text-3xl">{{ meal.strMeal }}</h1>
            </div>
            <hr class="m-5">
            <div class="grid sm:grid-cols-1 md:sm:grid-cols-3 text-center text-2xl">
                <div>
                    <span class="text-cyan-500 font-semibold"> Category: </span>
                    {{ meal.strCategory }}
                </div>
                <div>
                    <span class="text-cyan-500 font-semibold"> Area: </span>
                    {{ meal.strArea }}
                </div>
                <div>
                    <span class="text-cyan-500 font-semibold"> Tags: </span>
                    {{ meal.strTags }}
                </div>
            </div>
            <hr class="m-5"/>
            <div class="flex justify-center">
                <h1 class="font-bold text-2xl text-cyan-500">Instruction</h1>
            </div>
            <div class="text-xl pr-20 md:indent-10 sm:indent-0 w-full pl-20 pt-2 text-pretty">
                {{ meal.strInstructions }}
            </div>
            <hr class="m-5">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:sm:grid-cols-2">
                <div class="text-center border-none sm:border-none md:border-solid border-r mb-2">
                    <h1 class="font-bold text-2xl text-cyan-500">Ingredients</h1>
                    <ul>
                        <template v-for="(element, index) of new Array(20)" >
                            <li v-if="meal[`strIngredient${index+1}`] !== ''" class="text-lg">
                                {{ index+1}}: {{ meal[`strIngredient${index+1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
                <hr class="visible md:hidden mt-2 mb-2">
                <div class="text-center border-none sm:border-none md:border-solid border-l mt-2">
                    <h1 class="font-bold text-2xl text-cyan-500">Measures</h1>
                    <ul>
                        <template v-for="(element, index) of new Array(20)" >
                            {{ meal[`strMeasure${index+1}`] !== '' }}
                            <li v-if="meal[`strMeasure${index+1}`] !== ''" class="text-lg">
                                {{ index+1}}: {{ meal[`strMeasure${index+1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
            <hr class="m-5">
            <div class="pb-2 m-2 flex gap-5 sm:flex-row md:flex-row flex-col">
                <YoutubeButton :youtubeLink="meal.strYoutube" ></YoutubeButton>
                <ViewOriginalSourceButton :sourceLink="meal.strSource"></ViewOriginalSourceButton>
            </div>
        </div>
    </div>
</template>

<style scoped></style>../components/YoutubeButton.vue