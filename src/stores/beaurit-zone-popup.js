import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useBeauritZonePopupStore = defineStore('beauritZonePopup', () => {
  const isPopup = ref(false);

  const setIsPopup = (newIsPopup) => {
    const timeout = setTimeout(() => {
      isPopup.value = newIsPopup;
      clearTimeout(timeout);
      const timeout2 = setTimeout(() => {
        isPopup.value = false;
        clearTimeout(timeout2);
      }, 10000);
    }, 1000);
  };

  return { isPopup, setIsPopup };
});