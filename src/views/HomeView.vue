<script setup lang="ts">
import axiosClient from '@/axiosClient'
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const mealStore = useMealStore()
const { meals } = storeToRefs(mealStore)
console.log('meals', meals)

onMounted(async () => {
  const response = await axiosClient.get('list.php?i=list')
  console.log(response.data)
})
</script>

<template>
  <div class="flex flex-col p-8">Home</div>
</template>
