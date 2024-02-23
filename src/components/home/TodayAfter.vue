<script setup></script>
<template>
  <div
    class="mt-16 border border-dashed border-pink-500 rounded-2xl w-72 h-24 flex items-center justify-center shadow-lg cursor-pointer hover:bg-pink-50 active:bg-pink-100"
  >
    <router-link to="/diary/write" class="w-full h-full flex items-center justify-center">
      <div class="font-bold text-pink-500">
        오늘의 일지<br />
        작성하기 💓
      </div>
    </router-link>
  </div>
</template>
