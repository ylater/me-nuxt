<template>
  <div class="me-carousel">
    <!-- <div class="carousel-full">
      <slot></slot>
    </div> -->
    <div class="carousel-track" ref="trackRef" :style="{ transform: `translateX(${position}px)` }">
      <slot></slot>
    </div>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  perPage: { type: Number, default: 1 },
  initialSlide: { type: Number, default: 0 },
})
const emit = defineEmits(['update:currentSlide'])
const trackRef = ref<HTMLElement | null>(null)
const dragging = ref(false)
const startX = ref(0)
const currentSlide = ref(props.initialSlide)
const position = ref(0)

const trackWidth = computed(() => {
  return trackRef.value ? trackRef.value.clientWidth : 0
})

const slideWidth = computed(() => {
  return trackWidth.value / props.perPage
})

const numSlides = computed(() => {
  return Math.ceil(trackRef.value?.children.length / props.perPage) || 0
})

const minPosition = computed(() => {
  return -(numSlides.value - 1) * slideWidth.value
})

const handleMouseDown = (e: MouseEvent) => {
  e.preventDefault()
  dragging.value = true
  startX.value = e.clientX
}

const handleMouseMove = (e: MouseEvent) => {
  if (!dragging.value) return
  const diff = e.clientX - startX.value
  position.value = clamp(position.value + diff, minPosition.value, 0)
  startX.value = e.clientX
}

const handleMouseUp = () => {
  dragging.value = false
  const slideIndex = Math.round(-position.value / slideWidth.value)
  currentSlide.value = clamp(slideIndex, 0, numSlides.value - 1)
  position.value = -currentSlide.value * slideWidth.value
  emit('update:currentSlide', currentSlide.value)
}

watch(
  () => props.initialSlide,
  () => {
    currentSlide.value = props.initialSlide
    position.value = -currentSlide.value * slideWidth.value
  }
)
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
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
  flex: 0 0 calc(100% / var(--per-page, 1));
  width: calc(100% / var(--per-page, 1));
}
</style>
