<script setup lang="ts">
import { useMealStore } from '@/stores/meals'
import { storeToRefs } from 'pinia'

const mealStore = useMealStore()
const { meals } = storeToRefs(mealStore)
console.log('meals', meals)
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </main>
</template>
