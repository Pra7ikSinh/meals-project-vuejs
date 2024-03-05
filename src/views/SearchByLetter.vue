<script setup>

/**
 *  letters - return letters array
 *  @param charA String  
 *  @param charB String  
 */
const letters = (charA = "A", charZ = "Z") => {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
};
</script>

<template>
    <div class="pt-8 mx-8 font-extrabold flex gap-3">
        <img class="" src="../assets/Icons/search.svg" alt=""/>
        Search By Name
    </div>
    <div class="flex p-8 pt-2 justify-center gap-5 font-bold font-mono text-2xl mt-5">
        <RouterLink :to="{ name: 'search-by-letter', params: { letter } }" v-for="letter of letters()" :key="letter">
            {{ letter }}
        </RouterLink>
    </div>
</template>

<style></style>