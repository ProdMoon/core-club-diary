<script setup>
import { ref } from 'vue';
import TodayBefore from '@/components/home/TodayBefore.vue';
import TodayAfter from '@/components/home/TodayAfter.vue';
import { useLeftTimeStore } from '@/stores/lefttime.js';

const icons = {
  'complete': '/sparkling-heart.png',
  'missed': '/gray-heart.png',
};

const stampList = ref([
  { id: 1, state: 'complete', day: 4 },
  { id: 2, state: 'complete', day: 5 },
  { id: 3, state: 'missed', day: 6 },
  { id: 4, state: 'complete', day: 7 },
  { id: 5, state: 'not-yet', day: 8 },
  { id: 6, state: 'not-yet', day: 11 },
  { id: 7, state: 'not-yet', day: 12 },
  { id: 8, state: 'not-yet', day: 13 },
  { id: 9, state: 'not-yet', day: 14 },
  { id: 10, state: 'not-yet', day: 15 },
  { id: 11, state: 'not-yet', day: 18 },
  { id: 12, state: 'not-yet', day: 19 },
  { id: 13, state: 'not-yet', day: 20 },
  { id: 14, state: 'not-yet', day: 21 },
  { id: 15, state: 'not-yet', day: 22 },
  { id: 16, state: 'not-yet', day: 25 },
  { id: 17, state: 'not-yet', day: 26 },
  { id: 18, state: 'not-yet', day: 27 },
  { id: 19, state: 'not-yet', day: 28 },
  { id: 20, state: 'not-yet', day: 29 },
]);

const selectedId = ref(8);
const todayId = ref(8);

const leftTimeStore = useLeftTimeStore();
leftTimeStore.setLeftTime({ hours: 3, minutes: 30, seconds: 0 });
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
            <div :class="`${stamp.state === 'complete' ? 'bg-pink-300' : ''} flex items-center justify-center w-full h-full`">
              <img v-if="stamp.state !== 'not-yet'" :src="icons[stamp.state]" :alt="stamp.state" />
              <div v-else class="text-pink-300">{{ stamp.day }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 bg-white w-full h-[350px] rounded-t-3xl flex justify-center">
      <today-before v-if="todayId === selectedId && leftTimeStore.getLeftTimeSeconds() > 0" @click="leftTimeStore.setLeftTime({ hours: 0, minutes: 0, seconds: 0 })" />
      <today-after v-else-if="todayId === selectedId && leftTimeStore.getLeftTimeSeconds() <= 0" />
    </div>
  </main>
</template>
