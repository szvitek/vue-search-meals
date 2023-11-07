<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="bg-gray-100">
    <NavBar />
    <main class="min-h-[calc(100vh-4rem)]">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
