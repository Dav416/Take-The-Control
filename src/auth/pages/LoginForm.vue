<template>
    <div class="flex justify-center">
        <FormImage />
        <div class="h-screen w-screen">
            <h1 class="text-6xl text-center">Iniciar Sesión</h1>
            <h4>¡Bienvenido! Por favor, ingresa con tu cuenta.</h4>
            <FormInput />
            <FormInput />
        </div>
    </div>
</template>
<script lang="ts" setup>
import FormImage from '../components/FormImage.vue';
import FormInput from '../components/FormInput.vue';

</script>
<style scoped>
    
</style>