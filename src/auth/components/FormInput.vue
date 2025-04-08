<template>
    <input 
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        class="w-full h-14 border-1 border-[#B6B6B6] rounded-sm p-2 focus:outline-[#B6B6B6]"
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