<template>
  <div class="layout-root">
    <me-header></me-header>
    <div class="layout-main">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.layout-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #1f2029;
  transition: all 300ms linear;
  color: #c4c3ca;
  .layout-main {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    flex: 1;
    z-index: 1;
    min-height: calc(100vh - 60px);
    overflow: auto;
    background-color: #1f2029;
    transition: all 300ms linear;
    color: #c4c3ca;
  }
}
</style>
