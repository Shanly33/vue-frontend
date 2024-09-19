<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup>
import setting from '@/setting'
const props = defineProps(['collapse'])
</script>

<style lang="scss" scoped>
.logo {
  height: $base-menu-logo-height;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 45px;
    height: 45px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
