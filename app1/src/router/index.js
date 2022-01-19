const router = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      meta: {
        index: 1
      }
    }
]

export default router