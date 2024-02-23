import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 처음 접속 시 로그인 페이지로 리다이렉트
    {
      path: '/',
      redirect: '/login',
    },

    // 로그인
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },

    // 일지
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },

    // 일지 작성
    {
      path: '/diary/write',
      name: 'write',
      component: () => import('@/views/diary/WriteView.vue'),
    },

    // 뱃지
    {
      path: '/badge',
      name: 'badge',
      component: () => import('@/views/BadgeView.vue'),
    },

    // 뷰릿존
    {
      path: '/beaurit-zone',
      name: 'beaurit-zone',
      component: () => import('@/views/beaurit-zone/MainView.vue'),
    },
    {
      path: '/beaurit-zone/article/:id',
      name: 'beaurit-zone-article',
      component: () => import('@/views/beaurit-zone/ArticleView.vue'),
    },

    // 설정
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
    },
  ],
});

export default router;
