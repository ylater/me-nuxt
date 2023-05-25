<template>
  <div class="me-slider" ref="meSlider">
    <div
      ref="leftRef"
      class="side left-side"
      :style="{
        width: elementX + 'px',
      }"
    >
      <h2 class="title">
        {{ title }}
      </h2>
    </div>
    <div ref="rightRef" class="side">
      <h2 class="title">
        {{ title }}
      </h2>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMouseInElement } from "@vueuse/core";
const leftRef = ref<HTMLDivElement>();
const meSlider = ref<HTMLDivElement>();
const { elementX, elementY, isOutside } = useMouseInElement(meSlider);
const title = ref("comming soon");
watch(isOutside, (v) => {});
</script>
<style lang="less" scoped>
.me-slider {
  position: relative;
  --dark: rgb(20, 20, 20);
  --yellow: rgb(253, 216, 53);
  --blue: rgb(98, 0, 234);
  --c1: rgb(38, 70, 83);
  --c2: rgb(42, 157, 143);
  --left-color: var(--c1);
  --right-color: var(--c2);

  width: 100%;
  height: 100%;
  overflow: hidden;
}

.side {
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  place-items: center;
  position: absolute;
  padding: 2vw;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
  background-position: 50% 50%;
  background-size: 1.1rem 1.1rem;

  .title {
    font-size: 5vw;
    width: 100%;
    margin: 0 auto;
  }

  &.left-side {
    background-color: var(--left-color);
    z-index: 2;

    .title {
      color: white;
    }
  }
}
</style>
