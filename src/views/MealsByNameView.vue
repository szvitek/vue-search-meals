<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import MealItem from '@/components/MealItem.vue';

const mealStore = useMealStore()
const { searchMeals } = mealStore
const { searchedMeals } = storeToRefs(mealStore)
const mealInput = ref('')
const isLoading = ref(false)

const route = useRoute()
const router = useRouter()

const search = async () => {
  isLoading.value = true
  await searchMeals(mealInput.value)
  router.replace({ params: { name: mealInput.value } })
  isLoading.value = false
}

onMounted(() => {
  mealInput.value = route.params.name as string
  if (mealInput.value) {
    search()
  }
})
</script>

<template>
  <div class="p-8 pb-0">
    <input
      v-model="mealInput"
      type="text"
      placeholder="Search for meals"
      class="rounded border-2 border-gray-200 w-full"
      @keydown.enter="search"
    />
  </div>
  <div v-if="isLoading" class="animate-pulse h-full flex items-center justify-center">
    <h1>Loading...</h1>
  </div>
  <template v-else>
    <div
      v-if="searchedMeals?.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-8"
    >
      <MealItem v-for="meal of searchedMeals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else class="flex items-center justify-center flex-grow flex-1">
      <h1>No results...</h1>
    </div>
  </template>
</template>

<style scoped></style>
