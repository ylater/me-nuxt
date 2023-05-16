<template>
  <div class='photo-page'>
    <!-- <div class="lucky-btn" @click="getCoverImage">
      <IconCSS class="icon" name="icon-park:refresh"></IconCSS>
    </div> -->
    <div class="bg">
      <div class="bg-image" :style="getBackgroundStyles"></div>
      <div class="bg-filter" :class="{ 'focus': searching }"></div>
    </div>
    <me-search-bar v-model="keyword" @search="onPressEnter" @reset="resetSearch"></me-search-bar>
    <!-- <div class="search-bar-aligner" :class="{ 'searching': searching }" @click="handleFocus">
      <div class="search-bar-wrapper">
        <div class="search-bar">
          <div class="search-icon">
            <IconCSS class="icon" name="ep:search"></IconCSS>
          </div>
          <input v-model="keyword" @blur="handleBlur" @keyup.enter="onPressEnter" ref="searchInputRef"
            class="search-bar-input" type="text" placeholder="Search" />
        </div>
      </div>
    </div> -->
    <div class="photos" v-if="photos.length">
      <me-observer :isLoading="isLoading" @loadMore="loadData">
        <div class="photo-list">
          <div class="photo-item" v-for="(photo, index) in photos" :key="photo.id" :style="{
            //5-10随机
            gridRowEnd: photo.gridRowEnd,
          }" @click="handleDetail(photo, index)">
            <div class="photo-image visible">
              <img :src="photo.urls?.regular" alt="" />
            </div>
            <div class="photo-info">
              <div class="photo-title">
                {{ photo.user.username }}
              </div>
            </div>
          </div>
        </div>
      </me-observer>
    </div>
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
definePageMeta({
  key: 'photo',
  layout: 'ylater',
})
const focused = ref(false)
const searchInputRef = ref<HTMLInputElement | null | undefined>()
const handleFocus = () => {
  focused.value = true
  // @ts-ignore
  searchInputRef.value.focus()
}
const handleBlur = () => {
  if (searching.value) focused.value = true
  focused.value = false
}
//cover
const cover = ref<any>({})
function getCoverImage() {
  //获取当前时间
  const timestamp = new Date().getTime()
  const params = {
    topics: 'Jpg6Kidl-Hk',
    // timestamp: timestamp
  }
  getRandomPhotos(params).then((res) => {
    cover.value = res
    console.log(res)
  })
}
const getBackgroundStyles = computed(() => {
  return {
    'background-image': `url(${cover.value.urls?.regular})`,
    'background-color': cover.value.color,
  }
})
//search
const searching = ref(false)
const keyword = ref('cat')
function onPressEnter() {
  if (!keyword.value) return
  searching.value = true
  focused.value = true
  page.value = 1
  photos.value = []
  getPhotos()
}
//photo list
const page = ref(1)
const per_page = ref(20)
const total = ref(0)
const params = computed(() => {
  return {
    query: keyword.value,
    page: page.value,
    per_page: per_page.value
  }
})
const photos = ref<any>([])
const isLoading = ref(false)
const getPhotos = () => {
  isLoading.value = true
  getSearchPhotos(params.value).then((res) => {
    const list = res.results.map((v: any) => {
      return {
        ...v,
        gridRowEnd: gridRowEnd()
      }
    })
    photos.value = [...photos.value, ...list]
    total.value = res.total
  }).finally(() => {
    isLoading.value = false
  })
}


const loadData = () => {
  if (photos.value.length >= total.value) return
  page.value++
  getPhotos()
}
const gridRowEnd = () => {
  //5-10随机
  const rowEnd = Math.floor(Math.random() * (10 - 5 + 1) + 5)
  console.log(rowEnd)
  return `span ${rowEnd}`
}
const setVisible = () => {
}
//detail
const photo = ref<any>({})
const visibleOverlay = ref(false)
const current = ref(0)
const photosList = computed(() => {
  return photos.value.map((v: any) => {
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
  return photos.value[current.value].urls?.full + '?force=true'
})
const downloading = ref(false)
const downloadImage = () => {
  downloading.value = true
  saveAs(downloadUrl.value, photos.value[current.value].id)
  downloading.value = false
}
//reset
const resetSearch = () => {
  searching.value = false
  focused.value = false
  page.value = 1
  photos.value = []
  total.value = 0
}
//init

getCoverImage()
// onPressEnter()
</script>	
<style lang="less" scoped>
@blue: #07101d;
@yellow: #ffdc25;
@globalPadding: 40px;

.photo-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #1e1e1e;

  .lucky-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3;
    cursor: pointer;

    .icon {
      font-size: 20px;
      color: #fff;
    }
  }
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  opacity: .4;



  .bg-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(243, 243, 243);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.25);
    transition: transform 250ms;
    z-index: 1;
  }

  .bg-filter {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    left: 0px;
    position: absolute;
    top: 0px;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 250ms;

    &.focus {
      opacity: 1;
    }
  }
}

.search-bar-aligner {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  pointer-events: none;
  position: fixed;
  transition: height 250ms;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  cursor: pointer;

  .search-bar-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 10px;
    width: 500px;
    overflow: hidden;

    .search-bar {
      align-items: center;
      backdrop-filter: blur(5px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
      display: flex;
      gap: 10px;
      justify-content: center;
      padding: 10px;
      pointer-events: all;
      position: relative;
      // width: calc(100% - 20px);
      width: 100%;
      overflow: hidden;



      .search-icon {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: white;
        font-size: 18px;
        margin-right: 10px;

        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 100%;
          right: -10px;
          border-radius: 2px;
          transform: all 250ms;
          background-color: rgba(255, 255, 255, 1);
          transition: width 250ms, height 250ms;
        }
      }

      .search-bar-input {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1em;
        height: 40px;
        outline: none;
        padding: 10px 0px;
        text-align: left;
        transition: width 250ms;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        overflow: hidden;

        &::placeholder {
          font-weight: 500;
          font-size: 15px;
          color: rgba(255, 255, 255, 1);
        }

        &:focus {
          flex: 1;

          &::placeholder {
            color: rgba(255, 255, 255, 0.2);

          }
        }
      }
    }
  }

  &.searching {
    height: 100px;
  }


}

.photos {
  flex: 1;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 130px;
  max-width: 1000px;
  width: 100%;
  position: relative;
  z-index: 2;

  .photo-list {
    display: grid;
    gap: 10px;
    grid-auto-rows: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 10px;
    padding-bottom: 50px;

    .photo-item {
      background-color: #1e1e1e;
      border-radius: 10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      // opacity: 0;
      overflow: hidden;
      position: relative;
      transform: translateY(20px);
      transition: opacity 250ms, transform 250ms;
      cursor: pointer;

      // &:hover {
      //   transform: scale(1.05);
      // }

      .photo-image {
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all .2s ease-in-out;
        filter: blur(3px);

        &.visible {
          opacity: 1;
          transition: all .2s ease-in-out;
          filter: blur(0);

          img {
            transform: scale(1);
            transition: all .2s ease-in-out;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.2);
          transition: all .2s ease-in-out;
        }
      }

      &:hover {
        .photo-image {
          transform: scale(1.05);
        }
      }

      .photo-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background-color: rgba(0, 0, 0, .5);
        color: #fff;
        font-size: 14px;

        .photo-author {
          display: flex;
          align-items: center;
          gap: 5px;

          .photo-author-avatar {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}

.arco-image-preview-wrapper {
  backdrop-filter: blur(5px);
}
</style>	
