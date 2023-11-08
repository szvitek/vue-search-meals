<template>
  <div v-if="displayResults">
    <div v-if="isLoading" class="animate-pulse h-full flex items-center justify-center">
      <h1>Loading...</h1>
    </div>
    <template v-else>
      <div v-if="!meals?.length" class="flex items-center justify-center flex-grow flex-1">
        <h1>No results...</h1>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Meal } from '@/types'
import MealItem from './MealItem.vue'

defineProps<{
  meals?: Meal[] | null
  isLoading: boolean
  displayResults: boolean
}>()
</script>

<style scoped></style>
