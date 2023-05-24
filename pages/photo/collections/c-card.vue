<template>
  <div class="main-card">
    <div class="card-content">
      <div class="content-left">
        <img class="full-img" :src="cover" :alt="item.cover_photo.alt_description">
      </div>
      <div class="content-right">
        <h2> {{ item.title }}</h2>
        <div>
          <p>{{ item.total_photos }} photos · Curated by <a>
              {{ item.user.first_name }}
            </a> Collections</p>
        </div>
        <div class="tags">
          <template v-for="(tag, ti) in item.tags">
            <a-tag class="tag" bordered v-if="'search' === tag.type">{{ tag.title }}</a-tag>
          </template>
        </div>
        <div class="mini-imgs">
          <picture v-for="(photo, pi) in item.preview_photos " :key="pi" @click="changeCover(photo)">
            <source :srcset="photo.urls.small" media="(min-width: 700px)">
            <img :key="pi" :src="photo.urls.small" alt="">
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { defineProps } from 'vue'
const props = defineProps({
  item: {
    type: Object as PropType<any>,
    default: () => { }
  }
})
const cover = ref(props.item.cover_photo.urls.regular)
const changeCover = (photo: any) => {
  cover.value = photo.urls.regular
}
</script>	
<style lang="less" scoped>
.main-card {
  position: relative;
  width: 100%;
  border-radius: 10px;
  font-family: sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1em;
  line-height: 1.5;
  color: #303336;
  background-color: #fff;

  h2 {
    margin-top: 20px;
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
  }

  p {
    margin-top: 20px;
    font-size: 1em;
    color: #7B8591;
  }

  .card-content {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .content-left {
    position: relative;
    width: 300px;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f6f6f6;

    img {
      width: inherit;
      height: 300px;
      object-fit: cover;
      object-position: center;
    }
  }

  .content-right {
    position: relative;
    width: calc(100% - 300px);
    height: 100%;
    padding-left: 35px;

    .tags {
      margin: 10px auto;
      display: flex;
      flex-wrap: wrap;

      .tag {
        position: relative;
        width: fit-content;
        margin-right: 5px;
        // background-color: #005AEE;
      }
    }
  }

  .mini-imgs {
    position: absolute;
    display: flex;
    align-items: flex-start;
    bottom: 0;
    height: 80px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
      cursor: pointer;
      transition: 300ms;

      &:hover {
        opacity: .75;
      }

      &:nth-child(2) {
        margin: 0 10px;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    main {
      display: flex;
      justify-content: center;
      align-items: start;
      height: auto;
      min-height: 100vh;
    }

    & {
      position: relative;
      width: 100%;
      height: auto;
      margin: 80px 20px;
    }

    .card-content {
      flex-direction: column;
    }

    .content-left {
      width: 100%;
      height: 300px;
    }

    .content-right {
      width: 100%;
      height: auto;
      padding: 175px 0 0;
    }

    .tag {
      left: 0;
      transform: translateX(0);
    }

    .mini-imgs {
      position: absolute;
      display: flex;
      top: 0;
      margin-top: 35px;
      height: 105px;
    }
  }

  @media only screen and (max-width: 500px) {
    & {
      margin: 120px 20px;
    }

    .card-content {
      padding: 25px;
    }

    .content-right {
      width: 100%;
      height: auto;
      padding: 115px 0 0;
    }

    .mini-imgs {
      margin-top: 20px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>	
