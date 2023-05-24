<template>
  <div class='collection-list'>
    <cCard class="main-card" :item="item" v-for="item in list" :key="item.id" @click="handleDetail(item)">
    </cCard>
  </div>
</template>
<script lang="ts" setup>
import cCard from './c-card.vue'
const Router = useRouter()
const list = ref<any>([])
const getList = async () => {
  const params = {
    page: 1,
    per_page: 2000,
  }
  const data = await getCollections(params)
  list.value = data
}
getList()
const handleDetail = (item: any) => {
  Router.push('/photo/collections/' + item.id)
}
</script>	
<style lang="less" scoped>
.collection-list {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(640px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}
</style>	
