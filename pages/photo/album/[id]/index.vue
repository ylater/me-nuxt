<template>
  <div class='album'>
    <me-observer :isLoading="isLoading" @loadMore="loadData" v-if="total > 0">
      <div class="album-containter">
        <div class="album-info">
          <h1>{{ topic.title }}</h1>
          <p>{{ topic.description }}</p>
          <a-space size="large" style="margin-top: 36px;">
            <a-statistic animation title="Total Photos :" :value="topic.total_photos" show-group-separator />
            <!-- Total Photos: {{ topic.total_photos }} -->
          </a-space>
        </div>
        <div class="photo" v-for="(item, index) in list" :key="item.id" @click="handleDetail(item, index)">
          <div class="photo-image">
            <img :src="item.urls?.regular" alt="" />
          </div>
        </div>
      </div>
    </me-observer>
    <!-- preview -->
    <a-image-preview-group v-if="visibleOverlay" v-model:visible="visibleOverlay" v-model:current="current" infinite
      :srcList="photosList">
      <template #actions>
        <div class="arco-image-preview-toolbar-action" @click="downloadImage">
          <a-tooltip content="原图下载">
            <a-spin v-if="downloading" />
            <span v-else class="arco-image-preview-toolbar-action-content">
              <Icon style="display: flex;" name="icon-park:download" size="14"></Icon>
            </span>
          </a-tooltip>
        </div>
      </template>
    </a-image-preview-group>
  </div>
</template>
<script lang="ts" setup>
import { saveAs } from 'file-saver'
const route = useRoute()
const id = route.params.id as string
const topic = ref<any>({})
function getTopicDetail() {
  getTopic({ id }).then(res => {
    topic.value = res
    total.value = res.total_photos
  })
}
getTopicDetail()
//photo
const isLoading = ref(false)
const page = ref(1)
const total = ref(0)
const list = ref<any>([])
const loadData = () => {
  if (page.value * 10 > total.value) {
    return
  }
  page.value++
  getListByPage()
}
const getListByPage = () => {
  getTopicPhotos({ id, page: page.value, per_page: 20 }).then(res => {
    list.value = list.value.concat(res)

  })
}
getListByPage()
//detail
const photo = ref<any>({})
const visibleOverlay = ref(false)
const current = ref(0)
const photosList = computed(() => {
  return list.value.map((v: any) => {
    return v.urls?.regular
  })
})
function handleDetail(item: any, index: number) {
  photo.value = { ...item }
  current.value = index
  visibleOverlay.value = true
}
function close() {
  visibleOverlay.value = false
}
//download
const downloadUrl = computed(() => {
  return list.value[current.value].urls?.full + '?force=true'
})
const downloading = ref(false)
const downloadImage = () => {
  downloading.value = true
  saveAs(downloadUrl.value, list.value[current.value].id)
  downloading.value = false
}
</script>	
<style lang="less" scoped>
.album {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 30px;

  .album-containter {
    display: grid;
    grid-gap: 36px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr))
  }

  .album-info {
    position: relative;
    width: 100%;
    grid-row: span 1;
    grid-column: span 2;
    padding: 12px;
    transform: translate3d(0, 0, 0);

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #666;
    }
  }

  .photo {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    background: #fff;
    transition: all .3s ease-in-out;
    cursor: pointer;
    transform: translate3d(0, 0, 0);

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, .2);
      transform: translate3d(0, -5px, 0);
    }

    .photo-image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>	
