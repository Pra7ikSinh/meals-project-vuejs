<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="bg-gray-100 ">
        <header class="bg-white-500 shadow-2xl h-16 flex justify-between items-center">
            <div class="items-center mx-2 text-white bg-orange-500 rounded p-2">
                <RouterLink :to="{ name: 'home' }">
                    <h1>
                        Meals By Vue JS
                    </h1>
                </RouterLink>
            </div>
            <div class="flex gap-2">
                <RouterLink
                    class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    :to="{ name: 'search-by-ingredients' }">Meals By Ingredients</RouterLink>
                <RouterLink
                    class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    :to="{ name: 'search-by-letter' }">Meals By Letter</RouterLink>
                <RouterLink
                    class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    :to="{ name: 'search-by-name' }">Search Meals</RouterLink>
            </div>
        </header>
    </div>
</template>

<style scoped></style>