<template>
  <div class="collection-list">
    <cCard class="main-card" :item="item" v-for="item in list" :key="item.id">
    </cCard>
  </div>
</template>
<script lang="ts" setup>
import cCard from "./c-card.vue";
const Router = useRouter();
const list = ref<any>([]);
const getList = async () => {
  const params = {
    page: 1,
    per_page: 20,
  };
  const data = await getCollections(params);
  list.value = data.filter((item: any) => {
    return item.user.id !== "iwi9-4OXLYY";
  });
};
getList();
</script>
<style lang="less" scoped>
.collection-list {
  padding-top: 100px;
  position: relative;
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(640px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}
</style>
