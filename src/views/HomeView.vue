<script setup lang="ts">
import MealList from '@/components/MealList.vue'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const mealStore = useMealStore()
const { getRandomMeals } = mealStore
const { meals } = storeToRefs(mealStore)
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await getRandomMeals()
  isLoading.value = false
})
</script>

<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <MealList :meals="meals" :is-loading="isLoading" :display-results="true" />
</template>
