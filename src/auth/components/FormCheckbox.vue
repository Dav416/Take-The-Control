<template>
    <div class="flex flex-row-reverse">
        <label class="ml-2">{{ label }}</label>
        <input 
            class="ml-2 w-5 h-5 scale-90 cursor-pointer"
            type="checkbox"
            :checked="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked )"
        > 
    </div>
</template>
<script setup lang="ts">
    defineProps({
        modelValue: Boolean,
        label: String
    })
</script>
<style scoped>
</style>