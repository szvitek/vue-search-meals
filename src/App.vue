<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="bg-gray-100">
    <NavBar />
    <main class="min-h-[calc(100vh-4rem)]">
      <div class="max-w-[1200px] mx-auto">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
