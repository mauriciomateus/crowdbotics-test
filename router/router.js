import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../src/components/Register";
import NotFound from "../src/components/NotFound";

Vue.use(VueRouter)
const routes = [
    {
        path : '/register',
        name: 'Register',
        component : Register
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