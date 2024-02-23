<script setup>
import { ref } from 'vue';
import TodayBefore from '@/components/home/TodayBefore.vue';
import TodayAfter from '@/components/home/TodayAfter.vue';
import WrittenPage from '@/components/home/WrittenPage.vue';
import { useLeftTimeStore } from '@/stores/lefttime.js';
import { useStampStore } from '@/stores/stamp.js';
import { useBeauritZonePopupStore } from '@/stores/beaurit-zone-popup.js';

const icons = {
  'complete': '/sparkling-heart.png',
  'missed': '/gray-heart.png',
};

const stampStore = useStampStore();

const selectedId = ref(4);
const todayId = ref(4);

const leftTimeStore = useLeftTimeStore();
leftTimeStore.setLeftTime({ hours: 3, minutes: 30, seconds: 0 });

const beauritZonePopupStore = useBeauritZonePopupStore();
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
  
  <Transition name="fade">
    <div id="beaurit-zone-popup" v-show="beauritZonePopupStore.isPopup" class="absolute z-50 left-[163px] bottom-[88px] w-40 h-16 border rounded-2xl border-pink-200 shadow-md bg-pink-50 flex flex-col items-center justify-center">
      <span class="font-bold text-pink-400 text-center">
        "뷰릿존 구경오세요!"
      </span>
      <span class="text-xs font-bold text-pink-400 text-center">
        Click Me!
      </span>
    </div>
  </Transition>
</template>

<style scoped>
#beaurit-zone-popup {
  animation: popup 1s infinite;
  transition: all 0.3s;
}

@keyframes popup {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

#beaurit-zone-popup::before {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 13px 10px 0;
  border-style: solid;
  border-color: #ffcdf1 transparent;
  display: block;
  width: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
