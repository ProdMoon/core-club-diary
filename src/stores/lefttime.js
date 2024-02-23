import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useLeftTimeStore = defineStore('leftTime', () => {
  const leftTime = ref(0);

  const hours = computed(() => Math.floor(leftTime.value / 3600));
  const minutes = computed(() => Math.floor((leftTime.value % 3600) / 60));
  const seconds = computed(() => leftTime.value % 60);

  const setLeftTime = (timeObject) => {
    leftTime.value = timeObject.hours * 3600 + timeObject.minutes * 60 + timeObject.seconds;
  };

  const getLeftTimeSeconds = () => {
    return leftTime.value;
  };

  return { hours, minutes, seconds, setLeftTime, getLeftTimeSeconds };
});
