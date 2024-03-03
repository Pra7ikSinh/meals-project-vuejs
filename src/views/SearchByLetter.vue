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
    <div class="flex justify-center gap-3 mt-5 font-bold">
        <RouterLink :to="{ name: 'search-by-letter', params: { letter } }" v-for="letter of letters()" :key="letter">
            {{ letter }}
        </RouterLink>
    </div>
</template>

<style></style>