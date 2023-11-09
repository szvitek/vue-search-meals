<script setup lang="ts">
import MealList from '@/components/MealList.vue'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useMealStore()
const { searchMealsByIngredient } = store
const { mealsByIngredients: meals } = storeToRefs(store)
const isLoading = ref(false)

watch(
  () => route.params.ingredient,
  async (ingredient) => {
    if (!route.params.ingredient) {
      router.push('/ingredients')
    }
    isLoading.value = true
    await searchMealsByIngredient(ingredient as string)
    isLoading.value = false
  },
  { immediate: true }
)
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <MealList :meals="meals" :isLoading="isLoading" :display-results="true" />
</template>

<style scoped></style>
