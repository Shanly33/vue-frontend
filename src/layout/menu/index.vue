<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <el-menu-item
      v-if="!item.children && !item.hidden"
      :index="item.path"
      @click="clickMenu"
    >
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
    </el-menu-item>
    <!-- 只有一个子路由 -->
    <el-menu-item
      v-if="
        item.children && item.children.length == 1 && !item.children[0].hidden
      "
      :index="item.children[0].path"
      @click="clickMenu"
    >
      <template #title>
        <el-icon>
          <component :is="item.children[0].icon"></component>
        </el-icon>
        <span>{{ item.children[0].label }}</span>
      </template>
    </el-menu-item>

    <!-- 有多个子路由 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1 && !item.hidden"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

defineProps(['menuList'])

const clickMenu = (item: any) => {
  router.push(item.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style scoped lang="scss"></style>
