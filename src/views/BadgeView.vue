<script setup>
import { ref } from 'vue';

const showInfoModal = ref(false);
</script>

<template>
  <div class="mt-14 px-5 flex justify-end">
    <button @click="showInfoModal = true" class="text-pink-400 underline text-sm">
      등급은 어떻게 나뉘나요?
    </button>
  </div>
  <div class="relative px-8">
    <div id="badge-container" class="mt-5 h-[280px]">
      <div class="text-orange-800 text-center">
        나의 등급
      </div>
      <img src="/badge/bronze.png" class="w-32 h-32 mt-3 mx-auto" alt="bronze" />
      <div class="text-center mt-5">
        <span class="text-white text-3xl font-bold">브론즈뷰링</span>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-[35px] px-8">
      <div class="p-5 bg-pink-50 border border-pink-100 rounded-xl">
        <img src="/badge/info-and-indicator.png" class="w-full" alt="info-and-indicator" />
      </div>
    </div>
  </div>
  <div class="mt-20 px-8">
    <div class="p-6 border border-pink-500 rounded-xl bg-white text-center">
      <p>지금 받을 수 있는 나의 보상</p>
      <h1 class="text-3xl text-pink-400 font-light mt-2">2024 한정판 컨텐츠</h1>
      <p class="text-xs mt-5">
        실버뷰링이 되면 <span class="text-pink-400 font-bold underline">수강 3% 할인권</span> 보상을 받을 수 있어요!
      </p>
    </div>
  </div>
  <Transition name="fade">
    <div v-show="showInfoModal" class="absolute top-0 left-0 bg-black/40 w-full h-full"></div>
  </Transition>
  <Transition name="rise">
    <div v-show="showInfoModal" class="absolute top-0 left-0 w-full h-full flex items-end">
      <img @click="showInfoModal = false" src="/badge/info-modal.png" class="w-full cursor-pointer" alt="info-modal" />
    </div>
  </Transition>
</template>

<style scoped>
#badge-container {
  background-image: url('/badge/bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
}

.rise-enter-active, .rise-leave-active {
  transition: all 0.3s;
}

.rise-enter-from, .rise-leave-to {
  transform: translateY(100%);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>