<template>
  <div class="badminton">
    <div class="video-bg">
      <video width="320" height="240" autoplay loop muted>
        <source
          src="https://assets.codepen.io/3364143/7btrrd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="app">
      <div class="header">
        <me-logo></me-logo>
        <!-- <div class="header-menu"></div>
        <div class="search-bar">
          <input type="text" placeholder="Search" />
        </div> -->
        <div class="header-profile">
          <div class="notification">
            <span class="notification-number">3</span>
            <icon class="feather feather-bell" name="ep:bell-filled"></icon>
          </div>
          <icon name="ep:moon-night"></icon>
          <img
            class="profile-img"
            src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="wrapper">
        <div class="left-side">
          <div class="side-wrapper">
            <div class="side-title">Apps</div>
            <div class="side-menu">
              <a href="#">
                <icon size="16" name="ep:basketball"></icon>
                赛事中心
                <span class="notification-number updates">3</span>
              </a>
            </div>
          </div>
          <div class="side-wrapper">
            <div class="side-title">BWF</div>
            <div class="side-menu">
              <a href="#" v-for="item in navList" :key="item.path">
                <icon size="16" :name="item.icon"></icon>
                {{ item.name }}
              </a>
            </div>
          </div>
          <div class="side-wrapper">
            <div class="side-title">羽球社区</div>
            <div class="side-menu">
              <a href="#">
                <svg viewBox="0 0 332 332" fill="currentColor">
                  <path
                    d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z"
                  />
                </svg>
                羽球装备
              </a>
            </div>
          </div>
          <div class="side-wrapper">
            <div class="side-title">链接</div>
            <div class="side-menu">
              <a href="https://bwfworldtour.bwfbadminton.com/" target="_blank">
                国际羽联官网
              </a>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="content-wrapper">
            <!-- MATCH SCHEDULE -->
            <div class="tour-card">
              <div class="tour-logo">
                <img
                  src="https://bwfbadminton.com/wp-content/themes/fansite-2020/assets/images/tournament/suffix_300_white-01.svg"
                  alt=""
                />
              </div>
              <div class="tour-info">
                <div class="tour-title">HSBC BWF World Tour Finals 2020</div>
                <div class="tour-date">2021年1月27日 - 2021年1月31日</div>
                <div class="tour-location">泰国 曼谷</div>
              </div>
              <div class="tour-action">
                <button class="btn btn-primary">查看赛程</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay-app"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  key: "index",
  layout: "home",
});
const navList = [
  {
    name: "发现",
    icon: "ep:data-analysis",
    path: "/discover",
  },
  {
    name: "杯赛 & 赛事",
    icon: "ep:trophy-base",
    path: "/about",
  },
  {
    name: "运动员",
    icon: "ep:user",
    path: "/product",
  },
  {
    name: "排行  & 数据",
    icon: "ep:medal",
    path: "/contact",
  },
];
</script>
<style lang="less" scoped>
.badminton {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;
  overflow: hidden;
  background-color: #1f2029;
  transition: all 300ms linear;
  color: #c4c3ca;
  background-image: url(https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);
  background-size: cover;
  background-position: center;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  outline: none;
  box-sizing: border-box;
}

.tour-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  background-color: var(--theme-bg-color);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  transition: all 300ms linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  }
  .tour-logo {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .tour-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .tour-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .tour-date {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .tour-location {
      font-size: 14px;
    }
  }
  .tour-action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    button {
      padding: 10px 20px;
      border-radius: 5px;
      background-color: var(--theme-bg-color);
      color: var(--theme-color);
      border: none;
      cursor: pointer;
      transition: all 300ms linear;
      &:hover {
        background-color: var(--theme-bg-color);
        color: var(--theme-color);
      }
    }
  }
}
.badminton {
  --theme-bg-color: rgba(16 18 27 / 40%);
  --border-color: rgba(113 119 144 / 25%);
  --theme-color: #f9fafb;
  --inactive-color: rgb(113 119 144 / 78%);
  --body-font: "Poppins", sans-serif;
  --hover-menu-bg: rgba(12 15 25 / 30%);
  --content-title-color: #999ba5;
  --content-bg: rgb(146 151 179 / 13%);
  --button-inactive: rgb(249 250 251 / 55%);
  --dropdown-bg: #21242d;
  --dropdown-hover: rgb(42 46 60);
  --popup-bg: rgb(22 25 37);
  --search-bg: #14162b;
  --overlay-bg: rgba(36, 39, 59, 0.3);
  --scrollbar-bg: rgb(1 2 3 / 40%);
}

