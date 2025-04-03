<template>
    <div class="flex justify-center">
        <FormImage />
        <div class="h-screen w-screen">
            <form>
                <div class="flex flex-col items-center">
                    <h1 class="text-6xl text-center mt-20">Iniciar Sesión</h1>
                    <h4 class="my-10">¡Bienvenido! Por favor, ingresa con tu cuenta.</h4>
                </div>
                <div class="flex flex-col items-center mx-12">
                    <FormInput
                        placeholder="Usuario"
                        type="text"
                        v-model="user"
                        class="mb-10 text-center text-2xl"
                        autocomplete="username"
                    />
                    <FormInput
                        placeholder="Contraseña"
                        type="password"
                        v-model="password"
                        class="text-center text-2xl"
                        autocomplete="current-password"
                    />
                </div>
                <div class="flex mx-12 justify-between mt-3">
                    <FormCheckbox
                        label="Recuerdame"
                        v-model="remember"
                    />
                    <span class="text-xs mt-1">¿Olvidaste tú contraseña?</span>
                </div>
                <div class="flex flex-col items-center mt-20">
                    <FormButton label="Ingresar"/>
                    <div class="flex mt-10 text-xl">
                        <span class="mr-2">¿Nuevo usuario?</span>
                        <span style="color: var(--color-tc-blue)">Registrate</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import FormImage from '../components/FormImage.vue'
import FormInput from '../components/FormInput.vue'
import FormCheckbox from '../components/FormCheckbox.vue'
import FormButton from '../components/FormButton.vue'

const user = ref('')
const password = ref('')
const remember = ref(false)

</script>
<style scoped>
    
</style>