<script setup lang="ts">
import YouTubeButton from '@/components/YouTubeButton.vue'
import { useMealStore } from '@/stores/meals'
import type { Meal } from '@/types'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const mealStore = useMealStore()
const { meal } = storeToRefs(mealStore)
const { getMealById } = mealStore

const router = useRouter()
const {
  params: { id }
} = useRoute()

onMounted(async () => {
  await getMealById(id as string)
  if (!meal.value) {
    router.push('/')
  }
})
</script>

<template>
  <div class="max-w-[800px] mx-auto p-8" v-if="meal">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong>Category: </strong>{{ meal.strCategory || 'Uncategorized' }}</div>
      <div><strong>Area: </strong>{{ meal.strArea || 'Unknown Area' }}</div>
      <div><strong>Tags: </strong>{{ meal.strTags || '-' }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2 text-center">Ingredients</h2>
        <ol class="list-decimal list-inside">
          <template v-for="(el, idx) of new Array(20)">
            <li
              v-if="meal[`strIngredient${idx + 1}` as keyof Meal]?.trim()"
              :key="`strIngredient${idx + 1}`"
            >
              {{ meal[`strIngredient${idx + 1}` as keyof Meal] }}
            </li>
          </template>
        </ol>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2 text-center">Measures</h2>
        <ol class="list-decimal list-inside">
          <template v-for="(el, idx) of new Array(20)">
            <li
              v-if="meal[`strMeasure${idx + 1}` as keyof Meal]?.trim()"
              :key="`strMeasure${idx + 1}`"
            >
              {{ meal[`strMeasure${idx + 1}` as keyof Meal] }}
            </li>
          </template>
        </ol>
      </div>
    </div>
    <div class="mt-4 flex flex-wrap gap-3">
      <YouTubeButton :href="meal.strYoutube!">Go To Youtube</YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-600 transition-colors duration-200"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<style scoped></style>
