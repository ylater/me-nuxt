<template>
  <div class="lax-page">
    <div class="selector" ref="hello">
      <h1>Hello,LIZIQI</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
import lax from "lax.js";
import gsap from "gsap";
const hello = ref<HTMLElement>();
function translate(x: number, y: number) {
  const xTranslate = (window.innerWidth / 2 - x) / 20;
  const yTranslate = (window.innerHeight / 2 - y) / 20;
  gsap.to("h1", {
    textShadow: `
			${xTranslate}px ${yTranslate}px 2px rgba(0,0,0,0.01),
			${xTranslate}px ${yTranslate}px 10px rgba(0,0,0,0.15),
			${-xTranslate}px ${-yTranslate}px 20px rgba(222,222,222, 0.5)`,
    fontVariationSettings: `'wght' ${(x / window.innerWidth) * 700}`,
    "--x-translate": window.innerWidth / 2 - x,
    "--y-translate": window.innerHeight / 2 - y,
    ease: "expo.out",
  });
}
onMounted(() => {
  // const body = document.querySelector("body");
  hello.value?.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    translate(x, y);
  });

  lax.init();
  lax.addDriver("scrollY", function () {
    return document.documentElement.scrollTop;
  });
  lax.addElements(".selector__item", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, "screenWidth/2", "screenWidth"],
      ],
    },
  });
});
</script>
<style lang="less" scoped>
.lax-page {
  height: 100vh;
  width: 100vw;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  overflow: hidden;

  h1 {
    --x-translate: 0;
    --y-translate: 0;
    font-size: calc(100vw / 24 * 3);
    color: #f0f0f0;
    transform: matrix3d(
      1,
      0,
      0,
      calc(var(--x-translate) / 1000000),
      0,
      1,
      0,
      calc(var(--y-translate) / 1000000),
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    @distance: grid(10/60);
    font-variation-settings: "wght" 700;
    text-shadow: @distance 10px 2px rgba(0, 0, 0, 0.01),
      @distance @distance 10px rgba(0, 0, 0, 0.15),
      calc(@distance * -1) calc(@distance * -1) 10px rgba(0, 0, 0, 0.5);
  }

  .selector {
    position: relative;
    width: 80vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #333;
    border-radius: 30vw;
    .selector__item {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:nth-child(1) {
        background: #ff0000;
      }
      &:nth-child(2) {
        background: #00ff00;
      }
    }
  }
}
</style>
