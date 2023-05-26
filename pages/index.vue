<template>
  <div class="home-page">
    <me-particles></me-particles>
    <div class="album">
      <section class="section">
        <me-card class="card">
          <div class="logo-card content">
            <img width="80" src="@/assets/logo.svg" />
            <h1>YLATER</h1>
          </div>
        </me-card>
        <me-card class="card">
          <div class="topics-box">
            <div class="topics">
              <div class="topic" v-for="item in topics" :key="item.id">
                <div class="topic-cover">
                  <img :src="item.cover_photo.urls.small" alt="" />
                </div>
                <div class="topic-title">{{ item.title }}</div>
              </div>
              <div class="topic" v-for="item in topics" :key="item.id">
                <div class="topic-cover">
                  <img :src="item.cover_photo.urls.small" alt="" />
                </div>
                <div class="topic-title">{{ item.title }}</div>
              </div>
            </div>
          </div>
          <div class="card-info">
            <div>
              <h2 class="card-title">图片搜索</h2>
              <p class="card-text">海量无版权可商用的高清图片</p>
            </div>
            <router-link to="/photo">
              <a-button type="outline" shape="circle">
                <icon name="ep:arrow-right" color="#fff"></icon> </a-button
            ></router-link>
          </div>
        </me-card>
        <me-card class="card">
          <div class="card-mask"></div>
          <me-cover
            class="bg-cover"
            style="width: 100%; height: 100%; border-radius: 16px"
            autoplay
          ></me-cover>
          <div class="card-info">
            <div>
              <h2 class="card-title">背景视频</h2>
              <p class="card-text">海量无版权可商用的高清视频</p>
            </div>
            <a-button type="outline" shape="circle">
              <router-link to="/cover">
                <icon name="ep:arrow-right"></icon>
              </router-link>
            </a-button>
          </div>
        </me-card>
        <me-card class="card">
          <div class="user-card">
            <div class="user-profile">
              <div class="user-avatar">
                <img src="@/assets/avatar.png" />
              </div>
              <div class="user-info">
                <div class="name">Murphy</div>
                <div class="meta">Front-end Developer from CHINA</div>
                <div class="meta">todengzw@gmail.com</div>
              </div>
              <div class="social">
                <a>
                  <icon name="bxl:github"></icon>
                </a>
                <a>
                  <icon name="bxl:twitter"></icon>
                </a>
                <a>
                  <icon name="bxl:instagram"></icon>
                </a>
                <a>
                  <icon name="bxl:telegram"></icon>
                </a>
              </div>
            </div>
          </div>
        </me-card>
        <me-card class="card">
          <div class="bwf">
            <img src="@/assets/bwf.jpg" />
          </div>
        </me-card>
        <me-card class="card">
          <me-slider></me-slider>
        </me-card>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores";
definePageMeta({
  key: "index",
  layout: "home",
});
const topics = ref<any[]>([]);
function getTopics() {
  getPhotoTopics({ per_page: 100 })
    .then((res) => {
      console.log(res);
      topics.value = res;
    })
    .catch((err) => {
      console.log(err);
    });
}
getTopics();
</script>
<style lang="less" scoped>
.home-page {
  --color-1: #186cb8;
  --color-2: #2a9a9f;
  --color-3: #f1b211;
  --color-4: #e83611;
  --color-5: #f9002f;
}

.logo-card {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
    font-weight: 900;
    width: min-content;
    // margin: 12px auto;
    text-transform: uppercase;
    background: linear-gradient(
      219deg,
      var(--color-1) 19%,
      transparent 19%,
      transparent 20%,
      var(--color-2) 20%,
      var(--color-2) 39%,
      transparent 39%,
      transparent 40%,
      var(--color-3) 40%,
      var(--color-3) 59%,
      transparent 59%,
      transparent 60%,
      var(--color-4) 60%,
      var(--color-4) 79%,
      transparent 79%,
      transparent 80%,
      var(--color-5) 80%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    & + p {
      font-weight: 500;
      color: #fff;
      text-align: center;
      background: linear-gradient(
        219deg,
        var(--color-1) 19%,
        transparent 19%,
        transparent 20%,
        var(--color-2) 20%,
        var(--color-2) 39%,
        transparent 39%,
        transparent 40%,
        var(--color-3) 40%,
        var(--color-3) 59%,
        transparent 59%,
        transparent 60%,
        var(--color-4) 60%,
        var(--color-4) 79%,
        transparent 79%,
        transparent 80%,
        var(--color-5) 80%
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
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
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border: rgba(255, 255, 255, 0.1) 2px solid;
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
      background: rgba(255, 255, 255, 0.01);
    }
  }
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
  @media screen and (max-width: $px) {
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
    position: relative;
    border-radius: 25px;
    box-shadow: -2px 4px 15px rgb(0 0 0 / 26%);
    // background-color: rgba(255, 255, 255, .1);

    // &::after {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: linear-gradient(180deg,
    //       #202023, transparent 30%, transparent 70%,
    //       #202023);
    //   z-index: 1;
    // }

    .card-mask {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        #202023,
        transparent 50%,
        transparent 100%,
        #202023
      );
      z-index: 1;
    }

    // overflow: hidden;
    .card-info {
      width: 100%;
      position: absolute;
      z-index: 10;
      bottom: 0;
      left: 0;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;

      .card-title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      .card-text {
        font-size: 13;
        font-weight: 300;
      }

      :deep(.arco-btn-outline) {
        border-color: #fff;
        color: #fff;
      }
    }

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
      font-size: clamp(0.9rem, 0.875rem + 0.125vw, 1rem);
      line-height: 1.4;
    }
  }
}

.topics-box {
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
  padding: 12px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      180deg,
      #202023,
      transparent 10%,
      transparent 80%,
      #202023
    );
  }
}

.topics {
  position: relative;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  animation: loop 100s linear infinite normal;
  opacity: 0.8;
  @keyframes loop {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateY(-50%);
    }
  }

  .topic {
    position: relative;
    grid-column-gap: 10px;
    overflow: hidden;
    background-color: #222;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -2px 4px 15px rgb(0 0 0 / 26%);
    cursor: pointer;
    overflow: hidden;
    z-index: 2;
    grid-row-end: span 3;

    &:nth-child(2n + 1) {
      grid-row-end: span 8;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      // background-color: rgba(0, 0, 0, .5);
      background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
      z-index: 1;
    }

    .topic-cover {
      overflow: hidden;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        pointer-events: none;
      }
    }

    .topic-title {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px 15px;
      color: #fff;
      z-index: 2;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}

.user-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(45deg, #102eff, #d2379b);
  border-radius: 12px;
  overflow: hidden;
}

.user-profile {
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  padding-bottom: 30px;

  .user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    box-shadow: 0px 5px 50px 0px #6c44fc,
      0px 0px 0px 7px rgba(107, 74, 255, 0.5);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    .name {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 8px;
      // color: #6944ff;
    }

    .meta {
      // color: #324e63;
      font-size: 13px;
      margin-bottom: 8px;
      opacity: 0.8;
      letter-spacing: 1px;
    }
  }
}

.social {
  display: flex;
  align-items: center;
  margin-top: 30px;

  a {
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(10px);
    margin: 0 5px;
    transition: all 0.3s ease-in-out;
    font-size: 20px;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

.bwf {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
