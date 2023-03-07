<template>
  <button class="me-button" v-bind="$attrs" :class="[{ 'circle': circle }, size]">
    <IconCSS v-if="icon" :name="icon"></IconCSS>
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  circle: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'normal' | 'small' | 'large'>,
    default: 'normal'
  }
}) 
</script>
<style lang="less" scoped>
.me-button {
  padding: 10px;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .2);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;

  &.small {
    padding: 4px;
  }

  &.large {
    padding: 12px 24px;
  }

  &.circle {
    padding: 8px;
    border-radius: 50%;
  }
}
</style>