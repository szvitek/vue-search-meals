<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
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
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <SearchInput
    :placeholder="'Search for Ingredients'"
    :keyword="keyword"
    @update:model-value="(updatedInput) => (keyword = updatedInput)"
    :with-button="false"
  />
  <div class="px-8">
    <div class="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <RouterLink
        v-for="ingredient of filteredIngredients"
        :key="ingredient.idIngredient"
        :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
        class="block bg-white rounded p-3 mg-3 shadow hover:text-orange-500"
      >
        <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
