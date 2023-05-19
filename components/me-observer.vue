<template>
  <div class="me-observer">
    <slot></slot>
    <div ref="observerRef" style="height: 1px;"></div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['loadMore'])
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
})
const observer = ref<IntersectionObserver | null>(null)
const observerRef = ref()
const observeScroll = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }

  observer.value = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && !props.isLoading) {
      emit('loadMore')
    }
  }, options)
  observer.value.observe(observerRef.value)
}

onMounted(() => {
  observeScroll()
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})



</script>
