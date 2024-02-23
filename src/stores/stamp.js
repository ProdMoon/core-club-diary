import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStampStore = defineStore('stamp', () => {
  const stamp = ref([
    { id: 0, state: 'complete', day: 4 },
    { id: 1, state: 'complete', day: 5 },
    { id: 2, state: 'missed', day: 6 },
    { id: 3, state: 'complete', day: 7 },
    { id: 4, state: 'not-yet', day: 8 },
    { id: 5, state: 'not-yet', day: 11 },
    { id: 6, state: 'not-yet', day: 12 },
    { id: 7, state: 'not-yet', day: 13 },
    { id: 8, state: 'not-yet', day: 14 },
    { id: 9, state: 'not-yet', day: 15 },
    { id: 10, state: 'not-yet', day: 18 },
    { id: 11, state: 'not-yet', day: 19 },
    { id: 12, state: 'not-yet', day: 20 },
    { id: 13, state: 'not-yet', day: 21 },
    { id: 14, state: 'not-yet', day: 22 },
    { id: 15, state: 'not-yet', day: 25 },
    { id: 16, state: 'not-yet', day: 26 },
    { id: 17, state: 'not-yet', day: 27 },
    { id: 18, state: 'not-yet', day: 28 },
    { id: 19, state: 'not-yet', day: 29 },
  ]);

  const setStamp = (newStamp) => {
    stamp.value[newStamp.id].state = newStamp.state;
    stamp.value[newStamp.id].mood = { ...newStamp.mood };
    stamp.value[newStamp.id].stimulus = { ...newStamp.stimulus };
    stamp.value[newStamp.id].note = newStamp.note;
    alert('일지가 저장되었어요!');
  };

  return { stamp, setStamp };
});