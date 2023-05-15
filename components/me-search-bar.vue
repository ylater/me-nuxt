<template>
  <div class="search-bar-aligner" :class="{ 'searching': searching }" @click="handleFocus">
    <div class="search-bar-wrapper">
      <div class="search-bar">
        <div class="search-icon">
          <IconCSS class="icon" name="ep:search"></IconCSS>
        </div>
        <input v-model="keyword" @blur="handleBlur" @keyup.enter="onPressEnter" @input="handleInput" ref="searchInputRef"
          class="search-bar-input" type="text" placeholder="Search" />
        <div class="reset-icon" v-if="searching" @click.stop="handleReset">
          <Icon name="ep:refresh"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  isSearching: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['search', 'reset', 'update:modelValue'])
const keyword = ref(props.modelValue)
const searching = ref(props.isSearching)
const searchInputRef = ref<HTMLInputElement | null | undefined>()

const handleFocus = () => {
  // @ts-ignore
  searchInputRef.value.focus()
}
const handleBlur = () => {
  // if (searching.value) searching.value = true
  // searching.value = false
}
const onPressEnter = () => {
  emit('search', keyword.value)
  searching.value = true
}
const handleInput = () => {
  emit('update:modelValue', keyword.value)
}
const handleReset = () => {
  keyword.value = ''
  searching.value = false
  searchInputRef.value?.blur()
  emit('reset')

}
</script>	
<style lang="less" scoped>
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
      // width: calc(100% - 20px);
      width: 100%;
      overflow: hidden;



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
          width: 1px;
          height: 100%;
          right: -10px;
          border-radius: 2px;
          transform: all 250ms;
          background-color: rgba(255, 255, 255, 1);
          transition: width 250ms, height 250ms;
        }
      }

      .reset-icon {
        color: white;
        font-size: 18px;
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
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        overflow: hidden;

        &::placeholder {
          font-weight: 500;
          font-size: 15px;
          color: rgba(255, 255, 255, 1);
        }

        &:focus {
          flex: 1;

          &::placeholder {
            color: rgba(255, 255, 255, 0.2);

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
