<template>
    <div class="flex">
        <FormImage />
        <div class="h-screen w-screen">
            <form class="flex flex-col items-center justify-center h-full w-full">
                <div class="flex flex-col items-center">
                    <h1 class="text-center text-[2.5rem] text-tc-blue-green font-bold">Iniciar Sesión</h1>
                    <h4 class="mb-10 text-tc-disabled">¡Bienvenido! Por favor, ingresa con tu cuenta.</h4>
                </div>
                <div class="flex flex-col items-center w-md">
                    <FormInput
                        placeholder="Usuario"
                        type="text"
                        v-model="user"
                        class="mb-10 text-center text-xl"
                        autocomplete="username"
                    />
                    <FormInput
                        placeholder="Contraseña"
                        type="password"
                        v-model="password"
                        class="text-center text-xl"
                        autocomplete="current-password"
                    />
                </div>
                <div class="flex justify-between mt-3 w-md">
                    <FormCheckbox
                        label="Recuerdame"
                        v-model="remember"
                        class="font-medium text-sm"
                    />
                    <span class="text-xs mt-1 text-tc-disabled font-medium">¿Olvidaste tú contraseña?</span>
                </div>
                <div class="flex flex-col items-center mt-20">
                    <FormButton label="Ingresar"/>
                    <div class="flex mt-10">
                        <span class="mr-2 text-tc-disabled font-medium">¿No tienes una cuenta?</span>
                        <router-link
                            to="/register"
                            class="text-tc-blue font-medium"
                        >
                        Registrate
                        </router-link>
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