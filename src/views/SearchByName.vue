<script setup>
import { computed, ref } from 'vue';
import axiosClient from '../config/axiosClient';
import store from '../store';

const searchedKeyword = ref('');
const meals = computed(() => store.state.searchedMeals);

/**
 * searchByName - search inputted value in the meals db.
 */
function searchByName() {
    // Dispatch `searchMeals` action using store - vuex.
    store.dispatch('searchMeals', searchedKeyword.value)
}
</script>

<template>
    <div class="flex p-8 justify-center">
        <input type="text" class="rounded border-2 border-gray-200 w-full" v-model="searchedKeyword"
            placeholder="Search for Meals" @change="searchByName" />
    </div>
    <pre>
        {{ meals }}
    </pre>
</template>

<style></style>