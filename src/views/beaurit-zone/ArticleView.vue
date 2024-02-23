<script setup>
import { useRoute } from 'vue-router';
import { useBeauritZoneArticlesStore } from '@/stores/beaurit-zone-articles.js';

const store = useBeauritZoneArticlesStore();
const route = useRoute();
const article = store.articles[route.params.id];
</script>
<template>
  <div class="absolute top-2 z-10 w-full text-center font-lobster text-xl text-white">beaurit zone</div>
  <div class="absolute top-14 left-5">
    <router-link to="/beaurit-zone">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </router-link>
  </div>
  <img :src="article.img" :alt="article.img" />
  <div class="absolute top-[330px] w-full h-[100px] flex items-center justify-center">
    <div class="mx-10 p-5 bg-orange-100/90 rounded-2xl w-full h-full shadow-md">
      <div class="text-xs">
        {{ article.date }}
      </div>
      <div class="mt-2 font-bold">
        {{ article.title }}
      </div>
      <div class="mt-1 text-xs font-bold">
        {{ article.author }}
      </div>
    </div>
  </div>
  <div class="px-5 py-12">
    <div v-html="article.content"></div>
  </div>
  <div class="absolute bottom-20 w-full">
    <img src="/beaurit-zone-search-bar.png" alt="beaurit-zone-search-bar" />
  </div>
</template>
