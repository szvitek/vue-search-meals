<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 border-orange-600 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
  >
    <slot> Youtube </slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>()
</script>

<style scoped></style>
