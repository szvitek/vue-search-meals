import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Meal } from '@/types'
import axiosClient from '@/axiosClient'

export const useMealStore = defineStore('meal', () => {
  const meal = ref<Meal | null>(null)
  const meals = ref<Meal[]>([])
  const searchedMeals = ref<Meal[]>([])

  async function searchMeals(keyword: string) {
    const {
      data: { meals }
    } = await axiosClient.get(`search.php?s=${keyword}`)
    searchedMeals.value = meals
  }

  async function getMealById(id: string) {
    const {
      data: { meals }
    } = await axiosClient.get(`lookup.php?i=${id}`)
    meal.value = meals?.[0] || null
  }

  return { meal, meals, searchedMeals, searchMeals, getMealById }
})
