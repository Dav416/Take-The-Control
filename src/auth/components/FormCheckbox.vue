<template>
    <div>
        <label>{{ label }}
            <input 
                type="checkbox"
                :checked="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked )"
            > 
        </label>
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