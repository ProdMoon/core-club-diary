<script setup></script>
<template>
  <div class="w-full h-full flex flex-col items-center">
    <div class="mt-6 w-full text-right text-xs text-pink-300">
      <span class="mr-6">2024. 03. 09. 금요일</span>
    </div>
    <div class="mt-10 text-center text-sm text-pink-400">
      코클에 참여한 멋진 당신<br>
      오늘의 운동은 어떠셨어요?
    </div>
    <div
      class="mt-5 rounded-lg w-80 h-12 flex items-center justify-center shadow-md cursor-pointer bg-pink-400 hover:bg-pink-300 active:bg-pink-500"
    >
      <router-link to="/diary/write" class="w-full h-full flex items-center justify-center">
        <div class="font-bold text-sm text-white">
          지금 다이어리 작성하기
        </div>
      </router-link>
    </div>
  </div>
</template>
