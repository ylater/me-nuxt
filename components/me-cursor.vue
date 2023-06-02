<template>
  <div class="curzr" ref="curzr" hidden>
    <div class="curzr-dot"></div>
  </div>
</template>

<script lang="ts" setup>
import RingDot from "@/utils/cursor";
onMounted(() => {
  (() => {
    const cursor = new RingDot();
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      document.onmousemove = function (event: MouseEvent) {
        cursor.move(event);
      };
      document.onclick = function () {
        cursor.click();
      };
    } else {
      cursor.remove();
    }
  })();
});
</script>

<style scoped>
.curzr {
  --size: 20px;
  --delay: 100ms;
  --body-color: #111920;
  --outline-color: #f2f5f8;

  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2147483647;
  width: var(--size);
  height: var(--size);
  transition: 200ms, transform var(--delay);
  background-color: #fff0;
  box-shadow: 0 0 0 1.25px var(--body-color), 0 0 0 2.25px var(--outline-color);
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
}

.curzr .dot {
  box-sizing: border-box;
  position: "fixed";
  top: 50%;
  left: 50%;
  z-index: 2147483647;
  width: 4px;
  height: 4px;
  background-color: var(--body-color);
  box-shadow: 0 0 0 1px var(--outline-color);
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
}
</style>
