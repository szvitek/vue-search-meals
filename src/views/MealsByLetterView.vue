<script setup lang="ts">
import MealItem from '@/components/MealItem.vue'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const store = useMealStore()
const { mealsByLetter: meals } = storeToRefs(store)
const route = useRoute()
const { searchMealsByLetter } = store
const isLoading = ref(false)

watch(
  () => route.params.letter,
  async (newLetter) => {
    isLoading.value = true
    if (newLetter) {
      await searchMealsByLetter(newLetter as string)
    } else {
      meals.value = null
    }
    isLoading.value = false
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <div class="flex gap-2 justify-center mt-2">
    <RouterLink
      v-for="letter of letters.split('')"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
    >
      {{ letter }}
    </RouterLink>
  </div>

  <div v-if="isLoading" class="animate-pulse h-full flex items-center justify-center">
    <h1>Loading...</h1>
  </div>
  <template v-else>
    <div
      v-if="meals && meals?.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-8"
    >
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else-if="route.params.letter" class="flex items-center justify-center flex-grow flex-1">
      <h1>No results...</h1>
    </div>
  </template>
</template>

<style scoped></style>