.light-mode {
  --theme-bg-color: rgb(255 255 255 / 31%);
  --theme-color: #3c3a3a;
  --inactive-color: #333333;
  --button-inactive: #3c3a3a;
  --search-bg: rgb(255 255 255 / 31%);
  --dropdown-bg: #f7f7f7;
  --overlay-bg: rgb(255 255 255 / 30%);
  --dropdown-hover: rgb(236 236 236);
  --border-color: rgb(255 255 255 / 35%);
  --popup-bg: rgb(255 255 255);
  --hover-menu-bg: rgba(255 255 255 / 35%);
  --scrollbar-bg: rgb(255 253 253 / 57%);
  --content-title-color: --theme-color;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.video-bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

img {
  max-width: 100%;
}

.dark-light {
  position: fixed;
  bottom: 50px;
  right: 30px;
  background-color: var(--dropdown-bg);
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  padding: 8px;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
  svg {
    width: 24px;
    flex-shrink: 0;
    fill: #ffce45;
    stroke: #ffce45;
    transition: 0.5s;
  }
}

.light-mode {
  .dark-light svg {
    fill: transparent;
    stroke: var(--theme-color);
  }
  .profile-img {
    border: 2px solid var(--theme-bg-color);
  }
  .content-section ul {
    background-color: var(--theme-bg-color);
  }
  .pop-up__title {
    border-color: var(--theme-color);
  }
  .dropdown.is-active ul {
    background-color: rgb(255 255 255 / 94%);
  }
}

body.light-mode:before,
body.light-mode .video-bg:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgb(255 255 255 / 45%) 100%
  );
  backdrop-filter: saturate(3);
}

.app {
  background-color: var(--theme-bg-color);
  // max-width: 1250px;
  max-height: 860px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
}

.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding: 0 30px;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
  &-menu {
    display: flex;
    align-items: center;
    a {
      padding: 20px 30px;
      text-decoration: none;
      color: var(--inactive-color);
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      @media screen and (max-width: 610px) {
        &:not(.main-header-link) {
          display: none;
        }
      }
      &.is-active,
      &:hover {
        color: var(--theme-color);
        border-bottom: 2px solid var(--theme-color);
      }
    }
  }
}

.notify {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    background-color: #3a6df0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    right: 20px;
    top: 16px;
  }
  @media screen and (max-width: 1055px) {
    display: none;
  }
}

.menu-circle {
  width: 15px;
  height: 15px;
  background-color: #f96057;
  border-radius: 50%;
  box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
  margin-right: 195px;
  flex-shrink: 0;
  @media screen and (max-width: 945px) {
    display: none;
  }
}

.search-bar {
  height: 40px;
  display: flex;
  width: 100%;
  max-width: 400px;
  padding-left: 16px;
  border-radius: 4px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: var(--search-bg);
    border-radius: 4px;
    font-family: var(--body-font);
    font-size: 15px;
    font-weight: 500;
    padding: 0 20px 0 40px;
    box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 16px 48%;
    color: var(--theme-color);
    &::placeholder {
      font-family: var(--body-font);
      color: var(--inactive-color);
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.header-profile {
  display: flex;
  align-items: center;
  padding: 0 16px 0 40px;
  margin-left: auto;
  flex-shrink: 0;
  svg {
    width: 22px;
    color: #f9fafb;
    flex-shrink: 0;
  }
}

.notification {
  position: relative;
  &-number {
    position: absolute;
    background-color: #3a6df0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    right: -6px;
    top: -6px;
  }
  & + svg {
    margin-left: 22px;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }
}

.profile-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--theme-color);
  margin-left: 22px;
}

