<template>
  <div class="home-layout">
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
.home-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #1f2029;
  transition: all 300ms linear;
  color: #c4c3ca;
}
</style>
