<template>
  <div class="me-card border-gradient" ref="card" :style="{
    '--x': `${elementX}px`,
    '--y': `${elementY}px`,
  }">
    <div class="card-bg"></div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";
const card = ref<HTMLDivElement>();
const { elementX, elementY } = useMouseInElement(card);
const props = defineProps({
  cover: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
<style lang="less" scoped>
.me-card {
  --card-br: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: #202023;
  border-radius: var(--card-br);

  .card-content {
    width: 100%;
    height: 100%;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    border-radius: var(--card-br);
  }

  &.border-gradient::before {
    width: calc(100% + 2px);
    height: calc(100% + 2px);

    border-radius: var(--card-br);
    position: absolute;
    inset: -1px;
    content: '';
    background: radial-gradient(300px circle at var(--x) var(--y),
        #1cd1c6 0,
        #407cff 50%,
        transparent 100%);
  }

  .card-bg {
    border-radius: var(--card-br);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    inset: 0;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: 300ms;
    background-color: #202023;
  }
}
</style>