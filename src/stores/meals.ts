import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Meal } from '@/types'
import axiosClient from '@/axiosClient'

export const useMealStore = defineStore('meal', () => {
  const meals = ref<Meal[]>([])
  const searchedMeals = ref<Meal[]>([])

  async function searchMeals(keyword: string) {
    const {
      data: { meals }
    } = await axiosClient.get(`search.php?s=${keyword}`)
    searchedMeals.value = meals
  }

  return { meals, searchedMeals, searchMeals }
})
