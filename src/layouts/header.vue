<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="bg-gray-100">
        <header class="bg-white-500 shadow-md h-16">
            <RouterLink :to="{name: 'home'}">
                <h1>
                    Meals By Vue JS
                </h1>
            </RouterLink>
        </header>
    </div>
</template>

<style scoped>

</style>