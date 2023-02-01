import { createRouter, createWebHistory } from "vue-router";

import Layout from '@/pages/Layout/index'
import Home from "@/pages/Home/index"
import Login from '@/pages/Login/index'
import Forbidden from '@/pages/errorPage/403'
import NotFound from '@/pages/errorPage/404'


const routes = [
  {
    path: '/',
    component: Layout,
    meta: {
      requiresAuth: true,
      name: "首页"
    },
    name: 'Home',
    children: [
      {
        name: 'Home',
        path: '/',
        component: Home,
      },
    ]
  },
  {
    path: '/Login',
    component: Login,
    name: 'Login'
  },
  {
    // path: 'catch(*)',
    path: "/:catchAll(.*)",
    component: NotFound,
    name: 'NotFound'
  },
  {
    path: "/403",
    component: Forbidden
  },
]

// export const DynamicRoutes = [
//   {
//     path: '',
//     component: Home,
//     meta: {
//       requiresAuth: true,
//       name: "首页"
//     },
//     name: 'Home',
//     redirect: '/',
//     children: []
//   }
// ]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})


export default router
