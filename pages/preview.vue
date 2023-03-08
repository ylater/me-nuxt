<template>
  <div class="preview-page">
    <!-- <me-button class="back-btn" size="small" @click="handleBack" icon="ep:close"></me-button> -->
    <div class="info-btn" :class="{ 'fadeIn': visibleInfo }" v-if="visibleInfo" @click="handleMini">
      <div class="show-bar"></div>
    </div>

    <div class="video-info" :class="{ 'info-hidden': visibleInfo }">
      <div class="close-btn">
        <me-button icon="ep:minus" size="small" @click="handleMini"></me-button>
        <me-button icon="ep:close" size="small" @click="handleBack"></me-button>
      </div>

      <h3 class="title">{{ videoObj.title }}</h3>
      <div class="description">
        {{ videoObj.description }}
      </div>
      <div class="metas">
        <div class="meta">
          <IconCSS class="icon" name="ep:view"></IconCSS>
          {{ videoObj.views }}
        </div>
        <div class="meta">
          <IconCSS class="icon" name="ep:download"></IconCSS>
          {{ videoObj.downloads }}
        </div>
        <div class="meta">
          <IconCSS class="icon" name="ep:clock"></IconCSS>
          {{ videoObj.duration }}
        </div>

      </div>
      <div class="actions">
        <me-button @click="handleDownload" icon="ep:download" size="large">Download</me-button>
      </div>
      <div class="source">Video Source Api： <a href="https://coverr.co" target="_blank">https://coverr.co</a></div>
    </div>
    <div class="banner-text" v-if="!visibleInfo">
      <h1 class="title">Video Preview</h1>
      <div class="description">
        <p>Video preview is a feature that allows you to preview the video before downloading it.</p>
        <p>It is a great way to check the quality of the video before downloading it.</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  key: 'preview',
  keepalive: false,
})
const Router = useRouter()
const Route = useRoute()
const videoObj = ref<any>({})
const loading = ref(false)
const getDetail = async () => {
  const videoId = Route.query.id as string
  loading.value = true
  const data = await getVideo(videoId)
  loading.value = false
  videoObj.value = data
}
getDetail()
const handleBack = () => {
  Router.go(-1)
}
const handleDownload = () => {
  window.open(videoObj.value.urls.mp4)
}
//
const visibleInfo = ref(false)
const handleMini = () => {
  visibleInfo.value = !visibleInfo.value
}
onActivated(() => {
  getDetail()
})
</script>
<style lang="less" scoped>
.preview-page {
  position: rrelative;
}

.back-btn {
  position: absolute;
  top: 60px;
  right: 60px;
  color: #fff;
}

.video-info {
  width: 450px;
  padding: 20px;
  position: absolute;
  z-index: 100;
  bottom: 120px;
  left: 60px;
  color: #fff;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &.info-hidden {
    transition: all 0.3s ease-in-out;
    left: -100%;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    color: #fff;

    .me-button {
      margin-left: 4px;
    }
  }

  .title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .description {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .metas {
    .meta {
      display: inline-block;
      margin-right: 20px;

      .icon {
        margin-right: 10px;
      }
    }
  }

  .actions {
    margin-top: 20px;
  }

  .source {
    margin-top: 20px;
    font-size: 13px;
    text-align: left;
    opacity: .5;
  }
}

.info-btn {
  position: absolute;
  bottom: 120px;
  left: -10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &.fadeIn {
    transition: all 0.3s ease-in-out;
    left: 0;
  }

  .show-bar {
    width: 8px;
    height: 100px;
    background: #fff;
    cursor: pointer;
  }

  &:hover {
    .show-bar {
      width: 12px;
    }
  }
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;

  .title {
    font-size: 8rem;
    font-weight: 700;
    margin-bottom: 20px;
    // text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    // 空心
    -webkit-text-stroke: 1px #fff;
    -webkit-text-fill-color: transparent;

  }

  .description {
    font-size: 1.30rem;
    margin-bottom: 20px;
  }
}
</style>