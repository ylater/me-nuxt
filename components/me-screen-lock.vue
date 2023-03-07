<template>
  <div class="me-screen-lock">

    <!-- lock -->
    <div class="screen-lock" v-if="visiblePin">
      <me-pin @complete="handlePin"></me-pin>
      <p class="pin-tip">
        请输入pin:1234
        <me-button class="btn" @click="handleVisblePin(false)">取消</me-button>
      </p>
    </div>

    <!-- 锁屏状态 -->
    <div class="screen-info" v-else>
      <div class="now-time">
        {{ currentTime }}
      </div>
      <div class="lock-action">
        <me-button class="btn" @click="handleEnter">进入系统</me-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup >
import { useNow, useDateFormat } from '@vueuse/core'
import { useAppStore } from '@/stores/index'
const appStore = useAppStore()
const visiblePin = computed(() => appStore.visiblePin)
const handlePin = () => {
  handleVisblePin(false)
  appStore.setUnlocked(true)
}
//visiblePin
const handleVisblePin = (bool: boolean) => {
  appStore.setVisiblePin(bool)
}
//datetime
const currentTime = useDateFormat(useNow(), 'HH:mm:ss')
const currentDate = useDateFormat(useNow(), 'YYYY-MM-DD')
const handleEnter = () => {
  handleVisblePin(true)
}
</script>
<style lang="less" scoped>
.me-screen-lock {
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