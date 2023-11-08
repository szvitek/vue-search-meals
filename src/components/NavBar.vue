<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <RouterLink
      :to="{ name: 'home' }"
      class="h-full flex items-center px-5 font-bold text-orange-500"
    >
      Home
    </RouterLink>
    <div class="h-full flex items-center gap-1">
      <RouterLink
        :to="{ name: 'byName' }"
        class="h-full px-2 flex items-center transition-colors duration-200 hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </RouterLink>
      <RouterLink
        :to="{ name: 'byLetter' }"
        class="h-full px-2 flex items-center transition-colors duration-200 hover:bg-orange-500 hover:text-white"
      >
        Meals By Letter
      </RouterLink>
      <RouterLink
        :to="{ name: 'ingredients' }"
        class="h-full px-2 flex items-center transition-colors duration-200 hover:bg-orange-500 hover:text-white"
      >
        Meals By Ingredients
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
