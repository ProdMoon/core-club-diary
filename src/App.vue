<script setup>
import { RouterView, useRoute } from 'vue-router';
import { time2digits } from '@/utils/time.js';

function currentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${time2digits(hours)}:${time2digits(minutes)}`;
}

const route = useRoute();
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="relative w-[390px] h-[844px] bg-pink-50 overflow-y-hidden">
      <header v-if="route.path !== '/login'" class="absolute z-50 top-0 w-full h-12 flex items-center justify-between">
        <div class="w-fit ml-5">
          {{ currentTime() }}
        </div>
        <div class="mr-5">
          <RouterLink to="/login">
            <img src="/phone-status.png" alt="phone-status" />
          </RouterLink>
        </div>
      </header>
      <RouterView />
      <footer v-if="route.path !== '/login'" class="absolute bottom-0 z-30 w-full h-20 bg-pink-50 rounded-t-2xl border-t border-pink-200">
        <nav class="w-full h-full flex items-center justify-around text-pink-300">
          <router-link to="/home" class="flex flex-col items-center justify-center">
            <img :src="route.path === '/home' ? '/footer/calendar-gray.png' : '/footer/calendar-pink.png'" class="w-7 h-7" alt="calendar" />
            <span :class="`${route.path === '/home' ? 'text-gray-400' : ''} mt-1 text-xs`">일지</span>
          </router-link>
          <router-link to="/badge" class="flex flex-col items-center justify-center">
            <img :src="route.path === '/badge' ? '/footer/badge-gray.png' : '/footer/badge-pink.png'" class="w-7 h-7" alt="badge" />
            <span :class="`${route.path === '/badge' ? 'text-gray-400' : ''} mt-1 text-xs`">배지</span>
          </router-link>
          <router-link to="/beaurit-zone" class="flex flex-col items-center justify-center">
            <img :src="route.path === '/beaurit-zone' ? '/footer/beaurit-zone-gray.png' : '/footer/beaurit-zone-pink.png'" class="w-7 h-7" alt="beaurit-zone" />
            <span :class="`${route.path === '/beaurit-zone' ? 'text-gray-400' : ''} mt-1 text-xs`">뷰릿존</span>
          </router-link>
          <router-link to="/settings" class="flex flex-col items-center justify-center">
            <img :src="route.path === '/settings' ? '/footer/settings-gray.png' : '/footer/settings-pink.png'" class="w-7 h-7" alt="settings" />
            <span :class="`${route.path === '/settings' ? 'text-gray-400' : ''} mt-1 text-xs`">설정</span>
          </router-link>
        </nav>
      </footer>
    </div>
  </div>
</template>
