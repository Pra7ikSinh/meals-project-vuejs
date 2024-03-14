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
     <div class="pt-8 mx-8 font-extrabold flex gap-3">
        <img class="" src="../assets/Icons/search.svg" alt="" />
        Search By Name
    </div>
</template>

<style></style>