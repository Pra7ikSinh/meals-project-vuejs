<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="bg-white">
        <div class=" rounded-3xl m-5 bg-gray-200">
            <header class="bg-white-500 shadow-sm h-16 flex justify-between items-center">
                <div class="items-center text-white bg-orange-500 rounded-3xl p-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium text-lg">
                    <RouterLink :to="{ name: 'home' }" class="flex gap-3 m-1">
                        <img class="" src="../assets/Icons/fastfood.svg" alt="" />
                        <h1>
                            Meals By Vue JS
                        </h1>
                    </RouterLink>
                </div>
                <div class="flex gap-2 mr-4">
                    <RouterLink class="flex gap-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" :to="{ name: 'search-by-ingredients' }">
                        <img class="" src="../assets/Icons/grocery.svg" alt="" />
                        Meals By Ingredients
                    </RouterLink>
                    <RouterLink class="flex gap-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" :to="{ name: 'search-by-letter' }">
                        <img class="" src="../assets/Icons/sort_by_alpha.svg" alt="" />
                        Meals By Letter
                    </RouterLink>
                    <RouterLink class="flex gap-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" :to="{ name: 'search-by-name' }">
                        <img class="" src="../assets/Icons/search.svg" alt=""/>
                        Search Meals
                    </RouterLink>
                </div>
            </header>
        </div>
    </div>
</template>

<style scoped></style>