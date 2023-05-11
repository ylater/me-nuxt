<template>
  <div class='photo-page'>
    <!-- <me-carousel :perPage="3">
      <div class='carousel-item' :class="{ 'active': currentIndex === index }" v-for="(item, index) in list" :key="index">
        <div class='title'>
          .0{{ index + 1 }}
          <br>
          {{ item.subTitle }}
        </div>
        <div class='image'>
          <img draggable='false' :src='item.img'>
          <div class='overlay'></div>
          <div class='cats'>{{ item.desc }}</div>
          <div class='title'>{{ item.title }}</div>
          <div class='button'>
            查看详情
          </div>
        </div>
      </div>
    </me-carousel> -->
    <div class="bg"></div>
    <div class='photo-preview' :class="{ 'expand': visibleFull }">
      <div class='slideClone'>
        <div class='title f'>
          .0{{ currentIndex + 1 }}
          <br>
          {{ current.subTitle }}
        </div>
        <div class='image'>
          <img draggable='false' :src='current.img'>
          <div class='overlay'></div>
          <div class='cats'>{{ current.desc }}</div>
          <div class='title'>{{ current.title }}</div>
        </div>
      </div>
    </div>
    <div class='carousel-wrap'>
      <div class='carousel'>
        <div class='carousel-item' :class="{ 'active': currentIndex === index }" v-for="(item, index) in list"
          @click="handlePreview(index)" :key="index">
          <div class='title'>
            .0{{ index + 1 }}
            <br>
            {{ item.subTitle }}
          </div>
          <div class='image'>
            <img draggable='false' :src='item.img'>
            <div class='overlay'></div>
            <div class='cats'>{{ item.desc }}</div>
            <div class='title'>{{ item.title }}</div>
            <div class='button'>
              查看详情
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  key: 'photo',
  layout: 'ylater',
})

const list = [
  {
    title: 'My protein rebrand and digital campaign',
    subTitle: 'My Protein',
    desc: 'ADVERTISING DESIGN DIGITAL',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/fud.png',
  },
  {
    title: 'Nike Air max video campaign 2017',
    subTitle: 'Nike Air Max',
    desc: 'ADVERTISING DESIGN DIGITAL STRATEGY',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/nike.png',
  },
  {
    title: 'The new Apple Watch digital campaign 2019',
    subTitle: 'Apple Watch',
    desc: 'ADVERTISING DIGITAL STRATEGY',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rpo.jpg',
  },
  {
    title: 'Another agency did this campaign, not us',
    subTitle: 'Jade Teriyaki',
    desc: 'ADVERTISING DESIGN DIGITAL STRATEGY',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/orangetyhing.png',
  },
]
const current = ref(list[0])
const currentIndex = ref(0)
const visibleFull = ref(false)
const handlePreview = (index: number) => {
  console.log(index, 'eeeee')
  currentIndex.value = index
  current.value = list[index]
  visibleFull.value = true
}

</script>	
<style lang="less" scoped>
@blue: #07101d;
@yellow: #ffdc25;
@globalPadding: 40px;

.photo-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: @yellow;
}


.photo-preview {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  &.expand {
    visibility: visible;
  }
}

.carousel-wrap {
  position: relative;
  transform: translateX(-800px);
  perspective: 900px;
  perspective-origin: 50% 200px;

  .carousel {
    transform: translateY(120px);
    position: absolute;
    left: 0;
    right: 0;
    width: 30000px;
    transition: all 0.8s cubic-bezier(0, 0.6, 0.25, 1);
    transform-style: preserve-3d;
    pointer-events: none;
    left: 290.5px;
    cursor: default;
    transform: translateX(760px) translateY(120px);

    .carousel-item {
      width: 700px;
      height: 750px;
      float: left;
      margin-right: 60px;
      transition: all 0.5s;
      transform-style: preserve-3d;
      transform: scale(0);
      animation: 0s ease 0s 1 normal none running none;
      transform: rotateY(0deg) scale(1);
      transition: all 0.5s ease 0s;

      .title {
        font-weight: 800;
        color: #060608;
        position: relative;
        font-size: 22px;
        transform-style: preserve-3d;
      }

      &.active {
        transform: rotateY(0deg) scale(1);
        transition: all 0.5s ease 0s;

        .image {

          .overlay,
          .cats,
          .title,
          .button {
            opacity: 1;
          }
        }
      }

      .image {
        position: relative;
        margin-top: 10px;
        padding: 94px 94px;
        height: 380px;
        transform-style: preserve-3d;

        img {
          position: absolute;
          left: 0;
          z-index: -1;
          top: 0;
          height: 100%;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11, 18, 27, 0.7);
          z-index: -1;
          opacity: 0;

          transition: opacity 0.1s,
            transform 0.8s 0.7s cubic-bezier(0.79, -0.01, 0, 0.99);
        }

        .cats {
          color: @yellow;
          font-weight: 700;
          font-size: 12px;
          left: 0;
          transition: all 0.8s 0.16s cubic-bezier(0.79, -0.01, 0, 0.99);
          transform-style: preserve-3d;
          opacity: 0;
        }

        .title {
          font-weight: 800;
          color: white;
          width: 350px;
          font-size: 28px;
          margin-top: 10px;
          line-height: 35px;
          transform-style: preserve-3d;
          position: relative;
          transition: all 0.6s 0.2s;
          margin: 22px 0 16px 0;
          opacity: 0;
        }

        .button {
          color: @blue;
          font-size: 14px;
          cursor: pointer;
          margin-top: 14px;
          background: @yellow;
          float: left;
          padding: 12px 40px 14px 20px;
          transform-style: preserve-3d;
          position: relative;
          transition: all 0.6s 0.3s;
          opacity: 0;

          img {
            width: 14px;
            height: auto;
            position: absolute;
            right: 17px;
            left: auto;
            top: 16px;
          }
        }
      }
    }
  }
}







@keyframes carouselIn {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}



@keyframes hr {
  from {
    width: 0;
  }

  to {
    width: 70px;
  }
}

@keyframes hrOut {
  from {
    width: 70px;
  }

  to {
    width: 0px;
  }
}

@keyframes spark {
  from {
    clip-path: polygon(0 0, 0% 0%, 0% 100%, 0% 100%);
  }

  to {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }
}

.scroll {
  position: absolute;
  left: calc(50% - 348px);
  top: 458px;
  transition: all 0.8s 0s;
  opacity: 0;
}

.back {
  position: absolute;
  height: 100vh;

  img {
    animation: none !important;
    opacity: 1 !important;
    transform: rotate(90deg);
    bottom: 73px !important;
    position: absolute;
  }
}
</style>	
