import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Meal } from '@/types'
import axiosClient from '@/axiosClient'

export const useMealStore = defineStore('meal', () => {
  const meal = ref<Meal | null>(null)
  const meals = ref<Meal[]>([])
  const searchedMeals = ref<Meal[]>([])
  const mealsByLetter = ref<Meal[] | null>([])
  const mealsByIngredients = ref<Meal[]>([])

  async function searchMeals(keyword: string) {
    const {
      data: { meals }
    } = await axiosClient.get(`search.php?s=${keyword}`)
    searchedMeals.value = meals
  }

  async function searchMealsByLetter(letter: string) {
    const {
      data: { meals }
    } = await axiosClient.get(`search.php?f=${letter}`)
    mealsByLetter.value = meals
  }

  async function searchMealsByIngredient(ingredient: string) {
    const {
      data: { meals }
    } = await axiosClient.get(`filter.php?i=${ingredient}`)
    mealsByIngredients.value = meals
  }

  async function getMealById(id: string) {
    const {
      data: { meals }
    } = await axiosClient.get(`lookup.php?i=${id}`)
    meal.value = meals?.[0] || null
  }

  return {
    meal,
    meals,
    searchedMeals,
    mealsByLetter,
    mealsByIngredients,
    searchMeals,
    searchMealsByLetter,
    searchMealsByIngredient,
    getMealById
  }
})