.wide {
  .header-menu,
  .header-profile {
    display: none;
  }
  .search-bar {
    max-width: 600px;
    margin: auto;
    transition: 0.4s;
    box-shadow: 0 0 0 1px var(--border-color);
    padding-left: 0;
  }
  .menu-circle {
    margin-right: 0;
  }
}

.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.left-side {
  flex-basis: 240px;
  border-right: 1px solid var(--border-color);
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
  @media screen and (max-width: 945px) {
    display: none;
  }
}

.side-wrapper + .side-wrapper {
  margin-top: 20px;
}

.side-title {
  color: var(--inactive-color);
  margin-bottom: 14px;
}

.side-menu {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  a {
    text-decoration: none;
    color: var(--theme-color);
    display: flex;
    align-items: center;
    font-weight: 400;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    transition: 0.3s;
    &:hover {
      background-color: var(--hover-menu-bg);
    }
  }
  svg {
    width: 16px;
    margin-right: 8px;
  }
}

.updates {
  position: relative;
  top: 0;
  right: 0;
  margin-left: auto;
  width: 18px;
  height: 18px;
  font-size: 11px;
}

.main-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  height: 58px;
  flex-shrink: 0;
  .header-menu {
    margin-left: 150px;
    @media screen and (max-width: 1055px) {
      margin: auto;
    }
    a {
      padding: 20px 24px;
    }
  }
}

.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.menu-link-main {
  text-decoration: none;
  color: var(--theme-color);
  padding: 0 30px;
  @media screen and (max-width: 1055px) {
    display: none;
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 20px 40px;
  height: 100%;
  overflow: auto;
  background-color: var(--theme-bg-color);
  @media screen and (max-width: 510px) {
    padding: 20px;
  }
  &-header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
      linear-gradient(
        to right top,
        #cf4af3,
        #e73bd7,
        #f631bc,
        #fd31a2,
        #ff3a8b,
        #ff4b78,
        #ff5e68,
        #ff705c,
        #ff8c51,
        #ffaa49,
        #ffc848,
        #ffe652
      );
    border-radius: 14px;
    padding: 20px 40px;
    @media screen and (max-width: 415px) {
      padding: 20px;
    }
  }
  &.overlay {
    pointer-events: none;
    transition: 0.3s;
    background-color: var(--overlay-bg);
  }
}

.overlay-app {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: all;
  background-color: rgba(36, 39, 59, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  &.is-active {
    visibility: visible;
    opacity: 1;
  }
}

.img-content {
  font-weight: 500;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 0;
  svg {
    width: 28px;
    margin-right: 14px;
  }
}

.content-text {
  font-weight: 400;
  font-size: 14px;
  margin-top: 16px;
  line-height: 1.7em;
  color: #ebecec;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-wrapper-context {
  max-width: 350px;
}

.content-button {
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
}

.content-wrapper-img {
  width: 186px;
  object-fit: cover;
  margin-top: -25px;
  object-position: center;
  @media screen and (max-width: 570px) {
    width: 110px;
  }
}

.content-section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  &-title {
    color: var(--content-title-color);
    margin-bottom: 14px;
  }
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    background-color: var(--content-bg);
    padding-left: 0;
    margin: 0;
    border-radius: 14px;
    border: 1px solid var(--theme-bg-color);
    cursor: pointer;
    li {
      list-style: none;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      font-size: 16px;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      transition: 0.3s;
      &:hover {
        background-color: var(--theme-bg-color);
        &:first-child {
          border-radius: 13px 13px 0 0;
        }
        &:last-child {
          border-radius: 0 0 13px 13px;
        }
      }
      & + li {
        border-top: 1px solid var(--border-color);
      }
    }
    svg {
      width: 28px;
      border-radius: 6px;
      margin-right: 16px;
      flex-shrink: 0;
    }
  }
}

