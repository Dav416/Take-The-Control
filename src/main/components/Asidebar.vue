/**
* Component for the aside bar
*/
<template>
  <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="default-sidebar" class="fixed z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-[var(--color-tc-blue-green)]">

      <Logo class=" mb-5" />

      <div class="space-y-2 font-medium text-lg w-full">

        <AsideButton class="dark:bg-[var(--color-tc-white)] dark:text-[var(--color-tc-blue-green)] font-bold" label="Ingresos" link="#" />

        <AsideButton label="Gastos" link="#" />

        <AsideButton label="Ahorros" link="#" />

        <AsideButton label="Presupuestos" link="#" />

        <AsideButton label="Proyecciones" link="#" />

        <AsideButton label="Configuración" link="#" />
      </div>

    </div>
  </aside>
</template>
<script setup>
import Logo from './Logo.vue';
import AsideButton from './AsideButton.vue';

</script>