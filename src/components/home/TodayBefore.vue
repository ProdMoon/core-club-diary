<script setup>
import { useLeftTimeStore } from '@/stores/lefttime.js';
import { time2digits } from '@/utils/time.js';

const leftTimeStore = useLeftTimeStore();
</script>
<template>
  <div class="mt-16 border border-dashed border-pink-500 rounded-2xl w-72 h-40 flex flex-col items-center cursor-pointer">
    <img class="mt-6" src="/pink-clock.png" alt="pink-clock" />
    <div class="mt-2 text-pink-400">오후 9시 수업까지</div>
    <div class="mt-1 text-2xl text-pink-400">{{ leftTimeStore.hours }} : {{ time2digits(leftTimeStore.minutes) }} : {{ time2digits(leftTimeStore.seconds) }}</div>
    <div class="mt-1 text-pink-400">남았어요!</div>
  </div>
</template>