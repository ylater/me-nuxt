<template>
  <div class='photo-overlay'>

    <div class="overlay-content">

      <div class="photo-container">
        <div class="photo">
          <img :src="photo.urls.regular" :alt="photo.alt_description">
        </div>
        <!-- <div class="photo-info">
          <div class="photo-author">
            <div class="photo-author-avatar">
              <img :src="photo.user.profile_image.small" alt="">
            </div>
            <div class="photo-author-name">
              {{ photo.user.username }}
            </div>
          </div>
          <div class="photo-tags">
            <div class="tag" v-for="item in photo.tags">
              {{ item.title }}
            </div>

          </div>
          <div class="photo-description">{{ photo.alt_description }}</div>
        </div> -->
      </div>
    </div>
    <div class="photo-tools">
      <ul>

        <li>
          <Icon name="ant-design:rotate-right-outlined"></Icon>
        </li>
        <li>
          <Icon name="ant-design:rotate-left-outlined"></Icon>
        </li>
        <li>
          <Icon name="icon-park:full-screen"></Icon>
        </li>
        <li @click="handleClick">
          <Icon name="icon-park:close"></Icon>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  photo: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['close'])
function handleClick() {
  emit('close')
}
</script>	
<style lang="less" scoped>
.photo-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);

  .overlay-close {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;

    .close-btn {
      width: 30px;
      height: 30px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      cursor: pointer;

      &:hover {
        background-color: #000;
      }

      ;
    }
  }

  .overlay-content {
    width: 100%;
    flex: 1;
    overflow: auto;
    // background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .photo-author {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .photo-author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .photo-author-name {
      font-size: 20px;
      font-weight: 500;
      color: #fff;
    }
  }

  .photo-container {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .photo {
      width: 100%;
      background: #fff;
      border-radius: 10px;
    }

    .photo-info {
      margin-left: 20px;

      .photo-tags {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 10px;
      }

      .photo-description {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
    }
  }
}

.photo-tools {
  position: fixed;
  bottom: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    max-width: 240px;
    padding: 0 24px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: filter(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    li {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>	
