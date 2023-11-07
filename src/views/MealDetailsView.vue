<script setup lang="ts">
import { useRoute } from 'vue-router'

const {
  params: { id }
} = useRoute()
</script>

<template>
  <div>meail details - {{ id }}</div>
</template>

<style scoped></style>
