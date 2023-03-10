<template>
  <div ref="MeCover" class="me-cover">
    <div class="player" v-if="videoUrl">
      <video ref="videoRef" :src="videoUrl" muted loop autoplay>
        您的浏览器不支持 video 标签。
      </video>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/stores/index'
const appStore = useAppStore()
const videoUrl = computed(() => appStore.video)
console.log('text', videoUrl.value)
if (!videoUrl.value) {
  appStore.setBgVideo('https://cdn.coverr.co/videos/coverr-cinematic-snowy-mountains-7615/1080p.mp4')
}
const loading = ref(true)
const videoRef = ref()
//检查视频是否可播放
const checkVideo = () => {
  if (!videoRef.value) return
  videoRef.value.addEventListener('canplay', () => {
    loading.value = false
  })
}
onMounted(() => {
  checkVideo()
})
watch(videoUrl, () => {
  checkVideo()
})
</script>

<style lang="less" scoped>
.me-cover {
  width: 100vw;
  height: 100vh;
  position: relative;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 0 5px rgba(0, 0, 0, 0.15);
  transform: scale3d(1, 1, 1);
  transition: all 0.2s ease-out, filter 0.75s ease-out;
  overflow: hidden;
  background: #000;

  .cover {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>