<template>
  <div class="search-bar-aligner" :class="{ searching: searching }">
    <div class="search-bar-wrapper">
      <div class="search-tab" v-if="showTab">
        <div
          class="tab-item"
          :class="{ active: tab.value === tabIndex }"
          v-for="tab in tabs"
          :key="tab.value"
          @click="handleTabClick(tab.value)"
        >
          {{ tab.name }}
        </div>
        <div
          class="tab-slider"
          :style="{
            left: tabPosition + 'px',
          }"
        ></div>
      </div>
      <div class="search-bar" @click="handleFocus">
        <div class="search-icon">
          <IconCSS class="icon" name="ep:search"></IconCSS>
        </div>
        <input
          v-model="keyword"
          @blur="handleBlur"
          @keyup.enter="onPressEnter"
          @input="handleInput"
          ref="searchInputRef"
          class="search-bar-input"
          type="text"
          placeholder="Search"
        />
        <div class="reset-icon" v-if="searching" @click.stop="handleReset">
          <Icon name="ep:refresh"></Icon>
        </div>
      </div>
    </div>
    <p class="search-tips">
      {{ tips }}
      <!-- Or visit<NuxtLink class="link" to="/photo/collections">Collections</NuxtLink> -->
    </p>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  isSearching: {
    type: Boolean,
    default: false,
  },
  showTab: {
    type: Boolean,
    default: false,
  },
});
const tips = ref("Hello. Please click  Enter to search.");
const emit = defineEmits(["search", "reset", "update:modelValue", "tabChange"]);
const keyword = ref(props.modelValue);
const searching = ref(props.isSearching);
const searchInputRef = ref<HTMLInputElement | null | undefined>();
const tabs = [
  {
    name: "图片",
    value: "photos",
  },
  {
    name: "收藏",
    value: "collections",
  },
  {
    name: "用户",
    value: "users",
  },
];
const tabIndex = ref("photos");
const handleTabClick = (val: string) => {
  tabIndex.value = val;
  emit("tabChange", val);
};
const tabPosition = computed(() => {
  const index = tabs.findIndex((tab) => tab.value === tabIndex.value);
  return index * 60;
});
const handleFocus = () => {
  // @ts-ignore
  searchInputRef.value.focus();
};
const handleBlur = () => {
  // if (searching.value) searching.value = true
  // searching.value = false
};
const onPressEnter = () => {
  emit("search", keyword.value);
  searching.value = true;
};
const handleInput = () => {
  emit("update:modelValue", keyword.value);
};
const handleReset = () => {
  keyword.value = "";
  searching.value = false;
  searchInputRef.value?.blur();
  emit("reset");
};
</script>
<style lang="less" scoped>
.search-bar-aligner {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
        rgba(0, 0, 0, 0.12) 0px 1px 4px;
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
          content: "";
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
.search-tips {
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  pointer-events: all;
  .link {
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
    cursor: pointer;
  }
}
.search-tab {
  position: relative;
  display: flex;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  pointer-events: all;
  .tab-item {
    position: relative;
    z-index: 1;
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 250ms;
    cursor: pointer;
    font-size: 14px;
    &.active {
      color: rgba(255, 255, 255, 1);
    }
  }
  .tab-slider {
    position: absolute;
    z-index: -1;
    width: 60px;
    height: 30px;
    border-radius: 30px;
    transform: all 250ms;
    background: linear-gradient(45deg, #f1b211 0%, #ff362b 100%);
    transition: all 250ms;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#8200f4',GradientType=1 );
  }
}
</style>
