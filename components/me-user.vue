<template>
  <a class='me-user' :href="user.links.html" target="_blank">
    <a-avatar :size="24">
      <img :src="user.profile_image?.small" />
    </a-avatar>
    <div class="user-name">{{ user.first_name }}</div>
  </a>
</template>
<script lang="ts" setup>
interface user {
  id: string
  first_name: string
  profile_image: {
    small: string
    medium: string
    large: string
  }
  links: {
    self: string
    html: string
    photos: string
    likes: string
    portfolio: string
    following: string
    followers: string
  }
}
const props = defineProps({
  user: {
    type: Object as PropType<user>,
    default: {}
  }
})
</script>	
<style lang="less" scoped>
.me-user {
  display: flex;
  align-items: center;

  .ant-avatar {
    margin-right: 10px;
  }

  .user-name {
    font-size: 14px;
  }
}
</style>	
