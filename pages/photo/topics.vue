<template>
  <div class="topics">
    <div class="topic-group">
      <div class="topic" v-for="item in topics" @click="handleTopic(item)">
        <div class="topic-cover">
          <img :src="item.cover_photo.urls.small" alt="" />
        </div>
        <div class="topic-info">
          <div class="topic-title">{{ item.title }}</div>
          <p>photos:{{ item.total_photos }}</p>
        </div>
      </div>
      <div class="topic" v-for="item in topics" @click="handleTopic(item)">
        <div class="topic-cover">
          <img :src="item.cover_photo.urls.small" alt="" />
        </div>
        <div class="topic-info">
          <div class="topic-title">{{ item.title }}</div>
          <p>photos:{{ item.total_photos }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const topics = ref<any[]>([]);
function getTopics() {
  getPhotoTopics({ per_page: 100 })
    .then((res) => {
      topics.value = res;
    })
    .catch((err) => {
      console.log(err);
    });
}
getTopics();
function handleTopic(item: any) {
  router.push({
    path: "/photo/album/" + item.id,
  });
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
  --scroll-end: calc(-50% - var(--gap));
  width: 100%;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  mask-image: linear-gradient(
    var(--mask-direction, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }

  .topic-group {
    min-width: 100%;
    flex-shrink: 0;
    display: flex;
    gap: var(--gap);
    padding: 12px;
    animation: scroll-x var(--duration) linear infinite;

    &:hover {
      animation-play-state: paused;
    }

    .topic {
      position: relative;
      display: flex;
      border-radius: 12px;
      padding: 8px;
      place-items: center;
      cursor: pointer;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.2);

      .topic-cover {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 0.5rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .topic-info {
        flex: 1;
        margin-left: 10px;
        .topic-title {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        p {
          color: #fff;
          font-size: 14px;
          opacity: 0.5;
        }
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
