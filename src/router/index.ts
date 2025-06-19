import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Tus rutas aquí
  {
    path: '/',
    name: 'LoginForm',
    component: () => import('@/auth/pages/LoginForm.vue'),
  },
  {
    path: '/register',
    name: 'RegistryForm',
    component: () => import('@/auth/pages/RegistryForm.vue'),
  },
  {
    path: '/main',
    name: 'MainView',
    component: () => import('@/auth/pages/MainView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;