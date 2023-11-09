import HomeView from '@/views/HomeView.vue'
import MealsByLetterView from '@/views/MealsByLetterView.vue'
import MealsByNameView from '@/views/MealsByNameView.vue'
import MealsByIngredientView from '@/views/MealsByIngredientView.vue'
import MealDetailsView from '@/views/MealDetailsView.vue'
import IngredientsView from '@/views/IngredientsView.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/by-name/:name?',
    name: 'byName',
    component: MealsByNameView
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: IngredientsView
  },
  {
    path: '/by-ingredient/:ingredient',
    name: 'byIngredient',
    component: MealsByIngredientView
  },
  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: MealsByLetterView
  },
  {
    path: '/meal/:id',
    name: 'mealDetails',
    component: MealDetailsView
  },
  {
    path: '/*',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
