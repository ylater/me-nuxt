<template>
  <article class="me-media-card">
    <me-loading v-if="loading"></me-loading>
    <div class="card-media">
      <div class="palyer" v-if="video" @mousemove="handlePlay" @mouseleave="handlePause">
        <video ref="videoRef" :src="video" muted playsinline loop>
          您的浏览器不支持 video 标签。
        </video>
      </div>
      <div class="poster" v-else>
        <img :src="poster" />
      </div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </article>
</template>
<script lang="ts" setup>
const props = defineProps({
  poster: {
    type: String,
    default: '',
  },
  video: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  downloads: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
})
const loading = ref(true)
const videoRef = ref()
//检查视频是否可播放
const checkVideo = () => {
  if (!videoRef.value) return
  videoRef.value.addEventListener('canplay', () => {
    console.log('canplay')
    loading.value = false
  })
}
onMounted(() => {
  checkVideo()
})
const play = () => {
  if (!videoRef.value) return
  videoRef.value.play()
}
const pause = () => {
  if (!videoRef.value) return
  videoRef.value.pause()
  videoRef.value.currentTime = 0
}
const handlePlay = (e: Event) => {
  play()
}
const handlePause = (e: Event) => {
  pause()
}
const handleEnded = (e: Event) => {
  pause()
}
</script>
<style lang="less" scoped>
.me-media-card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  backdrop-filter: blur(8px);



  .card-media {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .2);
      z-index: 1;
      pointer-events: none;
      transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    }

    &:hover {
      &::before {
        transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
        background-color: rgba(0, 0, 0, .4);
      }
    }

    .palyer {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }

  .card-content {
    background-color: rgba(255, 255, 255, .2);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .meta-list {
      display: flex;
      align-items: center;

      .meta {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-right: 10px;
        font-size: 14px;
        opacity: .8;

        .icon {
          margin-right: 4px;
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>