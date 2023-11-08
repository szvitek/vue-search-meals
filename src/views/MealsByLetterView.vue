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
  <div class="flex gap-2 justify-center mt-2">
    <RouterLink
      v-for="letter of letters.split('')"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
    >
      {{ letter }}
    </RouterLink>
  </div>

  <MealList :meals="meals" :is-loading="isLoading" :display-results="!!route.params.letter" />
</template>

<style scoped></style>
