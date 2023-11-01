<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img alt="logo" style="width: 45px" src="@/assets/logo.svg" />
        <a-typography-title :style="{ margin: 0, fontSize: '18px' }" :heading="5">
          YLater
        </a-typography-title>
      </a-space>
    </div>
    <div class="center-side">
      <!-- <Menu v-if="topMenu" /> -->
    </div>
    <ul class="right-side">
      <li>
        <a-tooltip :content="$t('settings.search')">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.language')">
          <a-button class="nav-btn" type="outline" :shape="'circle'" @click="setDropDownVisible">
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </a-tooltip>
        <a-dropdown trigger="click" @select="changeLocale as any">
          <div ref="triggerBtn" class="trigger-btn"></div>
          <template #content>
            <a-doption v-for="item in locales" :key="item.value" :value="item.value">
              <template #icon>
                <icon-check v-show="item.value === currentLocale" />
              </template>
              {{ item.label }}
            </a-doption>
          </template>
        </a-dropdown>
      </li>
      <li>
        <a-tooltip :content="theme === 'light'
          ? $t('settings.navbar.theme.toDark')
          : $t('settings.navbar.theme.toLight')
          ">
          <a-button class="nav-btn" type="outline" :shape="'circle'" @click="handleToggleTheme">
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.navbar.alerts')">
          <div class="message-box-trigger">
            <a-badge :count="9" dot>
              <a-button class="nav-btn" type="outline" :shape="'circle'" @click="setPopoverVisible">
                <icon-notification />
              </a-button>
            </a-badge>
          </div>
        </a-tooltip>
        <a-popover trigger="click" :arrow-style="{ display: 'none' }" :content-style="{ padding: 0, minWidth: '400px' }"
          content-class="message-popover">
          <div ref="refBtn" class="ref-btn"></div>
          <template #content>
            <!-- <message-box /> -->
          </template>
        </a-popover>
      </li>
      <li>
        <a-tooltip :content="isFullscreen
          ? $t('settings.navbar.screen.toExit')
          : $t('settings.navbar.screen.toFull')
          ">
          <a-button class="nav-btn" type="outline" :shape="'circle'" @click="toggleFullScreen">
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.title')">
          <a-button class="nav-btn" type="outline" :shape="'circle'" @click="setVisible">
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-avatar :size="32" :style="{ marginRight: '8px', cursor: 'pointer' }">
          <img alt="avatar" src="@/assets/avatar.png" />
        </a-avatar>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Message } from "@arco-design/web-vue";
import { useDark, useToggle, useFullscreen } from "@vueuse/core";
const { locale } = useI18n();
const topMenu = ref(false);
//多语言
const locales = [
  { label: "中文", value: "zh-CN" },
  { label: "English", value: "en-US" },
];
const currentLocale = ref(locale.value);
const changeLocale = () => {
  locale.value = currentLocale.value;
  localStorage.setItem("locale", currentLocale.value);
  Message.success({
    content: $t("settings.language.success"),
  });
};
const setDropDownVisible = () => { };
//theme
const theme = ref("light");
function handleToggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme.value);
  document.body.setAttribute("data-theme", theme.value);
}
//全屏
const { isFullscreen, toggleFullScreen } = useFullscreen();

//设置
const setVisible = useToggle(false);
function setPopoverVisible() {
  topMenu.value = !topMenu.value;
}
//logout
const handleLogout = () => { };
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.center-side {
  flex: 1;
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;

  :deep(.locale-select) {
    border-radius: 20px;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }

  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
  }

  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }

  .trigger-btn {
    margin-left: 14px;
  }
}
</style>

<style lang="less">
.message-popover {
  .arco-popover-content {
    margin-top: 0;
  }
}
</style>
