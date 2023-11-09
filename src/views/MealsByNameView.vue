<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import MealList from '@/components/MealList.vue'
import SearchInput from '@/components/SearchInput.vue'

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
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <SearchInput
    :placeholder="'Search for meals'"
    :keyword="mealInput"
    :action="search"
    @update:model-value="(updatedInput) => (mealInput = updatedInput)"
    with-button
  />
  <MealList :meals="searchedMeals" :is-loading="isLoading" :display-results="!!route.params.name" />
</template>

<style scoped></style>
