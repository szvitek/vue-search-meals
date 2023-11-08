<script setup lang="ts">
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'

const store = useMealStore()
const { getIngredients } = store
const { ingredients } = storeToRefs(store)
const isLoading = ref(false)
const keyword = ref('')

onMounted(async () => {
  isLoading.value = true
  await getIngredients()
  isLoading.value = false
})

const filteredIngredients = computed(() => {
  if (!keyword.value.trim()) {
    return ingredients.value
  }

  return (ingredients.value || []).filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.trim().toLowerCase())
  )
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      v-model="keyword"
      type="text"
      placeholder="Search for Ingredients"
      class="rounded border-2 border-gray-200 w-full mb-3"
    />
    <div
      v-for="ingredient of filteredIngredients"
      :key="ingredient.idIngredient"
      class="bg-white rounded p-3 mb-3 shadow"
    >
      <RouterLink :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }">
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription || 'N/A' }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
