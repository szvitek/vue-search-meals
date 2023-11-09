<template>
  <div class="px-8 pb-5">
    <form @submit.prevent="action" class="flex w-full">
      <input
        type="text"
        :value="keyword"
        :placeholder="placeholder"
        class="rounded border-2 border-gray-200 focus:ring-orange-500 focus:border-orange-500 flex-1"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <button
        v-if="withButton"
        class="px-3 py-2 rounded border-orange-600 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  keyword: string
  placeholder: string
  action?: () => void
  withButton: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped></style>
