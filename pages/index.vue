<template>
  <div class='home-page'>
    <div class="album">
      <section class="section">
        <div class="card square">
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <img width="120" src="@/assets/logo.svg" />
            <h1>YLATER</h1>
            <p>提供优质独立开发服务:WEB、小程序、H5\APP等。</p>
          </div>
        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>

      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/stores'
definePageMeta({
  key: 'index',
  layout: 'ylater',
})

</script>	
<style lang="less" scoped>
.home-page {
  --color-1: #186cb8;
  --color-2: #2a9a9f;
  --color-3: #f1b211;
  --color-4: #e83611;
  --color-5: #f9002f;
}

h1 {
  font-size: 6vw;
  font-weight: 900;
  width: min-content;
  margin: auto;
  text-transform: uppercase;
  background: linear-gradient(219deg,
      var(--color-1) 19%,
      transparent 19%, transparent 20%,
      var(--color-2) 20%, var(--color-2) 39%,
      transparent 39%, transparent 40%,
      var(--color-3) 40%, var(--color-3) 59%,
      transparent 59%, transparent 60%,
      var(--color-4) 60%, var(--color-4) 79%,
      transparent 79%, transparent 80%,
      var(--color-5) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  &+p {
    font-weight: 500;
    color: #fff;
    text-align: center;
    background: linear-gradient(219deg,
        var(--color-1) 19%,
        transparent 19%, transparent 20%,
        var(--color-2) 20%, var(--color-2) 39%,
        transparent 39%, transparent 40%,
        var(--color-3) 40%, var(--color-3) 59%,
        transparent 59%, transparent 60%,
        var(--color-4) 60%, var(--color-4) 79%,
        transparent 79%, transparent 80%,
        var(--color-5) 80%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}


.square {
  position: relative;
  margin: 0 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: rgba(255, 255, 255, .1) 2px solid;
    transition: 0.5s;

    &:nth-child(1) {
      border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
      animation: animate 6s linear infinite;
    }

    &:nth-child(2) {
      border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
      animation: animate 4s linear infinite;
    }

    &:nth-child(3) {
      border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
      animation: animate2 10s linear infinite;
    }
  }

  &:hover {
    span {
      border: none;
      background: rgba(255, 255, 255, .01);
    }
  }

}


.content {
  position: relative;
  color: #fff;
  text-align: center;
  transition: 0.5s;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.home-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #222;
}

.mQ($px) {
  @media screen and (max-width:$px) {
    @content();
  }
}

.album {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.section {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 30% 15% 25%;
  gap: 15px;
  place-content: center;
  grid-template-rows: 50% 50%;
  height: 100vh;
  min-height: 460px;
  padding: 30px 0;

  .mQ(690px) {
    height: 65vh;
  }

  .mQ(470px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 35%);
  }

  .card {
    border-radius: 25px;
    box-shadow: -2px 4px 15px rgb(0 0 0 / 26%);
    background-color: rgba(255, 255, 255, .1);

    .mQ(470px) {
      grid-column: span 1;
    }

    &:nth-child(2) {
      grid-column: 2/3;
      grid-row: span 2;

      .mQ(690px) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }

    &:nth-child(3) {
      grid-column: span 2;

      .mQ(690px) {
        grid-column: 2/4;
        grid-row: 1/2;
      }
    }

    .mQ(690px) {
      &:nth-child(6) {
        grid-column: 2/4;
        grid-row: 2/3;
      }
    }

    .mQ(470px) {

      &:nth-child(5) {
        grid-column: span 2;
      }
    }

    p {
      font-size: clamp(0.9rem, 0.8750rem + 0.1250vw, 1rem);
      line-height: 1.4;
    }


    img {
      border-radius: 25px;
    }

    .card__img {
      position: relative;
      height: 100%;

      .card__overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        color: #fff;
        padding: clamp(0.938rem, 5vw, 1.563rem);
        background: rgb(2, 2, 46);
        background: linear-gradient(0deg, rgb(0 0 0 / 57%) 0%, rgb(255 255 255 / 0%) 100%);
        width: 100%;
        height: 100%;
        border-radius: 25px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
      }

      span {
        position: absolute;
        top: 25px;
        left: min(2vmax, 1.563rem);
        color: #ff7b29;
        background: #fff;
        border-radius: 50px;
        padding: 2px 8px 2px 6px;
        display: flex;
        box-shadow: 0px 1px 20px #0000002b;

        .mQ(690px) {
          top: 20px;
        }

        .mQ(470px) {
          top: 15px;
        }

        svg {
          fill: #ff7b29;
          width: 20px;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>	
