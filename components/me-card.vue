<template>
  <div class="me-card">
    <div class="card-media">
      <img :src="cover" alt="" />
    </div>
    <div class="card-content">
      <slot>
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  cover: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
<style lang="less" scoped>
.me-card {
  position: relative;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  min-width: 180px;
  position: relative;
  transition: transform 250ms;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px);

    &::before {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, .5) 100%);
    }

    .card-media {
      img {
        transform: scale(1.5);
        transition: transform 250ms;
      }
    }
  }

  .card-media {
    width: 100%;
    height: 235px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: transform 250ms;
    }
  }

  .card-content {
    position: absolute;
    z-index: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;

    .title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .description {
      font-size: 14px;
      color: #fff;
      opacity: .5;
    }
  }
}
</style>