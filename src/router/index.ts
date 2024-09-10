import { createRouter, createWebHashHistory } from 'vue-router'
import { commonRoute } from './routes'

let router = createRouter({
  //路由模式hash
  history: createWebHashHistory(),
  routes: commonRoute,
  //滚动
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
