import Vue from 'vue'

import VueRouter from 'vue-router'

import Home from '../imports/ui/components/Home'
import Login from '../imports/ui/components/Login.vue'
import Signup from '../imports/ui/components/Signup'
import About from '../imports/ui/components/About'

Vue.use(VueRouter); const routes = [

    { path: '/', name: 'home', component: Home },

    { path: '/login', name: 'login', component: Login },

    { path: '/signup', name: 'signup', component: Signup },

    { path: '/about', name: 'about', component: About },

]

const router = new VueRouter({
    mode: 'history',

    routes,

})

export default router