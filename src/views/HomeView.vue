<script setup>
import { ref } from 'vue';

const icons = {
  'sparkling-heart': '/sparkling-heart.png',
  'gray-heart': '/gray-heart.png',
};

const stampList = ref([
  { id: 1, icon: 'sparkling-heart' },
  { id: 2, icon: 'sparkling-heart' },
  { id: 3, icon: 'gray-heart' },
  { id: 4, icon: 'gray-heart' },
  { id: 5, icon: 'gray-heart' },
  { id: 6, icon: 'gray-heart' },
  { id: 7, icon: 'gray-heart' },
  { id: 8, icon: 'gray-heart' },
  { id: 9, icon: 'gray-heart' },
  { id: 10, icon: 'gray-heart' },
  { id: 11, icon: 'gray-heart' },
  { id: 12, icon: 'gray-heart' },
  { id: 13, icon: 'gray-heart' },
  { id: 14, icon: 'gray-heart' },
  { id: 15, icon: 'gray-heart' },
  { id: 16, icon: 'gray-heart' },
  { id: 17, icon: 'gray-heart' },
  { id: 18, icon: 'gray-heart' },
  { id: 19, icon: 'gray-heart' },
  { id: 20, icon: 'gray-heart' },
]);

const leftTime = ref('3시간 30분');
</script>

<template>
  <main>
    <div class="mt-16 px-10">
      <div class="font-bold text-2xl text-yellow-800">
        39기 수강 중
      </div>
      <div class="font-semibold text-pink-400">2024년 3월</div>
      <div class="flex items-center justify-center">
        <div class="mt-5 p-6 rounded-3xl bg-white w-[320px] h-[260px] grid grid-cols-5 gap-4">
          <div v-for="stamp in stampList" :key="stamp.id"
               class="border border-dashed border-pink-500 rounded-xl w-10 h-10 overflow-hidden">
            <div :class="`${stamp.icon === 'sparkling-heart' ? 'bg-pink-300' : ''} flex items-center justify-center w-full h-full`">
              <img :src="icons[stamp.icon]" :alt="stamp.icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 bg-white w-full h-[350px] rounded-t-3xl flex justify-center">
      <div class="mt-16 border border-dashed border-pink-500 rounded-2xl w-72 h-40 flex flex-col items-center">
        <img class="mt-6" src="/pink-clock.png" alt="pink-clock" />
        <div class="mt-2 text-pink-400">오후 9시 수업까지</div>
        <div class="mt-1 text-2xl text-pink-400">{{ leftTime }}</div>
        <div class="mt-1 text-pink-400">남았어요!</div>
      </div>
    </div>
  </main>
</template>
