<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import MealList from '@/components/MealList.vue'

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
  <MealList :meals="searchedMeals" :is-loading="isLoading" :display-results="!!route.params.name" />
</template>

<style scoped></style>
