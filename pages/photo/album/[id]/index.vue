<template>
  <div class="album">
    <me-observer :isLoading="isLoading" @loadMore="loadData">
      <div class="album-info">
        <h1>{{ topic.title }}</h1>
        <p>{{ topic.description }}</p>
        <p>Total Photos: {{ topic.total_photos }}</p>
      </div>
      <me-gallery :photos="list"></me-gallery>
    </me-observer>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;
const topic = ref<any>({});
function getTopicDetail() {
  getTopic({ id }).then((res) => {
    topic.value = res;
    total.value = res.total_photos;
  });
}
getTopicDetail();
//photo
const isLoading = ref(false);
const page = ref(1);
const total = ref(0);
const list = ref<any>([]);
const loadData = () => {
  if (page.value * 10 > total.value) {
    return;
  }
  page.value++;
  getListByPage();
};
const getListByPage = () => {
  getTopicPhotos({ id, page: page.value, per_page: 20 }).then((res) => {
    list.value = list.value.concat(res);
  });
};
getListByPage();
</script>
<style lang="less" scoped>
.album {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 30px;

  .album-containter {
    display: grid;
    grid-gap: 36px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }

  .album-info {
    position: relative;
    width: 100%;
    padding: 60px 24px;
    transform: translate3d(0, 0, 0);

    h1 {
      font-size: 64px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 12px;
      color: #666;
    }
  }

  .photo {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    transform: translate3d(0, 0, 0);

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
