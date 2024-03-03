<script setup>
import { RouterView } from 'vue-router';
import Header from './layouts/header.vue';

</script>

<template>
  <!-- Header Section -->
  <Header></Header>

  <!-- Main Section -->
  <main>
    <RouterView></RouterView>
  </main>

</template>

<style scoped></style>
