<template>
    <div>
        <button>{{ label }}</button>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>
<style scoped>
    
</style>