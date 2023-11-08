<template>
  <div class="bg-white shadow rounded-xl">
        <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
        </RouterLink>
        <div class="p-3">
          <h3 class="font-bold truncate">{{ meal.strMeal }}</h3>
          <p class="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem porro
            obcaecati minima consequuntur, aliquam sint distinctio optio incidunt.
          </p>
          <div class="flex">
            <YouTubeButton :href="meal.strYoutube!" />
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import type { Meal } from '@/types';
import YouTubeButton from './YouTubeButton.vue';

defineProps<{ meal: Meal }>()
</script>

<style scoped>

</style>