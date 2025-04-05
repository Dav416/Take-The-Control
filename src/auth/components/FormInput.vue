<template>
    <input 
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        class="w-full h-14 border-1 rounded-sm" 
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value )" 
        v-bind="$attrs"
    >
</template>
<script setup lang="ts">
defineProps<{
    modelValue: string,
    placeholder?: string,
    type: string
}>()
</script>
<style scoped></style>