<template>
  <div class="collections">
    <me-observer :isLoading="isLoading" @loadMore="loadData">
      <div class="collections-info">
        <h1>{{ detail.title }}</h1>
        <p>{{ detail.description }}</p>
        <p>Total Photos: {{ total }}</p>
      </div>
      <me-gallery :photos="list"></me-gallery>
      <a-empty v-if="!isLoading && list.length === 0"></a-empty>
    </me-observer>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;
const page = ref(1);
const total = ref(0);
const list = ref<any>([]);
const isLoading = ref(false);

const detail = ref<any>({});
const getDetail = () => {
  getCollectionDetail({ id }).then((res) => {
    detail.value = res;
    total.value = res.total_photos;
  });
};
getDetail();
const loadData = () => {
  if (page.value * 10 > total.value) {
    return;
  }
  page.value++;
  getListByPage();
};
const getListByPage = () => {
  isLoading.value = true;
  getCollectionsPhotos({ id, page: page.value, per_page: 20 })
    .then((res) => {
      list.value = list.value.concat(res);
    })
    .finally(() => {
      isLoading.value = false;
    });
};
getListByPage();
</script>
<style lang="less" scoped>
.collections {
  position: relative;
  padding: 30px;
  .collections-info {
    position: relative;
    width: 100%;
    padding: 40px 24px;
    h1 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 12px;
    }
  }
}
</style>
