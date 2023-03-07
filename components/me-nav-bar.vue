<template>
  <div class="me-nav-bar">
    <!-- 模拟的mac menu bar -->
    <div class="menu-bar">
      <div class="menu-bar-item" v-for="(item, index) in menuList" :key="index">
        <div class="menu-bar-item-inner">
          <div class="menu-bar-item-icon">
            <Icon size="36" :name="item.icon"></Icon>
          </div>
          <div class="menu-bar-item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup >
import { useNow, useDateFormat } from '@vueuse/core'
import { useAppStore } from '@/stores/index'
import { openApp } from '@/utils/index'
const appStore = useAppStore()
// openApp()
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
.me-nav-bar {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.menu-bar {
  margin: 0 auto;

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

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>