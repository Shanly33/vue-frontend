export const commonRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { label: '登录' },
    hidden: true, //在菜单中是否隐藏
    name: 'Login',
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    meta: { label: '', icon: 'Avatar' },
    redirect: '/home',
    name: 'Layout',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: { label: '首页', icon: 'HomeFilled' },
        name: 'Home',
      },
    ],
  },
  {
    //数据大屏
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    meta: { label: '数据大屏', icon: 'DataLine' },
    name: 'Screen',
  },
  {
    //权限管理
    path: '/auth',
    component: () => import('@/layout/index.vue'),
    meta: { label: '权限管理', icon: 'Lock' },
    name: 'Auth',
    redirect: '/auth/user',
    children: [
      {
        //用户管理
        path: '/auth/user',
        component: () => import('@/views/auth/user/index.vue'),
        meta: { label: '用户管理', icon: 'User' },
        name: 'user',
      },
      {
        //角色管理
        path: '/auth/role',
        component: () => import('@/views/auth/role/index.vue'),
        meta: { label: '角色管理', icon: 'UserFilled' },
        name: 'Role',
      },
      {
        //菜单管理
        path: '/auth/permission',
        component: () => import('@/views/auth/permission/index.vue'),
        meta: { label: '菜单管理', icon: 'List' },
        name: 'Permission',
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    meta: { label: '商品管理', icon: 'Goods' },
    name: 'Product',
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        meta: { label: '品牌管理', icon: 'Notification' },
        name: 'Trademark',
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        meta: { label: '属性管理', icon: 'Tickets' },
        name: 'Attr',
      },
      // {
      //   path: '/product/spu',
      //   component: () => import('@/views/product/spu/index.vue'),
      //   name: 'Spu',
      //   meta.label: 'SPU管理',
      //   icon: 'Orange',
      // },
      // {
      //   path: '/product/sku',
      //   component: () => import('@/views/product/sku/index.vue'),
      //   name: 'Sku',
      //   meta.label: 'SKU管理',
      //   icon: 'IceDrink',
      // },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: { label: '404' },
    hidden: true,
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    hidden: true,
  },
]
