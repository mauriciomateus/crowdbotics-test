import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../src/components/NotFound'
import Register from '../src/components/Register'
import PasswordReset from '../src/components/PasswordReset'
import Login from '../src/components/Login'

Vue.use(VueRouter)
const routes = [
  {
    path: '/rest-auth/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/rest-auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/rest-auth/password-reset',
    name: 'PasswordReset',
    component: PasswordReset
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
