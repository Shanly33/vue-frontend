<template>
  <div class="login_box">
    <div class="login_form">
      <h1 class="title">后台管理系统</h1>
      <el-form class="form_style">
        <el-form-item>
          <el-input :prefix-icon="User" v-model="loginForm.username" />
        </el-form-item>
        <el-form-item>
          <el-input
            show-password
            :prefix-icon="Lock"
            v-model="loginForm.password"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            class="login_btn"
            @click="loginSubmit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()
const useStore = useUserStore()

const loginForm = reactive({ username: 'admin', password: '111111' })
const loading = ref(false)

const loginSubmit = async () => {
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    //跳转到首页
    router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style scoped lang="scss">
.login_box {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  .login_form {
    width: 450px;
    height: 300px;
    background: url('@/assets/images/login_form.png') no-repeat;
    margin: 0px 200px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .title {
      font-weight: bold;
      font-size: 25px;
      margin: 20px 0;
      color: #fff;
    }
    .form_style {
      width: 80%;
      margin-bottom: 45px;
      .login_btn {
        width: 100%;
      }
    }
  }
}
</style>
