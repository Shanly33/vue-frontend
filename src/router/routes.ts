export const commonRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    label: '登录',
    hidden: true, //在菜单中是否隐藏
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    label: 'layout',
    hidden: false,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        label: '首页',
        hidden: false,
      },
      {
        path: '/user',
        component: () => import('@/views/home/index.vue'),
        name: 'user',
        label: '用户管理',
        hidden: false,
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    label: '404',
    hidden: true,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    hidden: true,
  },
]
