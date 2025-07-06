import { createRouter, createWebHistory } from 'vue-router';

/**
 * Routes for the app
 */
const routes = [
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
    component: () => import('@/main/pages/MainView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;