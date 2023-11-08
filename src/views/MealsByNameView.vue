<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import YouTubeButton from '@/components/YouTubeButton.vue';

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
      <div v-for="meal of searchedMeals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
        </RouterLink>
        <div class="p-3">
          <h3 class="font-bold truncate">{{ meal.strMeal }}</h3>
          <p class="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem porro
            obcaecati minima consequuntur, aliquam sint distinctio optio incidunt.
          </p>
          <div class="flex">
            <YouTubeButton :href="meal.strYoutube!" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center flex-grow flex-1">
      <h1>No results...</h1>
    </div>
  </template>
</template>

<style scoped></style>
