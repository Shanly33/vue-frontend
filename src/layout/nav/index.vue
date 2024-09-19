<template>
  <div class="nav">
    <div class="nav_left">
      <el-icon style="margin-right: 10px" @click="changeCollapse">
        <component
          :is="LayOutSettingStore.collapse ? 'Fold' : 'Expand'"
        ></component>
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav_right">
      <el-button size="default" icon="Refresh" circle></el-button>
      <el-button size="default" icon="FullScreen" circle></el-button>
      <el-button size="default" icon="Setting" circle></el-button>
      <img src="@/assets/images/avatar.png" alt="" />
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting'

const LayOutSettingStore = useLayOutSettingStore()
const changeCollapse = () => {
  LayOutSettingStore.collapse = !LayOutSettingStore.collapse
}
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    107deg,
    rgb(216 255 252 / 75%) 15%,
    rgb(147 203 255 / 66%) 100%
  );
  .nav_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .nav_right {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin: 0 10px;
    }
  }
}
</style>
