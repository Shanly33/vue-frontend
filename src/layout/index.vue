<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          class="custom-menu"
          background-color="#001e3a"
          text-color="#fff"
          :default-active="route.path"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_nav">456</div>
    <!-- 内容区 -->
    <div class="layout_main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
const userStore = useUserStore()
const route = useRoute()
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
    //路由跳转的过渡动画
    .fade-enter-from {
      opacity: 0;
      transform: scale(0);
    }
    .fade-enter-active {
      transition: all 0.3s;
    }
    .fade-enter-to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
