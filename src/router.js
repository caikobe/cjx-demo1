import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.use(Router)
Vue.use(VueCookies)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Register',
      name: 'Register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/table1',
      name: 'table1',
      component: () => import(/* webpackChunkName: "about" */ './views/table1.vue'),
      meta: {
        requireAuth: true
      }
    },
  ]
})

// // 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (store.state.isLogin) {// 判断是否登录
      next()
    } else {
      next({
        path: '/Register',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
