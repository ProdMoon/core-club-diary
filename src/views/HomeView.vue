<script setup>
import { ref } from 'vue';
import TodayBefore from '@/components/home/TodayBefore.vue';
import TodayAfter from '@/components/home/TodayAfter.vue';
import WrittenPage from '@/components/home/WrittenPage.vue';
import { useLeftTimeStore } from '@/stores/lefttime.js';
import { useStampStore } from '@/stores/stamp.js';

const icons = {
  'complete': '/sparkling-heart.png',
  'missed': '/gray-heart.png',
};

const stampStore = useStampStore();

const selectedId = ref(4);
const todayId = ref(4);

const leftTimeStore = useLeftTimeStore();
leftTimeStore.setLeftTime({ hours: 3, minutes: 30, seconds: 0 });
</script>

<template>
  <main>
    <div class="absolute top-0 z-10 w-full mt-16 px-10">
      <div class="font-bold text-2xl text-yellow-800">
        39기 수강 중
      </div>
      <div class="font-semibold text-pink-400">2024년 3월</div>
      <div class="flex items-center justify-center">
        <div class="mt-5 p-6 rounded-3xl bg-white w-[320px] h-[260px] grid grid-cols-5 gap-4">
          <div v-for="stamp in stampStore.stamp" :key="stamp.id"
               @click="selectedId = stamp.id"
               class="border border-dashed border-pink-500 rounded-xl w-10 h-10 overflow-hidden cursor-pointer">
            <div :class="`${stamp.state === 'complete' ? 'bg-pink-300' : ''} flex items-center justify-center w-full h-full`">
              <img v-if="stamp.state !== 'not-yet'" :src="icons[stamp.state]" :alt="stamp.state" />
              <div v-else class="text-pink-300">{{ stamp.day }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="stampStore.stamp[selectedId].state === 'not-yet'" class="absolute mt-[440px] bg-white w-full h-[350px] rounded-t-3xl flex justify-center">
      <today-before v-if="todayId === selectedId && leftTimeStore.getLeftTimeSeconds() > 0" @click="leftTimeStore.setLeftTime({ hours: 0, minutes: 0, seconds: 0 })" />
      <today-after v-else-if="todayId === selectedId && leftTimeStore.getLeftTimeSeconds() <= 0" />
    </div>
    <div v-else class="absolute overflow-y-auto top-0 w-full h-full">
      <written-page :id="selectedId" />
    </div>
  </main>
</template>
