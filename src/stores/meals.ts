import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Meal } from '@/types'

export const useMealStore = defineStore('meal', () => {
  const meals = ref<Meal[]>([])

  return { meals }
})
