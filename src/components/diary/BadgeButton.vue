<script setup>
const props = defineProps({
  selected: Boolean,
  text: String,
});
</script>
<template>
  <button :class="`${props.selected ? 'bg-pink-200 text-pink-500 font-bold' : 'bg-white'} flex items-center justify-center min-w-16 py-2 border rounded-2xl border-pink-300 shadow-md text-xs`">
    <span :class="props.text.length > 4 ? 'text-[10px]' : ''">{{ props.text }}</span>
  </button>
</template>