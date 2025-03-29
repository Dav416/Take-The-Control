<template>
    <div>
        <input 
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value )" 
        >
    </div>
</template>
<script setup lang="ts">
defineProps<{
    modelValue: string,
    placeholder?: string,
    type: string
}>()
</script>
<style scoped></style>