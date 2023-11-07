<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
      <RouterLink :to="{ name: 'home' }" class="h-full flex items-center px-5 font-bold">
        Home
      </RouterLink>
      <div class="h-full flex items-center gap-1">
        <RouterLink
          :to="{ name: 'byName' }"
          class="h-full px-2 flex items-center transition-colors duration-200 hover:bg-purple-200"
        >
          Search Meals
        </RouterLink>
        <RouterLink
          :to="{ name: 'byLetter' }"
          class="h-full px-2 flex items-center transition-colors duration-200 hover:bg-purple-200"
        >
          Meals By Letter
        </RouterLink>
        <RouterLink
          :to="{ name: 'byIngredient' }"
          class="h-full px-2 flex items-center transition-colors duration-200 hover:bg-purple-200"
        >
          Meals By Ingredients
        </RouterLink>
      </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>