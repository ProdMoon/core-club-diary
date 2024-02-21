<script setup>
import { RouterView, useRoute } from 'vue-router';

function currentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}

const route = useRoute();
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="relative w-[390px] h-[844px] bg-pink-100">
      <header v-if="route.path !== '/login'" class="absolute top-0 w-full h-12 flex items-center justify-between">
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
      <footer v-if="route.path !== '/login'" class="absolute bottom-0 w-full h-20 bg-pink-50 rounded-t-2xl border-t border-pink-200">
        <nav class="w-full h-full flex items-center justify-around text-pink-300">
          <router-link to="/home">일지</router-link>
          <router-link to="/badge">배지</router-link>
          <router-link to="/beaurit-zone">뷰릿존</router-link>
          <router-link to="/settings">설정</router-link>
        </nav>
      </footer>
    </div>
  </div>
</template>
