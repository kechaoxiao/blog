import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/index'
import Welcome from '@/components/Welcome.vue'
import Categories from '@/views/categories/index.vue'
import Goods from '@/views/goods/index.vue'
import Login from '@/views/login/index.vue'
import Orders from '@/views/orders/index.vue'
import Params from '@/views/params/index.vue'
import Reports from '@/views/reports/index.vue'
import Rights from '@/views/rights/index.vue'
import Roles from '@/views/roles/index.vue'
import User from '@/views/user/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: User
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/rights',
        component: Rights
      }
      , {
        path: '/goods',
        component: Goods
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/categories',
        component: Categories
      },
      {
        path: '/orders',
        component: Orders
      }, {
        path: '/reports',
        component: Reports
      }
    ]
  }
]

const router = new VueRouter({
  routes
})


//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login')
    return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login')
  next()
})

export default router
