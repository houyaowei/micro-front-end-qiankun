
const routes =  [
    {
      path: "/",
      name: "Header",
      component: () => import(/* webpackChunkName: "home" */ '@/components/form.vue'),
      children: [
      ]
    }
]
export default routes;