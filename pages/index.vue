<template>
  <div class='home-page'>
    <div class="search">
      <div class="search-input">
        <IconCSS class="icon" name="ep:search"></IconCSS>
        <input class="input-inner" type="text" placeholder="Search" v-model="keyword" @keyup.enter="handleSearch" />
        <me-button v-if="keyword" @click="handleClear" size="small" icon="ep:close"></me-button>
      </div>
      <div class="search-tags">
        <span class="tag" v-for="item in categories" @click="getVideosInCategory(item.id)" :key="item.id">{{ item.name
        }}</span>
      </div>
    </div>
    <div class="pager">
      <me-pagination v-model:page="page" :total="total" @change="getList"></me-pagination>
    </div>
    <ol class="video-list">
      <li class="video-card" v-for="item in list" :key="item.id" @click="handlePreview(item)">
        <me-media-card :poster="item.thumbnail" :video="item.urls.mp4_preview" :title="item.title">
          <div class="video-info">
            <div class="meta-list">

              <div class="meta">
                <IconCSS class="icon" name="ep:view"></IconCSS>
                {{ item.views }}
              </div>
              <div class="meta">
                <IconCSS class="icon" name="ep:download"></IconCSS>
                {{ item.downloads }}
              </div>
            </div>
            <div class="actions">
              <me-button @click="handlePreview" icon="ep:video-play" size="small"></me-button>
            </div>
          </div>
        </me-media-card>
      </li>
    </ol>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/stores'
definePageMeta({
  key: 'index',
})
const Router = useRouter()
const appStore = useAppStore()
const handlePreview = (item: any) => {
  appStore.setBgVideo(item.urls.mp4)
  const videoId = item.id
  Router.push('/preview' + '?id=' + videoId)
}
const query = ref({
  urls: 'true',
  page_size: 10
})
const page = ref(1)
const total = ref(0)
const list = ref<any>([])
const getList = async () => {
  console.log('getList')
  const params = {
    id: '7bh0a0p2JM',
    urls: 'true',
    page_size: 10,
    page: page.value,
    // sort_by: 'date'
  }
  const data = await getCategoriesVideos(params)
  console.log(params, data)
  list.value = data.hits
  total.value = data.total
}
getList()
//search
const keyword = ref('')
const handleClear = () => {
  keyword.value = ''
  getList()
}
const handleSearch = async () => {
  const params = {
    ...query.value,
    query: keyword.value
  }
  const data = await getVideoList(params)
  console.log(data)
  list.value = data.hits
  total.value = data.total

}
//分类
const categories = ref<any>([])
const getCategories = async () => {
  const data = await getCategoriesList()
  categories.value = data.hits
}
const getVideosInCategory = async (id: string) => {
  const params = {
    ...query.value,
    id: id
  }
  const data = await getCategoriesVideos(params)
  list.value = data.hits
}
getCategories()
</script>	
<style lang="less" scoped>
.home-page {
  width: 100%;
  padding: 60px;
}

.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 36px;
  list-style: none;

  .video-card {

    &:hover {
      z-index: 1;
    }
  }
}

.video-info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  color: #fff;

  .meta-list {
    display: flex;
    align-items: center;

    .meta {
      display: flex;
      align-items: center;
      margin-right: 10px;
      font-size: 13px;
      opacity: 0.65;

      .icon {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
  }
}

.search {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 0 20px 0;

  .search-input {
    padding: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0);
    color: #fff;
    font-size: 18px;
    transition: all 0.3s ease-in-out;

    &:focus-within {
      background: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 1);
      transition: all 0.3s ease-in-out;
    }

    .icon {
      font-size: 20px;
      margin-right: 10px;
    }

    .input-inner {
      outline: none;
      width: 100%;
      height: 100%;
      height: 32px;
      background: transparent;
    }
  }

  .search-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 12px 0;
    color: #fff;
    font-size: 14px;
    opacity: 0.65;

    .tag {
      display: inline-flex;
      padding: 4px 8px;
      margin-bottom: 4px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

.pager {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
}
</style>	
