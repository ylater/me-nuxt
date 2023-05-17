<template>
  <div class='me-slider'>
    <div ref="leftRef" class="side left-side" :style="{
      width: elementX + 'px',
    }">
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
const { elementX, elementY } = useMouseInElement(leftRef);
const title = ref('comming soon')
const handleMove = () => {

}
</script>	
<style lang="less" scoped>
.me-slider {
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
}

.side .title {
  font-size: 5vw;
  margin: 0px 10%;
  width: 80%;
}



.left-side {
  background-color: var(--left-color);
  width: 60%;
  z-index: 2;
}

.left-side .title {
  color: white;
}

.left-side .fancy {
  color: var(--right-color);
}

.right-side {
  background-color: var(--right-color);
}

.right-side .title {
  color: var(--dark);
}

.right-side .fancy {
  color: white;
}
</style>	
