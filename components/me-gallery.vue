<template>
  <div class="me-gallery">
    <div
      class="photo"
      v-for="(item, index) in photos"
      :key="index"
      :class="setWH(index)"
      @click="handleDetail(item, index)"
    >
      <div class="photo-image visible">
        <img :src="item.urls?.regular" alt="" />
      </div>
      <div class="photo-author">
        <me-user :user="item.user"></me-user>
      </div>
    </div>
    <!-- preview -->
    <a-image-preview-group
      v-if="visibleOverlay"
      v-model:visible="visibleOverlay"
      v-model:current="current"
      infinite
      :srcList="photosList"
    >
      <template #actions>
        <div class="arco-image-preview-toolbar-action" @click="downloadImage">
          <a-tooltip content="原图下载">
            <a-spin v-if="downloading" />
            <span v-else class="arco-image-preview-toolbar-action-content">
              <Icon
                style="display: flex"
                name="icon-park:download"
                size="14"
              ></Icon>
            </span>
          </a-tooltip>
        </div>
        <a
          class="arco-image-preview-toolbar-action"
          :href="photo.links.html"
          target="_blank"
        >
          <a-tooltip content="图片地址">
            <span class="arco-image-preview-toolbar-action-content">
              <Icon style="display: flex" name="bxl:unsplash" size="14"></Icon>
            </span>
          </a-tooltip>
        </a>
        <div class="arco-image-preview-toolbar-action">
          <a-tooltip :content="`Photo By ${photo.user.first_name}`">
            <div style="padding: 6px 0">
              <me-user :user="photo.user" avatarOnly></me-user>
            </div>
          </a-tooltip>
        </div>
      </template>
    </a-image-preview-group>
  </div>
</template>
<script lang="ts" setup>
import { saveAs } from "file-saver";
const props = defineProps({
  photos: {
    type: Array as PropType<any[]>,
    default: [],
  },
});
const setWH = (index: number) => {
  const css = [
    "photo--h-2",
    "photo--v-1",
    "photo--h-2 photo--v-2",
    "photo--h-1 photo--v-1",
  ];
  return css[index % 4];
};

//detail
const list = ref<any>([]);
const photo = ref<any>({});
const visibleOverlay = ref(false);
const current = ref(0);
const photosList = computed(() => {
  return props.photos.map((v: any) => {
    return v.urls?.regular;
  });
});
function handleDetail(item: any, index: number) {
  photo.value = { ...item };
  current.value = index;
  visibleOverlay.value = true;
}
function close() {
  visibleOverlay.value = false;
}
//download
const downloading = ref(false);
const downloadImage = async () => {
  downloading.value = true;
  const id = props.photos[current.value].id;
  const image = await getPhotoDownload({ id });
  saveAs(image.url, id);
  downloading.value = false;
};
</script>
<style lang="less" scoped>
.me-gallery {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 4px;
  // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  .photo-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: transform 0.5s ease;

    img {
      block-size: auto;
      max-inline-size: 100%;
      vertical-align: middle;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      transform: translateX(-100%);
    }
    &.visible {
      opacity: 1;
      img {
        transform: translateX(0);
        transition: transform 0.5s ease;
        transition-delay: 1s;
      }
    }
  }

  .photo {
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // backdrop-filter: blur(4px);
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 1;

      transition: all 0.5s ease;
    }

    &:hover {
      .photo-image {
        transform: scale(1.1);
        transition: transform 0.5s ease;
      }

      &::before {
        opacity: 0;
      }
      .photo-author {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .photo-author {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 4px;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.5s ease;
      background-color: rgba(0, 0, 0, 0.5);
      pointer-events: none;
      // backdrop-filter: blur(4px);
    }

    &--h-2 {
      grid-column-end: span 2;
    }

    &--v-2 {
      grid-row-end: span 2;
    }
  }
}

// @media screen and (max-width: 1440px) {
//   .me-gallery {
//     grid-template-columns: repeat(8, 1fr);
//     grid-auto-rows: 200px;
//     grid-gap: 4px;
//   }
// }

@media screen and (max-width: 1024px) {
  .me-gallery {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 150px;
    grid-gap: 4px;
  }
}

@media screen and (max-width: 768px) {
  .me-gallery {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    grid-gap: 4px;
  }
}
</style>