.products {
  display: flex;
  align-items: center;
  width: 150px;
  @media screen and (max-width: 480px) {
    width: 120px;
  }
}
.status {
  margin-left: auto;
  width: 140px;
  font-size: 15px;
  position: relative;
  @media screen and (max-width: 700px) {
    display: none;
  }
  &-circle {
    width: 6px;
    height: 6px;
    background-color: #396df0;
    position: absolute;
    border-radius: 50%;
    top: 4px;
    left: -20px;
    &.green {
      background-color: #3bf083;
    }
  }
  &-button {
    font-size: 15px;
    margin-top: 0;
    padding: 6px 24px;
    @media screen and (max-width: 390px) {
      padding: 6px 14px;
    }
    &.open {
      background: none;
      color: var(--button-inactive);
      border: 1px solid var(--button-inactive);
    }
    &:not(.open):hover {
      color: #fff;
      border-color: #fff;
    }
  }
}

.content-button:not(.open):hover {
  background: #1e59f1;
}

.menu {
  width: 5px;
  height: 5px;
  background-color: var(--button-inactive);
  border-radius: 50%;
  box-shadow: 7px 0 0 0 var(--button-inactive),
    14px 0 0 0 var(--button-inactive);
  margin: 0 12px;
}

@media screen and (max-width: 415px) {
  .adobe-product .menu {
    display: none;
  }
}

.dropdown {
  position: relative;
  height: 53px;
  width: 40px;
  top: -24px;
  display: flex;
  left: -5px;
  background: transparent;
  border: none;
  cursor: pointer;
  ul {
    position: absolute;
    background: var(--dropdown-bg);
    height: 110px;
    width: 120px;
    right: 0;
    top: 20px;
    pointer-events: none;
    opacity: 0;
    transform: translatey(10px);
    transition: all 0.4s ease;
    li a {
      text-decoration: none;
      color: var(--theme-color);
      font-size: 12px;
    }
  }
}

.dropdown.is-active {
  ul {
    opacity: 1;
    pointer-events: all;
    transform: translatey(25px);
    li:hover {
      background-color: var(--dropdown-hover);
    }
  }
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 187px;
  margin-left: auto;
  @media screen and (max-width: 480px) {
    width: auto;
  }
}

.pop-up {
  position: absolute;
  padding: 30px 40px;
  top: 50%;
  left: 50%;
  transform: (translate(-50%, -50%));
  overflow-y: auto;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  z-index: 10;
  background-color: var(--popup-bg);
  width: 500px;
  visibility: hidden;
  opacity: 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  white-space: normal;
  @media screen and (max-width: 570px) {
    width: 100%;
  }
  &.visible {
    visibility: visible;
    opacity: 1;
  }
  &__title {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__subtitle {
    white-space: normal;
    margin: 20px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8em;
    a {
      color: var(--theme-color);
    }
  }
}

.content-button-wrapper .content-button.status-button.open.close {
  width: auto;
}

.content-section .close {
  margin-right: 0;
  width: 24px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  & + .checkbox-wrapper {
    margin: 20px 0 40px;
  }
}

.checkbox {
  display: none;
}

.checkbox + label {
  display: flex;
  align-items: center;
  &:before {
    content: "";
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid var(--theme-color);
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0;
  }
}

.checkbox:checked + label:before {
  background-color: #3a6df0;
  border-color: #3a6df0;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e");
  background-position: 50%;
  background-size: 12px;
  background-repeat: no-repeat;
}

.content-button-wrapper {
  margin-top: auto;
  margin-left: auto;
  .open {
    margin-right: 8px;
  }
}

.apps-card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 20px);
}

.app-card {
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 20px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.02);
    background-color: var(--theme-bg-color);
  }
  svg {
    width: 28px;
    border-radius: 6px;
    margin-right: 12px;
    flex-shrink: 0;
  }
  & + .app-card {
    margin-left: 20px;
  }
  span {
    display: flex;
    align-items: center;
  }
  &__subtext {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6em;
    margin-top: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 20px;
  }
  &-buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-top: 16px;
  }
  @media screen and (max-width: 1110px) {
    width: calc(50% - 20px);
    &:last-child {
      margin-top: 20px;
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 565px) {
    width: calc(100% - 20px);
    margin-top: 20px;
    & + .app-card {
      margin-left: 0;
    }
  }
}

::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-bg);
  border-radius: 10px;
}
</style>
