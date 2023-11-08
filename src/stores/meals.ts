import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ingredient, Meal } from '@/types'
import axiosClient from '@/axiosClient'

export const useMealStore = defineStore('meal', () => {
  const ingredients = ref<Ingredient[] | null>(null)
  const meal = ref<Meal | null>(null)
  const meals = ref<Meal[]>([])
  const searchedMeals = ref<Meal[]>([])
  const mealsByLetter = ref<Meal[] | null>([])
  const mealsByIngredients = ref<Meal[]>([])

  async function getRandomMeals() {
    const getRandomMeal = () => axiosClient.get(`random.php`)
    const promises = []

    for (let i = 0; i < 8; i++) {
      promises.push(getRandomMeal())
    }

    const results = await Promise.all<{ data: { meals: Meal[] } }>(promises)
    meals.value = results.map(({ data: { meals } }) => meals[0])
  }

  async function getIngredients() {
    const {
      data: { meals }
    } = await axiosClient.get(`list.php?i=list`)
    ingredients.value = meals || null
  }

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
    ingredients,
    meal,
    meals,
    searchedMeals,
    mealsByLetter,
    mealsByIngredients,
    getRandomMeals,
    getIngredients,
    searchMeals,
    searchMealsByLetter,
    searchMealsByIngredient,
    getMealById
  }
})
