<template>
  <div class="topics">
    <div class="topic-group">
      <div class="topic" v-for="item in topics" @click="handleTopic(item)">
        <div class="topic-cover">
          <img :src="item.cover_photo.urls.small" alt="">
        </div>
        <div class="topic-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter()
const topics = ref<any[]>([])
function getTopics() {
  getPhotoTopics({ per_page: 100 }).then(res => {
    console.log(res)
    topics.value = res
  }).catch(err => {
    console.log(err)
  })
}
getTopics()
function handleTopic(item: any) {
  router.push({
    path: '/photo/album',
    query: {
      id: item.id
    }
  })
}
</script>	
<style lang="less" scoped>
.topics {
  --color-text: navy;
  --color-bg: papayawhip;
  --color-bg-accent: #ecdcc0;
  --size: clamp(10rem, 1rem + 40vmin, 30rem);
  --gap: calc(var(--size) / 14);
  --duration: 100s;
  --scroll-start: 0;
  --scroll-end: calc(-100% - var(--gap));

  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  mask-image: linear-gradient(var(--mask-direction, to right),
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0));

  .topic-group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;

    &:hover {
      animation-play-state: paused;
    }

    .topic {
      position: relative;
      display: grid;
      height: 160px;
      border-radius: 12px;
      overflow: hidden;
      place-items: center;
      aspect-ratio: 16/9;
      border-radius: 0.5rem;
      box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.3);
      cursor: pointer;
      text-shadow: 0 0 10px rgba(0, 0, 0, .5);

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        background-blend-mode: normal;
      }

      .topic-cover {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0.5rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .topic-title {
        position: absolute;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
      }
    }
  }
}

@keyframes scroll-x {
  from {
    transform: translateX(var(--scroll-start));
  }

  to {
    transform: translateX(var(--scroll-end));
  }
}

@keyframes scroll-y {
  from {
    transform: translateY(var(--scroll-start));
  }

  to {
    transform: translateY(var(--scroll-end));
  }
}
</style>	
