<template>
  <div class="name">
    <!-- <h1 class="text-color">Hello Vue</h1>
    <el-button type="primary">111</el-button>
    <el-icon :size="20" color="#409efc">
      <Edit />
    </el-icon>
    <el-pagination
      :page-size="100"
      :size="20"
      :disabled="false"
      layout="total, prev, pager, next"
      :total="1000"
    /> -->
    111
    <!-- <svg style="height: 16px; width: 16px">
      <use xlink:href="#icon-test" fill="red"></use>
    </svg> -->
    <svg-icon name="copyright"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { reqLogin } from './api/user'
import { onMounted } from 'vue'

onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111',
  })
})
</script>

<style lang="scss">
.name {
  color: $red;
}
</style>
