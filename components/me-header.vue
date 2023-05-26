<template>
  <header class="me-header" :class="{ bg: isBack }">
    <me-logo class="logo" @click="handleLogoclick"></me-logo>
    <div class="back-btn" v-if="isBack" @click="handleBack">
      <icon name="ep:back"></icon>
    </div>
    <div class="menu" :class="{ active: active }">
      <div class="menu-icon" @click="toggle">
        <span class="line left"></span>
        <span class="line"></span>
        <span class="line right"></span>
      </div>
      <div class="nav">
        <div
          class="nav-item"
          :class="{ 'is-active': activeNav?.path === item.path }"
          v-for="item in navList"
          :key="item.name"
          @click="handleClick(item)"
        >
          <span>{{ item.name }}</span>
          <!-- <nuxt-link :to="item.path">{{ item.name }}</nuxt-link> -->
        </div>
        <!-- <me-particles v-if="active"></me-particles> -->
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
const Router = useRouter();
const Route = useRoute();
const active = ref(false);
const toggle = () => {
  active.value = !active.value;
};
const navList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Cover",
    path: "/cover",
  },
  {
    name: "Photos",
    path: "/photo",
  },
  {
    name: "Badminton",
    path: "/badminton",
  },
  {
    name: "About",
    path: "/about",
  },
];
const activeNav = computed(() => {
  return navList.find((item) => item.path === Route.path);
});
//判断路由深度显示返回按钮
const isBack = ref(false);
watch(
  () => Route.path,
  (val) => {
    isBack.value = val.split("/").length > 2;
  }
);
onMounted(() => {
  isBack.value = Route.path.split("/").length > 2;
});
const handleLogoclick = () => {
  Router.push("/");
};
const handleBack = () => {
  Router.back();
};
const handleClick = (item: any) => {
  Router.push(item.path);
  active.value = false;
};
</script>
<style lang="less" scoped>
.me-header {
  position: fixed;
  padding: 10px 24px;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // background-color: rgba(0, 0, 0, 0.5);
  &.bg {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
  }
}
.logo {
  z-index: 10000;
}
.back-btn {
  color: #fff;
  margin-left: 12px;
  font-size: 20px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
.menu {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  font-family: "Montserrat", sans-serif;
  .menu-icon {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 20;
    cursor: pointer;
    .line {
      height: 2px;
      width: 30px;
      background-color: #fff;
      margin-bottom: 7px;
      cursor: pointer;
      transition: transform 0.2s ease, background-color 0.5s ease;
      &.left {
        width: 16.5px;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
      }
      &.right {
        width: 16.5px;
        margin-left: auto;
        transition: all 200ms linear;
      }
    }
    &:hover {
      .line {
        &.left,
        &.right {
          width: 30px;
        }
      }
    }
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    // background-color: #000;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
    &::before,
    &::after {
      content: "";
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: rgba(20, 21, 26, 0.6);
      border-bottom-left-radius: 200%;
      z-index: -1;
      transform: translateX(100%) translateY(-100%);
      transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
        border-radius linear 0.8s;
      transition-delay: 0.2s;
    }
    &:after {
      background: rgba(9, 9, 12, 0.5);
      transition-delay: 0s;
      backdrop-filter: blur(8px);
    }
    .nav-item {
      font-size: 8vh;
      margin-bottom: 20px;
      padding: 0 12px;
      cursor: pointer;
      transition: color 0.5s ease;
      color: #fff;
      font-size: 6vh;
      font-weight: 900;
      line-height: 1.5;
      letter-spacing: 3px;
      text-transform: uppercase;
      transform: translate(100px, 0);
      transition: all 0.3s;
      text-align: left;
      opacity: 0;
      &::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: 0 0 0 0;
        background: #ff362b;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
      }
      &:hover {
        // color: #ff362b;
        text-decoration: underline;
        &::before {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
      &.is-active {
        color: #ff362b;
        text-decoration: underline;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  &.active {
    .menu-icon {
      .line {
        transform: translate(0px, 0px) rotate(-45deg);
        &.left {
          width: 15px;
          transform: translate(2px, 5.5px) rotate(45deg);
        }
        &.right {
          width: 15px;
          transform: translate(-2px, -4.5px) rotate(45deg);
        }
      }
    }
    .nav {
      opacity: 1;
      pointer-events: all;
      &::before,
      &::after {
        border-radius: 0;
        transform: translateX(0%) translateY(0%);
      }
      &::before {
        transition-delay: 0s;
      }
      &::after {
        transition-delay: 0.1s;
      }
      .nav-item {
        opacity: 1;
        transform: translate(0px, 0px);
        transition: all 0.5s;

        &:nth-child(1) {
          transition-delay: 0.1s;
        }
        &:nth-child(2) {
          transition-delay: 0.2s;
        }
        &:nth-child(3) {
          transition-delay: 0.3s;
        }
        &:nth-child(4) {
          transition-delay: 0.4s;
        }
        &:nth-child(5) {
          transition-delay: 0.5s;
        }
      }
    }
  }
}
</style>
