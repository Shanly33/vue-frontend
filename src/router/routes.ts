export const commonRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    label: '登录',
    hidden: true, //在菜单中是否隐藏
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'Layout',
    label: 'layout',
    icon: 'Avatar',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        label: '首页',
        icon: 'HomeFilled',
      },
    ],
  },
  {
    //数据大屏
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    label: '数据大屏',
    icon: 'DataLine',
  },
  {
    //权限管理
    path: '/auth',
    component: () => import('@/layout/index.vue'),
    name: 'Auth',
    label: '权限管理',
    icon: 'Lock',
    children: [
      {
        //用户管理
        path: '/auth/user',
        component: () => import('@/views/auth/user/index.vue'),
        name: 'user',
        label: '用户管理',
        icon: 'User',
      },
      {
        //角色管理
        path: '/auth/role',
        component: () => import('@/views/auth/role/index.vue'),
        name: 'Role',
        label: '角色管理',
        icon: 'UserFilled',
      },
      {
        //菜单管理
        path: '/auth/permission',
        component: () => import('@/views/auth/permission/index.vue'),
        name: 'Permission',
        label: '菜单管理',
        icon: 'List',
      },
    ],
  },
  {
    //主页
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    label: '商品管理',
    icon: 'Goods',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        label: '品牌管理',
        icon: 'Notification',
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        label: '属性管理',
        icon: 'Tickets',
      },
      // {
      //   path: '/product/spu',
      //   component: () => import('@/views/product/spu/index.vue'),
      //   name: 'Spu',
      //   label: 'SPU管理',
      //   icon: 'Orange',
      // },
      // {
      //   path: '/product/sku',
      //   component: () => import('@/views/product/sku/index.vue'),
      //   name: 'Sku',
      //   label: 'SKU管理',
      //   icon: 'IceDrink',
      // },
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
