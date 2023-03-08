<template>
  <header class="me-app-bar fixed">
    <div class="left">
      <h3 class="logo-text">ME COVER</h3>
    </div>
    <div class="center">
      <!-- <me-search></me-search> -->
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
      <div class="datetime">
        <div class="date">{{ currentDate }}</div>
        <div class="time">{{ currentTime }}</div>
      </div>
      <div class="actions">
        <!-- <me-button class="btn" circle icon="ep:search">
        </me-button> -->
        <me-button class="btn" circle icon="icon-park:logout" @click="handleOuit">
        </me-button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useAppStore } from '@/stores/index'
import { useNow, useDateFormat } from '@vueuse/core'
const currentTime = useDateFormat(useNow(), 'HH:mm:ss')
const currentDate = useDateFormat(useNow(), 'YYYY-MM-DD')
const appStore = useAppStore()
const unlocked = computed(() => appStore.unlocked)
const handleOuit = () => {
  appStore.setUnlocked(false)
}
</script>
<style lang="less" scoped>
.me-app-bar {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;

  &.fixed {
    left: 0;
    position: fixed;
  }


  .left,
  .center,
  .right {
    display: flex;
    align-items: center;
  }

  .left {
    flex: 1;

    .logo-text {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      text-shadow: 2px 2px 2px rgb(0 0 0 / 10%);
    }
  }

  .center {
    flex: 2;
  }

  .right {
    flex: 1;
    justify-content: flex-end;
  }
}

.datetime {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 13px;
  letter-spacing: 1px;
  opacity: .5;

  .date {
    margin-right: 8px;
  }
}

.actions {
  .btn {
    width: 24px;
    height: 24px;
    padding: 0;
    margin-left: 10px;
    font-size: 13px;
  }
}
</style>