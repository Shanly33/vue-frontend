export const commonRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    label: '登录',
    hidden: false, //在菜单中是否隐藏
    icon: 'Promotion',
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    label: 'layout',
    hidden: false,
    icon: 'Avatar',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        label: '首页',
        hidden: false,
        icon: 'HomeFilled',
      },
      {
        path: '/user',
        component: () => import('@/views/home/index.vue'),
        name: 'user',
        label: '用户管理',
        hidden: false,
        icon: 'Avatar',
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    label: '404',
    hidden: false,
    icon: 'Avatar',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    hidden: false,
    icon: 'Avatar',
  },
]
