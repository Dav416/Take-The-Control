<template>
    <div class="flex justify-center">
        <FormImage />
        <div class="h-screen w-screen">
            <form>
                <h1 class="text-6xl text-center">Iniciar Sesión</h1>
                <h4>¡Bienvenido! Por favor, ingresa con tu cuenta.</h4>
                <div>
                    <FormInput
                        placeholder="Usuario"
                        type="text"
                        v-model="user"
                    />
                    <FormInput
                        placeholder="Contraseña"
                        type="password"
                        v-model="password"
                    />
                </div>
                <div>
                    <FormCheckbox
                        label="Recuerdame"
                        v-model="remember"
                    />
                    <span>¿Olvidaste tu contraseña?</span>
                </div>
                <div>
                    <FormButton label="Ingresar"/>
                    <div>
                        <span>¿Nuevo usuario?</span>
                        <span>Registrate</span>
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