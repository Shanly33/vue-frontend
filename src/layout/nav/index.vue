<template>
  <div class="nav">
    <div class="nav_left">
      <el-icon style="margin-right: 10px" @click="changeCollapse">
        <component
          :is="LayOutSettingStore.collapse ? 'Fold' : 'Expand'"
        ></component>
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item, index) in route.matched"
          :key="index"
          v-show="item.meta.label"
          :to="item.path"
        >
          <p class="breadcrumb_item">
            <el-icon style="margin-right: 5px">
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.label }}</span>
          </p>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav_right">
      <el-button
        size="default"
        icon="Refresh"
        circle
        @click="updateRefresh"
      ></el-button>
      <el-button
        size="default"
        icon="FullScreen"
        circle
        @click="fullScreen"
      ></el-button>
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
import { useRoute } from 'vue-router'

const LayOutSettingStore = useLayOutSettingStore()
const route = useRoute()

const changeCollapse = () => {
  LayOutSettingStore.collapse = !LayOutSettingStore.collapse
}

const updateRefresh = () => {
  LayOutSettingStore.refresh = !LayOutSettingStore.refresh
}

const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式{全屏:true,非全屏:null}
  const full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
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
    .breadcrumb_item {
      display: flex;
      align-items: center;
    }
  }
  .nav_right {
    display: flex;
    align-items: center;
    margin-right: 20px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin: 0 10px;
    }
  }
}
</style>
