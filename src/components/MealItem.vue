<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-transform duration-200">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </RouterLink>
    <div class="p-3">
      <h3 class="font-bold truncate text-orange-500">{{ meal.strMeal }}</h3>
      <p class="my-4 line-clamp-5 text-justify">
        {{ meal.strInstructions }}
      </p>
      <div class="flex" v-if="meal.strYoutube">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Meal } from '@/types'
import YouTubeButton from './YouTubeButton.vue'

defineProps<{ meal: Meal }>()
</script>

<style scoped></style>
