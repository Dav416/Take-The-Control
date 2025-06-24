<template>
  <a
    :href="link"
    v-bind="$attrs"
    :class="[
      'flex w-full items-center py-4 mb-5 transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-[var(--color-tc-white)] dark:hover:text-[var(--color-tc-blue-green)] dark:hover:font-bold',
      $attrs.class ?? 'text-gray-900 dark:text-white'
    ]"
  >
    <span class="flex-1 text-center ms-3 whitespace-nowrap">
      {{ label }}
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  link: string
}>()
</script>
