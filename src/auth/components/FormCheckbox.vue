<template>
    <div class="flex flex-row-reverse">
        <label class="ml-2 cursor-pointer select-none" for="remember">{{ label }}</label>
        <input 
            class="ml-2 w-5 h-5 scale-90 cursor-pointer appearance-none border border-gray-300 rounded-sm
            checked:bg-[#53BFD2] checked:border-[#53BFD2] checked:before:content-['✔']
            checked:before:text-white checked:before:text-xs checked:before:flex checked:before:items-center
            checked:before:justify-center checked:before:w-full checked:before:h-full"
            type="checkbox"
            :checked="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked )"
            id="remember"
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