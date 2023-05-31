<template>
  <div class="home-page">
    <!-- <me-particles></me-particles> -->
    <div class="intro">
      <me-card class="card" style="flex: 1">
        <h1 class="welcome">嘿，来了！</h1>
        <h2 class="hello">
          我，Murphy , 凡事只要有可能出错，那就一定会出错的<span
            >「莫非」
          </span>
        </h2>
        <p class="work-title">一个前端打杂工程师</p>
        <p class="desc">
          互联网行苟且偷生数十年，资质平平，碌碌无为，闲来做了个网站，没啥可炫的，但别人有的自我介绍我也不能少，所以写了这么一段废话。
        </p>
      </me-card>
      <me-card style="flex: 1; margin-top: 15px">
        <div class="user-card">
          <div class="user-profile">
            <div class="user-avatar">
              <img src="@/assets/avatar.png" />
            </div>
            <div class="user-info">
              <div class="name">Murphy Deng</div>
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
    </div>
    <div class="works">
      <div class="section">
        <me-card @click="goTo('/photo')">
          <div class="card">
            <h3>Image Search</h3>
            <img
              class="bg"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUzNTJ8MHwxfHNlYXJjaHwyfHxpbWFnZXx6aC1IYW5zfDB8fHx8MTY4NTUyMjgwM3ww&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
        </me-card>
        <me-card @click="goTo('/cover')" style="grid-column: span 2">
          <div class="card">
            <h3>Video Cover</h3>
            <me-cover class="bg" style="width: 100%; height: 100%"></me-cover>
          </div>
        </me-card>
        <me-card style="grid-column: span 1">
          <div class="card">
            <h3>BWF</h3>
            <img class="bg" src="@/assets/bwf.jpg" />
          </div>
        </me-card>
        <me-card>
          <div class="card">
            <h3>AI</h3>
            <img
              class="bg"
              src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUzNTJ8MHwxfHNlYXJjaHwxMDN8fEFJfHpoLUhhbnN8MHx8fHwxNjg1NTI1MTQzfDA&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
        </me-card>
        <me-card>
          <div class="card">
            <!-- <h3>AI</h3> -->
            <img
              class="bg"
              src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUzNTJ8MHwxfHNlYXJjaHwyfHxzb29ufHpoLUhhbnN8MHx8fHwxNjg1NTI1NDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
        </me-card>
        <me-card>
          <div class="card">
            <!-- <h3>AI</h3> -->
            <img
              class="bg"
              src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUzNTJ8MHwxfHNlYXJjaHwyfHxzb29ufHpoLUhhbnN8MHx8fHwxNjg1NTI1NDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
        </me-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores";
definePageMeta({
  key: "index",
  layout: "home",
});
const Router = useRouter();
const appStore = useAppStore();
const coverImage = computed(() => appStore.coverImage);
function getCoverImage() {
  //获取当前时间
  const timestamp = new Date().getTime();
  const params = {
    // topics: "6sMVjTLSkeQ",
    // timestamp: timestamp
  };
  getRandomPhotos(params).then((res) => {
    const url = res.urls.full;
    appStore.setCoverImage(url);
  });
}
getCoverImage();
const topics = ref<any[]>([]);
function getTopics() {
  getPhotoTopics({ per_page: 100 })
    .then((res) => {
      topics.value = res;
    })
    .catch((err) => {
      console.log(err);
    });
}
getTopics();
// 跳转
function goTo(path: string) {
  Router.push(path);
}
</script>
<style lang="less" scoped>
.home-page {
  --color-1: #186cb8;
  --color-2: #2a9a9f;
  --color-3: #f1b211;
  --color-4: #e83611;
  --color-5: #f9002f;
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  display: flex;
  .intro {
    width: 480px;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: 1.5;
    .welcome {
      width: 100%;
      font-size: 64px;
      font-weight: 900;
      margin: 12px auto;
      padding: 12px;
      text-transform: uppercase;
      opacity: 0.6;
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
    .hello {
      padding: 12px;
      font-size: 16px;
      font-weight: 900;
      text-transform: uppercase;
      span {
        color: var(--color-3);
      }
    }
    .work-title {
      padding: 0 12px;
      font-size: 13px;
      font-weight: 900;
      text-transform: uppercase;
      span {
        color: var(--color-3);
      }
    }
    .desc {
      padding: 0 12px;
      font-size: 13px;
      font-weight: 400;
      margin: 12px auto;
      text-transform: uppercase;
      span {
        color: var(--color-3);
      }
    }
  }
  .works {
    width: calc(100% - 480px);
    display: flex;
    flex-direction: column;
  }
}

.section {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  place-content: center;
  grid-template-rows: 50% 50%;
  height: 100vh;
  min-height: 460px;
  padding: 30px 0;

  .card {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      // z-index: -1;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.8);
      h3 {
        transition: all 0.3s ease-in-out;
      }
    }
    h3 {
      position: relative;
      font-size: 80px;
      font-weight: 900;
      text-transform: uppercase;
      color: #fff;
      margin: 0;
      padding: 0;
      z-index: 2;
      transition: all 0.3s ease-in-out;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
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

.cover-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
