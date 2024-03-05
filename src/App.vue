<script setup>
import { RouterView } from 'vue-router';
import Header from './layouts/header.vue';

</script>

<template>
  <!-- Header Section -->
  <Header></Header>

  <!-- Main Section -->
  <main class="bg-white">
    <div class=" rounded-3xl m-5 bg-gray-200">
      <RouterView></RouterView>
    </div>
  </main>

</template>

<style scoped></style>
