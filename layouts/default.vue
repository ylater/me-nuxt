<template>
  <div class="me-root">
    <!-- bg -->
    <me-cover class="bg-cover" :class="{ 'locked': visiblePin }" autoplay></me-cover>
    <!-- screen lock -->
    <me-screen-lock v-if="!unlocked"></me-screen-lock>
    <!-- containter -->
    <div class="me-containter" v-if="unlocked">
      <me-app-bar></me-app-bar>
      <div class="me-main">
        <slot></slot>
      </div>
      <me-nav-bar></me-nav-bar>
    </div>
  </div>
</template>
<script lang="ts" setup >
import { useNow, useDateFormat } from '@vueuse/core'
import { useAppStore } from '@/stores/index'
const appStore = useAppStore()
const poster = ref('')
//screen lock
const unlocked = computed(() => appStore.unlocked)
const visiblePin = computed(() => appStore.visiblePin)
//home
const menuList = ref([
  {
    icon: 'logos:apple',
    text: 'Apple'
  },
  {
    icon: 'logos:adobe-photoshop',
    text: 'photoshop'
  },
  {
    icon: 'logos:visual-studio-code',
    text: 'Vscode'
  },
  {
    icon: 'logos:vue',
    text: 'Vue'
  },
  {
    icon: 'logos:nuxt-icon',
    text: 'Nuxt'
  }
])

</script>
<style lang="less" scoped>
.me-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .bg-cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: scale(1);
    transition: all 0.3s ease-in-out;

    &.locked {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }

    &.blur {
      filter: blur(8px);
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
    }
  }

  .me-containter {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding: 32px 0 140px 0;

    &::-webkit-scrollbar-track {
      background-color: gray(30);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(white, 0.2);
      border-radius: 100px;
    }

    &::-webkit-scrollbar {
      height: 4px;
      width: 4px;
    }

    .me-main {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
    }
  }
}

.screen-lock {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);

  .pin-tip {
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    opacity: .5;
  }
}

.pin {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 16px;

  .pin-digit {
    position: relative;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }

    &::before {
      background-color: whitesmoke;
      border-radius: 10px;
      bottom: 0px;
      height: 3px;
      left: 15%;
      opacity: 0;
      transform: translateY(0px);
      width: 70%;
    }

    .pin-digit-inner {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }
  }
}

.screen-info {
  width: 100%;
  height: 100%;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  animation: scaleIn 0.3s ease-in-out;

  .lock-action {
    .btn {
      width: 120px;
      font-size: 16px;
      color: #fff;
    }
  }
}

.now-time {
  color: whitesmoke;
  font-weight: bold;
  width: 100%;
  font-size: 8em;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  //空心
  -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
  -webkit-text-fill-color: transparent;

}


.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.menu-bar {
  position: fixed;
  margin: 0 auto;
  bottom: 20px;
  border-radius: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1;
  animation: scaleIn 0.3s ease-in-out forwards;

  .menu-bar-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      // background: rgba(255, 255, 255, 0.4);
      color: #fff;
      transform: scale(1.2);
    }

    .menu-bar-item-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;

      .menu-bar-item-icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        font-size: 20px;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.4);
      }

      .menu-bar-item-text {
        font-size: 12px;
        // color: #fff;
        opacity: .5;
      }
    }
  }
}

.categorie-list {
  //grid
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 36px;
  padding: 0 20px;
  margin-top: 20px;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transition: all 0.3s ease;

  }
}

.day-card {
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  height: 8vw;
  max-height: 160px;
  min-height: 140px;
  min-width: 180px;
  position: relative;
  transition: transform 250ms;
  width: calc(100% / 7);
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>