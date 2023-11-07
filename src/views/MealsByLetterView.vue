<script setup lang="ts">
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
</script>

<template>
  <div class="flex gap-2 justify-center mt-2">
    <RouterLink
      v-for="letter of letters.split('')"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
    >
      {{ letter }}
    </RouterLink>
  </div>
</template>

<style scoped></style>
