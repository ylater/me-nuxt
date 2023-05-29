<template>
  <div class="photo-page">
    <!--  background -->
    <div class="bg">
      <div class="bg-image" :style="getBackgroundStyles"></div>
      <div class="bg-filter" :class="{ focus: searching }"></div>
    </div>
    <!-- search bar  -->
    <me-search-bar
      v-model="keyword"
      @search="onPressEnter"
      @reset="resetSearch"
    >
      123121
    </me-search-bar>
    <!-- photos -->
    <div class="photos">
      <me-observer :isLoading="isLoading" @loadMore="loadData" v-if="total > 0">
        <me-gallery :photos="photos"></me-gallery>
      </me-observer>
      <!-- empty tips -->
      <div class="empty" v-if="searching && total === 0 && !isLoading">
        <div class="empty-icon">
          <IconCSS class="icon" name="ep:MagicStick"></IconCSS>
        </div>
        <div class="empty-text">No results found</div>
      </div>
    </div>
    <Topics class="topics" v-if="!searching"></Topics>
  </div>
</template>
<script lang="ts" setup>
import Topics from "./topics.vue";
definePageMeta({
  key: "photo",
  title: "Photo",
});
const focused = ref(false);
const searchInputRef = ref<HTMLInputElement | null | undefined>();
const handleFocus = () => {
  focused.value = true;
  // @ts-ignore
  searchInputRef.value.focus();
};
const handleBlur = () => {
  if (searching.value) focused.value = true;
  focused.value = false;
};
//cover
const cover = ref<any>({});
function getCoverImage() {
  //获取当前时间
  const timestamp = new Date().getTime();
  const params = {
    // topics: "6sMVjTLSkeQ",
    // timestamp: timestamp
  };
  getRandomPhotos(params).then((res) => {
    cover.value = res;
  });
}
const getBackgroundStyles = computed(() => {
  return {
    "background-image": `url(${cover.value.urls?.full})`,
    "background-color": cover.value.color,
  };
});
//search
const searching = ref(false);
const keyword = ref("");
function onPressEnter() {
  if (!keyword.value) return;
  searching.value = true;
  focused.value = true;
  page.value = 1;
  photos.value = [];
  getPhotos();
}
//photo list
const page = ref(1);
const per_page = ref(20);
const total = ref(0);
const params = computed(() => {
  return {
    query: keyword.value,
    page: page.value,
    per_page: per_page.value,
    lang: "zh-Hans",
  };
});
const photos = ref<any>([]);
const isLoading = ref(false);
const getPhotos = () => {
  isLoading.value = true;
  getSearchPhotos(params.value)
    .then((res) => {
      const list = res.results.map((v: any) => {
        return {
          ...v,
        };
      });
      photos.value = [...photos.value, ...list];
      total.value = res.total;
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const loadData = () => {
  if (photos.value.length >= total.value) return;
  page.value++;
  getPhotos();
};
//reset
const resetSearch = () => {
  searching.value = false;
  focused.value = false;
  page.value = 1;
  photos.value = [];
  total.value = 0;
};
//init

getCoverImage();
// onPressEnter()
</script>
<style lang="less" scoped>
@blue: #07101d;
@yellow: #ffdc25;
@globalPadding: 40px;

.photo-page {
  width: 100%;
  height: 100%;
  position: relative;

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
  opacity: 0.4;

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
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
        transition: all 0.2s ease-in-out;
        filter: blur(3px);

        &.visible {
          opacity: 1;
          transition: all 0.2s ease-in-out;
          filter: blur(0);

          img {
            transform: scale(1);
            transition: all 0.2s ease-in-out;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.2);
          transition: all 0.2s ease-in-out;
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
        background-color: rgba(0, 0, 0, 0.5);
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

.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.pin-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 14px;
}

.switch-tab {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px;
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  z-index: 2;
  width: 180px;
  margin: 0 auto;
  border-radius: 60px;

  .tab {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
.topics {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
