<template>
  <div class="me-pagination">
    <div class="page prev" :class="{ 'disabled': disabledPrev }" @click="handlePrev">
      <IconCSS name="ep:arrow-left"></IconCSS>
    </div>
    <div class="page pager" @click="handlePager">
      <span>{{ page }}</span>
      <span>/</span>
      <span>{{ totalPage }}</span>

    </div>
    <div class="page next" :class="{ 'disabled': disabledNext }" @click="handleNext">
      <IconCSS name="ep:arrow-right"></IconCSS>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  pagerCount: {
    type: Number,
    default: 10,
  },
})
const emit = defineEmits(['prev', 'next', 'update:page', 'change'])
const totalPage = computed(() => {
  return Math.ceil(props.total / props.pageSize)
})
const disabledPrev = computed(() => {
  return props.page === 1
})
const disabledNext = computed(() => {
  return props.page === totalPage.value
})
const handlePrev = () => {
  if (disabledPrev.value) return
  //
  emit('update:page', props.page - 1)
  emit('change', props.page - 1)
}
const handleNext = () => {
  if (disabledNext.value) return
  emit('update:page', props.page + 1)
  emit('change', props.page + 1)
}
const handlePager = () => {
  console.log('pager')
}
</script>
<style lang="less" scoped>
.me-pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  .page {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    margin-right: 10px;
    height: 32px;
    min-width: 32px;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    &.prev {}

    &.next {}

    &.pager {
      padding: 8px 12px;
    }
  }
}
</style>