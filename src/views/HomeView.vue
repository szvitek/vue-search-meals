<script setup lang="ts">
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const mealStore = useMealStore()
const { meals } = storeToRefs(mealStore)
console.log('meals', meals)
</script>

<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      placeholder="Search for meals"
      class="rounded border-2 border-gray-200 w-full"
    />

    <div class="flex gap-2 justify-center mt-2">
      <RouterLink
        v-for="letter of letters.split('')"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </RouterLink>
    </div>
  </div>
</template>
