<template>
  <a class="me-user" :href="user.links.html" target="_blank">
    <a-avatar class="a-avatar" :size="24">
      <img :src="user.profile_image?.small" />
    </a-avatar>
    <div class="user-name" v-if="!avatarOnly">{{ user.first_name }}</div>
  </a>
</template>
<script lang="ts" setup>
interface user {
  id: string;
  first_name: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  };
}
const props = defineProps({
  user: {
    type: Object as PropType<user>,
    default: {},
  },
  avatarOnly: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="less" scoped>
.me-user {
  display: flex;
  align-items: center;

  .a-avatar {
    margin-right: 6px;
  }

  .user-name {
    font-size: 15px;
  }
}
</style>
