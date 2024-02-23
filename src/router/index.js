import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/diary/write',
      name: 'write',
      component: () => import('@/views/diary/WriteView.vue'),
    },
    {
      path: '/beaurit-zone',
      name: 'beaurit-zone',
      component: () => import('@/views/BeauritZoneView.vue'),
    },
  ],
});

export default router;
