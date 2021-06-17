import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../src/components/NotFound'

Vue.use(VueRouter)
const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ './../src/components/Register'),
    meta: {
      title: 'Create Account'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ './../src/components/Login'),
    meta: {
      title: 'Login',
      storeModuleName: 'auth'
    }
  },
  {
    name: 'Dashboard.AppsIndex',
    path: '/dashboard/apps',
    component: () => import(/* webpackChunkName: "AppIndex" */ './../src/components/AppIndex'),
    meta: {
      title: 'Your Apps',
      storeModuleName: 'apps'
    }
  },
  {
    path: '/password-reset',
    name: 'PasswordReset',
    component: () => import(/* webpackChunkName: "PasswordReset" */ './../src/components/PasswordReset'),
    meta: {
      title: 'Reset Your Password'
    }
  }, {
    path: '/password-reset-done',
    name: 'PasswordResetMessage',
    component: () => import(/* webpackChunkName: "PasswordResetMessage" */ './../src/components/PasswordResetMessage'),
    meta: {
      title: 'Check your email'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Page Not Found'
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
const isAuthenticated = !!localStorage.getItem('accessToken')
// https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
  console.log(to.name, from.name)
  const isLoginPage = router.currentRoute.name
  if (to.path.includes('dashboard') && !isAuthenticated && !isLoginPage) {
    try {
      next({ name: 'Login' })
      return
    } catch (error) {
      console.log(error)
      next({ name: 'Dashboard.AppsIndex' })
    }
  }
  next()
})
// Update page title: https://stackoverflow.com/questions/51639850/how-to-change-page-titles-when-using-vue-router
const DEFAULT_TITLE = 'Crowdbotics'
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
