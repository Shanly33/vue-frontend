//layout组件相关配置仓库
import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      collapse: false, //菜单展开还是收起
    }
  },
})

export default useLayOutSettingStore
