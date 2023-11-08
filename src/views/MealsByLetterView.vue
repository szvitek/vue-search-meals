<script setup lang="ts">
import MealList from '@/components/MealList.vue'
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
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap gap-3 justify-center px-8 mb-6">
    <RouterLink
      v-for="letter of letters.split('')"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      class="hover:text-orange-500 transition-colors duration-200"
      :class="{ 'text-orange-500': letter === route.params.letter }"
    >
      {{ letter }}
    </RouterLink>
  </div>

  <MealList :meals="meals" :is-loading="isLoading" :display-results="!!route.params.letter" />
</template>

<style scoped></style>
