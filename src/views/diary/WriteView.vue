<script setup>
import { ref } from 'vue';
import { useStampStore } from '@/stores/stamp.js';
import { useBeauritZonePopupStore } from '@/stores/beaurit-zone-popup.js';
import BadgeButton from '@/components/diary/BadgeButton.vue';

const stampStore = useStampStore();
const beauritZonePopupStore = useBeauritZonePopupStore();

const moodList = ref([]);
const moodText = ['만족감', '자신감', '성취감', '스트레스 해소', '개운함', '불안감', '지루함', '무기력함', '피곤함', '모르겠음'];
for (let i = 0; i < moodText.length; i++) {
  moodList.value.push({
    id: i,
    selected: ref(false),
    text: moodText[i],
  });
}

const stimulusList = ref([]);
const stimulusText = ['승모근', '어깨', '팔', '목', '복부'];
for (let i = 0; i < stimulusText.length; i++) {
  stimulusList.value.push({
    id: i,
    selected: ref(false),
    text: stimulusText[i],
  });
}

const note = ref('');

const submit = () => {
  const mood = moodList.value.filter((item) => item.selected).map((item) => item.text);
  const stimulus = stimulusList.value.filter((item) => item.selected).map((item) => item.text);

  const data = {
    id: 4,
    state: 'complete',
    mood: mood,
    stimulus: stimulus,
    note: note.value,
  };
  stampStore.setStamp(data);
  beauritZonePopupStore.setIsPopup(true);
};
</script>
<template>
  <div class="absolute top-0 left-0 w-full h-24 z-20 bg-pink-50">
    <div class="relative">
      <div class="absolute top-10 w-full text-center text-pink-500 font-bold text-xl">오늘</div>
      <div class="absolute top-14 left-5">
        <router-link to="/home">
          <img src="/arrow-left.png" alt="arrow-left" />
        </router-link>
      </div>
    </div>
  </div>
  <div class="absolute z-10 bg-pink-50 w-full h-full">
    <div class="flex flex-col items-center px-7 h-full overflow-y-auto">
      <div class="mt-28 px-7 py-4 flex flex-col items-center border rounded-2xl border-pink-300 bg-pink-50 w-full shadow-md">
        <div class="w-full text-orange-800 text-sm font-semibold">
          오늘의 코클
        </div>
        <div class="mt-3 flex space-x-5">
          <img src="/maramat3.png" alt="maramat3" />
          <div class="text-center">
            <div class="flex items-center px-5 py-1.5 bg-white border rounded-lg border-dashed">
              <img src="/pink-clock.png" alt="pink-clock" class="w-4 h-4" />
              <div class="ml-2 text-xs">21 : 00 - 21 : 45</div>
            </div>
            <div class="text-orange-800 text-sm mt-3">
              1. 코어 100 ver 3<br>
              2. 팔뚝살 돌려깎기
            </div>
          </div>
        </div>
      </div>
  
      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>
  
      <div class="flex flex-col items-center">
        <div class="text-orange-800 text-sm font-semibold relative">
          오늘의 코클 기분
          <div class="absolute -top-1.5 -right-3 font-bold text-pink-500">*</div>
        </div>
        <div class="grid grid-cols-5 gap-2 mt-3">
          <badge-button v-for="item in moodList" :key="item.id" @click="item.selected = !item.selected" :selected="item.selected" :text="item.text" >
            {{ item.text }}
          </badge-button>
        </div>
        <div class="mt-5 flex space-x-1 items-center">
          <div class="rounded-full border border-pink-300 bg-pink-400 w-2 h-2"></div>
          <div class="rounded-full border border-pink-300 bg-white w-2 h-2"></div>
        </div>
      </div>
  
      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>
  
      <div class="flex flex-col items-center">
        <div class="text-orange-800 text-sm font-semibold relative">
          자극부위 (상/하체)
          <div class="absolute -top-1.5 -right-3 font-bold text-pink-500">*</div>
        </div>
        <div class="grid grid-cols-5 gap-2 mt-3">
          <badge-button v-for="item in stimulusList" :key="item.id" @click="item.selected = !item.selected" :selected="item.selected" :text="item.text" />
        </div>
        <div class="mt-5 flex space-x-1 items-center">
          <div class="rounded-full border border-pink-300 bg-pink-400 w-2 h-2"></div>
          <div class="rounded-full border border-pink-300 bg-white w-2 h-2"></div>
        </div>
      </div>
  
      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>
  
      <div class="flex flex-col items-center w-full">
        <div class="text-orange-800 text-sm font-semibold">
          사진
        </div>
        <div class="mt-3 border border-pink-200 rounded-lg w-full h-24 bg-white flex items-center justify-center space-x-3">
          <button class="w-16 h-16 flex flex-col items-center justify-center border border-dashed hover:bg-pink-50 active:bg-pink-100">
            <img src="/camera-plus.png" alt="camera-plus" class="w-8 h-8" />
            <div class="text-xs text-pink-300">0/5</div>
          </button>
          <div class="w-16 h-16 flex flex-col items-center justify-center border border-dashed">
            <img src="/body-photo-1.png" alt="body-photo-1" class="w-full h-full" />
          </div>
          <div class="w-16 h-16 flex flex-col items-center justify-center border border-dashed">
            <img src="/body-photo-2.png" alt="body-photo-2" class="w-full h-full" />
          </div>
        </div>
      </div>
  
      <div class="my-5 border-t-2 border-pink-300 border-dashed w-full"></div>
  
      <div class="flex flex-col items-center w-full">
        <div class="text-orange-800 text-sm font-semibold">
          오늘의 소감
        </div>
        <textarea v-model="note" class="mt-3 w-full h-40 border border-pink-200 rounded-lg bg-white p-3" placeholder="오늘의 소감을 기록해주세요"></textarea>
      </div>

      <div class="mt-10 p-3 flex flex-col items-center w-full border border-pink-300 rounded-2xl bg-pink-100">
        <div class="w-full relative">
          <div class="my-5 border-t-2 border-pink-400 border-dashed w-full"></div>
          <div class="absolute top-0 w-full flex items-center justify-center">
            <div class="bg-pink-100 text-center leading-5 px-3 text-sm text-pink-400 font-bold">
              today's<br>
              뷰링 대 뷰링
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-28 flex flex-col items-center">
            <img src="/squat-1.png" alt="squat-1" />
            <div class="w-full py-1 border border-pink-300 border-dashed rounded-md text-center text-pink-400 text-xs mt-2">
              스쿼트 A동작이<br>
              힘들었다 🤪
            </div>
          </div>
          <div class="w-10 h-10 flex items-center justify-center">
            <span class="text-pink-400">VS</span>
          </div>
          <div class="w-28 flex flex-col items-center">
            <img src="/squat-1.png" alt="squat-1" />
            <div class="w-full py-1 border border-pink-300 border-dashed rounded-md text-center text-pink-400 text-xs mt-2">
              스쿼트 B동작이<br>
              힘들었다 🥹
            </div>
          </div>
        </div>
        <div class="my-5 border-t-2 border-pink-400 border-dashed w-full"></div>
      </div>
  
      <div class="w-full my-14"></div>
    </div>
  </div>
  <router-link to="/home">
    <footer class="absolute z-40 bottom-0 w-full h-20 rounded-t-2xl border-t border-pink-300 flex items-center justify-center overflow-hidden">
      <button @click="submit" class="w-full h-full text-pink-400 font-bold bg-pink-200 hover:bg-pink-100 active:bg-pink-200">작성 완료</button>
    </footer>
  </router-link>
</template>
