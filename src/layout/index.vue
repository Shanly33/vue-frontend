<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu class="custom-menu">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_nav">456</div>
    <!-- 内容区 -->
    <div class="layout_main">789</div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
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
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .custom-menu {
        --el-menu-bg-color: #001e3a;
        --el-menu-text-color: #fff;
      }
      .el-menu {
        border-right: none;
      }
    }
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
