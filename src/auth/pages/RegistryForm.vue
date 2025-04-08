<template>
    <div class="flex">
        <FormImage />
        <div class="h-screen w-screen">
            <form class="flex flex-col items-center justify-center h-full w-full">
                <div class="flex flex-col items-center">
                    <h1 class="text-center text-[2.5rem] blue-green-text-color">Registrarse</h1>
                </div>
                <div class="flex flex-col w-[40rem]">
                    <div>
                        <FormInput
                            placeholder="Nombre de usuario"
                            type="text"
                            v-model="user"
                            class="mb-5"
                        />
                        <FormInput
                            placeholder="Nombre completo"
                            type="text"
                            v-model="fullName"
                            class="mb-5 "
                        />
                    </div>

                    <div>
                        <FormInput
                            placeholder="Correo electrónico"
                            type="text"
                            v-model="email"
                            class="mb-5"
                        />
                        <FormInput
                            placeholder="Confirmar correo electrónico"
                            type="text"
                            v-model="confirmEmail"
                            class="mb-5"
                        />
                    </div>

                    <div>
                        <FormInput
                            placeholder="Contraseña"
                            type="password"
                            v-model="password"
                            class="mb-5"
                        />
                        <FormInput
                            placeholder="Confirmar contraseña"
                            type="password"
                            v-model="confirmPassword"
                        />
                    </div>

                </div>
                <div class="flex mt-5">
                    <FormCheckbox
                        label="Aceptar terminos y condiciones"
                        v-model="consentTerms"
                        class="font-medium text-sm"
                    />
                </div>
                <div class="mt-10">
                    <FormButton label="Registrate"/>
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
const fullName = ref('')
const email = ref('')
const confirmEmail = ref('')
const password = ref('')
const confirmPassword = ref('')
const consentTerms = ref(false)

</script>
<style scoped>
    .disabled-text-color {
        color: var(--color-tc-disabled);
    }

    .blue-text-color {
        color: var(--color-tc-blue);
    }

    .blue-green-text-color {
        color: var(--color-tc-blue-green);
    }
    .blue-green-background-color {
        background-color: var(--color-tc-blue-green);
    }

</style>