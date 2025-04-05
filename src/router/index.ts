import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Tus rutas aquí
  {
    path: '/',
    name: 'LoginForm',
    component: () => import('@/auth/pages/LoginForm.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;