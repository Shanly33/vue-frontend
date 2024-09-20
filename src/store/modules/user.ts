import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { commonRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
  //存储数据
  state: (): UserState => {
    return {
      token: localStorage.getItem('TOKEN'), //用户唯一标识token
      menuRoutes: commonRoute,
      username: '',
      avatar: '',
    }
  },
  //异步|逻辑的地方
  actions: {
    async userLogin(data: loginForm) {
      const res: loginResponseData = await reqLogin(data)
      if (res.code === 200) {
        //pinia存储token
        this.token = res.data.token as string
        //本地存储持久化存储
        localStorage.setItem('TOKEN', res.data.token as string)
        //保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
    async userInfo() {
      const res = await reqUserInfo()
      if (res.code == 200) {
        this.username = res.data.checkUser.username
        this.avatar = res.data.checkUser.avatar
      } else {
      }
    },
  },
  getters: {},
})

export default useUserStore
