<script setup>
import { useStampStore } from '@/stores/stamp';
import BadgeButton from '@/components/diary/BadgeButton.vue';

const props = defineProps({
  id: Number,
});

const icons = {
  complete: '/sparkling-heart.png',
  missed: '/gray-heart.png',
};

const stampStore = useStampStore();
</script>
<template>
  <div class="relative pt-[440px]">
    <div class="absolute z-20 px-7 py-4 flex flex-col items-center border rounded-2xl border-pink-300 bg-white w-full shadow-md">
      <div class="w-full flex items-center justify-between">
        <div class="text-pink-400 font-bold">3월 {{ stampStore.stamp[props.id].day }}일</div>
        <div class="rounded-full border border-pink-400 w-7 h-7 p-1.5">
          <img :src="icons[stampStore.stamp[props.id].state]" :alt="stampStore.stamp[props.id].state" />
        </div>
      </div>
      <div
        class="mt-3 w-full px-5 py-3 border border-pink-300 rounded-2xl flex flex-col items-center justify-center shadow-md"
      >
        <div class="w-full text-orange-800 text-sm font-semibold">오늘의 코클</div>
        <div class="mt-3 flex space-x-5">
          <img src="/maramat3.png" alt="maramat3" />
          <div class="text-center">
            <div class="flex items-center px-5 py-1.5 bg-white border rounded-lg border-dashed">
              <img src="/pink-clock.png" alt="pink-clock" class="w-4 h-4" />
              <div class="ml-2 text-xs">21 : 00 - 21 : 45</div>
            </div>
            <div class="text-orange-800 text-sm mt-3">
              1. 코어 100 ver 3<br />
              2. 팔뚝살 돌려깎기
            </div>
          </div>
        </div>
      </div>

      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>

      <div class="flex items-center w-full">
        <div class="text-orange-800 font-semibold text-sm mr-4 w-24">오늘의 코클 기분</div>
        <div class="grid grid-cols-3 gap-1">
          <badge-button
            v-for="item in stampStore.stamp[props.id].mood"
            class="cursor-default"
            :key="item.id"
            :selected="true"
            :text="item"
          />
        </div>
      </div>

      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>

      <div class="flex items-center w-full">
        <div class="text-orange-800 font-semibold text-sm mr-4 w-24">자극부위</div>
        <div class="grid grid-cols-3 gap-1">
          <badge-button
            v-for="item in stampStore.stamp[props.id].stimulus"
            class="cursor-default"
            :key="item.id"
            :selected="true"
            :text="item"
          />
        </div>
      </div>

      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>

      <div class="flex items-center w-full">
        <div class="text-orange-800 font-semibold text-sm mr-4 w-24">사진</div>
        <div class="w-full flex items-center justify-center space-x-3">
          <img class="w-20 h-20" src="/body-photo-1.png" alt="photo" />
          <img class="w-20 h-20" src="/body-photo-2.png" alt="photo" />
        </div>
      </div>

      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>

      <div class="flex flex-col w-full">
        <div class="text-orange-800 font-semibold text-sm">메모</div>
        <div class="w-full mt-3 px-3 py-5 border border-pink-300 border-dashed rounded-lg bg-white">
          <div class="text-sm text-pink-300" v-html="stampStore.stamp[props.id].note?.replaceAll('\n', '<br>')"></div>
        </div>
      </div>

      <div class="w-full my-14"></div>
    </div>
  </div>
</template>
