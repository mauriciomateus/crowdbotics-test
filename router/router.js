import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../src/components/NotFound'
import Register from '../src/components/Register'
import PasswordReset from '../src/components/PasswordReset'
import Login from '../src/components/Login'
import AppIndex from '../src/components/AppIndex'

Vue.use(VueRouter)
const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Create Account'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    name: 'Dashboard.AppsIndex',
    path: '/dashboard/apps',
    component: AppIndex,
    meta: {
      title: 'Your Apps'
    }
  },
  {
    path: '/rest-auth/password-reset',
    name: 'PasswordReset',
    component: PasswordReset,
    meta: {
      title: 'Reset Your Password'
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
