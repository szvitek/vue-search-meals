<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
  >
    <slot> Youtube </slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>()
</script>

<style scoped></style>
