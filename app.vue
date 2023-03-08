<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage :keepalive="{ exclude: ['preview'] }" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
</script>
<style lang="less">
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html.dark {
  background: #222;
  color: white;
}

* {
  box-sizing: border-box;
}

&::-webkit-scrollbar-track {
  background-color: gray(30);
}

&::-webkit-scrollbar-thumb {
  background-color: rgba(white, 0.2);
  border-radius: 100px;
}

&::-webkit-scrollbar {
  height: 4px;
  width: 4px;
}

body {


  input,
  h1,
  h3,
  a,
  p,
  span {
    color: gray(90);
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
