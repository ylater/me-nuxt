<template>
  <div class='collections'>
    <me-observer :isLoading="isLoading" @loadMore="loadData">
      <me-gallery :photos="list"></me-gallery>
    </me-observer>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()
const id = route.params.id as string
const page = ref(1)
const total = ref(0)
const list = ref<any>([])
const isLoading = ref(false)

const detail = ref<any>({})
const getDetail = () => {
  getCollectionDetail({ id }).then(res => {
    detail.value = res
    total.value = res.total_photos
  })
}
getDetail()
const loadData = () => {
  if (page.value * 10 > total.value) {
    return
  }
  page.value++
  getListByPage()
}
const getListByPage = () => {
  isLoading.value = true
  getCollectionsPhotos({ id, page: page.value, per_page: 20 }).then(res => {
    list.value = list.value.concat(res)
  }).finally(() => {
    isLoading.value = false
  })
}
getListByPage()
</script>	
<style lang="less" scoped>
.collections {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
</style>	
