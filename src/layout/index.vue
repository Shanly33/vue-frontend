<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_nav">456</div>
    <!-- 内容区 -->
    <div class="layout_main">789</div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  position: relative;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
  }
  .layout_nav {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-nav-height;
    background-color: aqua;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-nav-height);
    background-color: aquamarine;
    left: $base-menu-width;
    top: $base-nav-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
