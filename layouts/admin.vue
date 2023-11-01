<template>
  <a-layout class="admin-root">
    <a-layout-header class="layout-header">
      <navbar></navbar>
    </a-layout-header>
    <a-layout class="layout-containter">
      <a-layout-sider
        class="layout-sider"
        hide-trigger
        collapsible
        :collapsed="collapsed"
      >
        <a-menu
          class="menu"
          mode="inline"
          :inlineCollapsed="collapsed"
          :defaultOpenKeys="defaultOpenKeys"
          :defaultSelectedKeys="defaultSelectedKeys"
          @menuItemClick="onClickMenuItem"
        >
          <a-menu-item :key="item.key" v-for="item in menuList">
            <Icon style="margin-right: 4px" size="18" :name="item.icon" />
            <span>{{ item.label }}</span>
          </a-menu-item>
        </a-menu>
        <!-- <div class="menu-settings">
          <a-button shape="round" @click="onCollapse">
            <icon
              :name="
                collapsed ? 'icon-park:arrow-right' : 'icon-park:arrow-left'
              "
            ></icon>
          </a-button>
        </div> -->
      </a-layout-sider>
      <a-layout-content class="layout-content">
        <div class="layout-main">
          <slot></slot>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { Message } from "@arco-design/web-vue";
const Router = useRouter();
const collapsed = ref(false);
const onCollapse = () => {
  collapsed.value = !collapsed.value;
};
const defaultOpenKeys = ref(["match"]);
const defaultSelectedKeys = ref(["match"]);
const menuList = [
  {
    label: "赛事中心",
    key: "match",
    icon: "icon-park:badminton",
    path: "/admin/match",
  },
  {
    label: "球员管理",
    key: "player",
    icon: "icon-park:peoples-two",
    path: "/admin/player",
  },
  {
    label: "新闻管理",
    key: "news",
    icon: "icon-park:newspaper-folding",
    path: "/admin/news",
  },
  {
    label: "赛事报名",
    key: "events",
    icon: "icon-park:rectangular-circular-separation",
    path: "/admin/events",
  },
];
function onClickMenuItem(key: string) {
  defaultSelectedKeys.value = [key];
  Router.push({ path: menuList.find((item) => item.key === key)?.path });
}
</script>

<style lang="less" scoped>
@nav-size-height: 60px;
@layout-max-width: 1100px;

.admin-root {
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f9f9f9;

  .layout-header {
    width: 100%;
    height: @nav-size-height;
  }
  .layout-sider {
    .menu {
      position: relative;
      background-color: var(--color-bg-2);
      flex: 1;
      z-index: 1;
    }
    .menu-settings {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      margin-top: auto;
    }
  }
  .layout-containter {
    height: calc(100% - @nav-size-height);
    .layout-sider {
      width: 200px;
      height: 100%;
      background-color: var(--color-bg-2);
      .menu {
        position: relative;
        background-color: var(--color-bg-2);
        flex: 1;
        z-index: 1;
      }
      .menu-settings {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        margin-top: auto;
      }
    }
    .layout-content {
      height: 100%;
      overflow: auto;
      background-color: var(--color-bg-1);
    }
  }
  .layout-main {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
  }
}
</style>
