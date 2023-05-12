<template>
  <div class="carousel" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
    <div class="carousel-track" ref="trackRef" :style="{ transform: `translateX(${position}px)` }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

const trackRef = ref<HTMLElement | null>(null)
const dragging = ref(false)
const startX = ref(0)
const position = ref(0)
const prevPosition = ref(0)

const handleMouseDown = (e: MouseEvent) => {
  e.preventDefault()
  dragging.value = true
  startX.value = e.clientX
  prevPosition.value = position.value
}

const handleMouseMove = (e: MouseEvent) => {
  if (!dragging.value) return
  const diff = e.clientX - startX.value
  position.value = prevPosition.value + diff
}

const handleMouseUp = () => {
  dragging.value = false
}

</script>

<style>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s;
}

/* Optional styles for child slides */
.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
}
</style>
