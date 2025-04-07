<template>
    <button
        class="w-2xs h-16 rounded-sm bg-tc-blue text-white text-2xl font-bold cursor-pointer"
    >
        {{ label }}
    </button>
</template>
<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>
<style scoped>
    .bg-tc-blue {
        background-color: var(--color-tc-blue);
    }
</style>