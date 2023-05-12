<template>
  <div class='photo-page'>
    <div class="lucky-btn" @click="getCoverImage">
      <IconCSS class="icon" name="icon-park:refresh"></IconCSS>
    </div>
    <div class="bg">
      <div class="bg-image" :style="getBackgroundStyles"></div>
      <div class="bg-filter"></div>
    </div>
    <div class="search-bar-aligner" :class="{ 'focused': focused }" @click="handleFocus">
      <div class="search-bar-wrapper">
        <div class="search-bar" :class="{ 'focused': focused }">
          <div class="search-icon">
            <IconCSS class="icon" name="ep:search"></IconCSS>
          </div>
          <input @blur="handleBlur" ref="searchInputRef" class="search-bar-input" type="text" placeholder="Search" />
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
const focused = ref(false)
const searchInputRef = ref<HTMLInputElement | null | undefined>()
const handleFocus = () => {
  focused.value = true
  // @ts-ignore
  searchInputRef.value.focus()
}
const handleBlur = () => {
  focused.value = false
}
//cover
const cover = ref<any>({})
function getCoverImage() {
  //获取当前时间
  const timestamp = new Date().getTime()
  const params = {
    topics: '6sMVjTLSkeQ',
    timestamp: timestamp
  }
  getRandomPhotos(params).then((res) => {
    cover.value = res
    console.log(res)
  })
}
const getBackgroundStyles = computed(() => {
  return {
    'background-image': `url(${cover.value.urls?.regular})`,
    'background-color': cover.value.color,
  }
})
getCoverImage()
//search
const searching = ref(false)
const keyword = ref('')
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
  background-color: #1e1e1e;

  .lucky-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 3;
    cursor: pointer;

    .icon {
      font-size: 30px;
      color: #fff;
    }
  }
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  opacity: .4;



  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1532792034154-7fd42c240b25');
    background-color: rgb(243, 243, 243);

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.25);
    transition: transform 250ms;
    z-index: 1;
  }

  .bg-filter {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    left: 0px;
    position: absolute;
    top: 0px;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 250ms;

    &.focus {
      opacity: 1;
    }
  }
}

.search-bar-aligner {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  pointer-events: none;
  position: fixed;
  transition: height 250ms;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  cursor: pointer;

  .search-bar-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 10px;
    width: 500px;
    overflow: hidden;

    .search-bar {
      align-items: center;
      backdrop-filter: blur(5px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
      display: flex;
      gap: 10px;
      justify-content: center;
      padding: 10px;
      pointer-events: all;
      position: relative;
      width: calc(100% - 20px);



      .search-icon {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: white;
        font-size: 18px;
        margin-right: 10px;

        &::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          right: -10px;
          border-radius: 50%;
          transform: all 250ms;
          background-color: rgba(255, 255, 255, 1);
          transition: width 250ms, height 250ms;
        }
      }

      .search-bar-input {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1em;
        height: 40px;
        outline: none;
        padding: 10px 0px;
        text-align: left;
        transition: width 250ms;
        width: 64px;
        font-size: 16px;
        font-weight: bold;

        &::placeholder {
          font-weight: 500;
          font-size: 15px;
          color: rgba(255, 255, 255, 1);
        }

        &:focus {
          width: 100%;

          &::placeholder {
            color: rgba(255, 255, 255, 0.2);

          }
        }
      }

      &.focused {
        background-color: rgba(255, 255, 255, 0.2);
        width: 100%;

        .search-icon {
          &::after {
            width: 1px;
            height: 100%;
            border-radius: 2px;
          }
        }
      }
    }
  }

  &.searching {
    height: 100px;
  }


}
</style>	
