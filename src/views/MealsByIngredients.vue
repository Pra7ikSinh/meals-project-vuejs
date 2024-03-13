<script setup>
import { onMounted } from 'vue';
import axiosClient from '../config/axiosClient';


onMounted(()=>{
    axiosClient.get(`list.php?i=list`)
    .then((response)=>{
        console.log(response);
    })
})

</script>

<template>
    <div>
        {{ }}
        Search By Ingredients
    </div>
</template>

<style></style>