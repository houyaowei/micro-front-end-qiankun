
const routes =  [
    {
      path: "/",
      name: "Header",
      component: () => import(/* webpackChunkName: "home" */ '@/components/HelloWorld.vue'),
      children: [
      ]
    },{
      path: "/sign",
      name: "Header",
      component: () => import(/* webpackChunkName: "home" */ '@/components/vue-sign.vue'),
      children: [
      ]
    }
]
export default routes;