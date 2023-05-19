<template>
  <div class="logo-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 64">
      <!-- 这里放置转换后的 SVG 线条图形 -->
      <!-- 可以使用在线 SVG 转线条工具将 "YLATER" 转换成线条形式的 SVG 图形 -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 64">
        <path fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          d="M14 50l22-46h14l22 46m-39-44h22v44h-22zm46 0h22v44h-22z" />
        <path fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          d="M86 20h20v40h-20zm42-20h22v44h-22z" />
        <path fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          d="M150 20h22v44h-22zm42 0h14l22 22-22 22h-14zm0 0h-14l-22 22 22 22h14z" />
      </svg>

    </svg>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
.logo-container {
  position: relative;
  width: 200px;
  height: 64px;
  cursor: pointer;
}

.fireworks {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>
