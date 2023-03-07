<template>
  <div class="me-search">
    <IconCSS class="search-icon" name="ep:search"></IconCSS>
    <input class="me-search-input" />
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.me-search {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, .1);
  height: 24px;
  padding-left: 40px;

  .search-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: gray(30);
    font-size: 14px;
  }

  .me-search-input {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
    background-color: transparent;
    padding: 0 16px;
    font-size: 16px;
    color: gray(90);
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
    outline: none;
  }
}
</style>