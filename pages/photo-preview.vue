<template>
  <me-grid-group></me-grid-group>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps({
  month: {
    type: Number,
    default: new Date().getMonth() + 1,
    required: true
  },
  year: {
    type: Number,
    default: new Date().getFullYear()
  }
});

const blocks = computed(() => {
  const blockData = [];
  const daysInMonth = new Date(props.year, props.month, 0).getDate();
  let currentDay = 1;
  while (currentDay <= daysInMonth) {
    const block = [];
    for (let i = 1; i <= 5 && currentDay <= daysInMonth; i++) {
      block.push({ number: currentDay, zIndex: 1 });
      currentDay++;
    }
    blockData.push(block);
  }
  return blockData;
});
</script>
 
