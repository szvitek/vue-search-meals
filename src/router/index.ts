import HomeView from '@/views/HomeView.vue'
import MealsByLetterView from '@/views/MealsByLetterView.vue'
import MealsByNameView from '@/views/MealsByNameView.vue'
import MealsByIngredientView from '@/views/MealsByIngredientView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

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
    path: '/by-ingredient/:ingredient?',
    name: 'byIngredient',
    component: MealsByIngredientView
  },
  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: MealsByLetterView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
