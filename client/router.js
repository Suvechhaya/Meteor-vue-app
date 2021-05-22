import Vue from 'vue'

import VueRouter from 'vue-router'

import Home from '../imports/ui/components/Home'
import Login from '../imports/ui/components/Login.vue'
import Signup from '../imports/ui/components/Signup'
import About from '../imports/ui/components/About'
import UserAccount from '../imports/ui/components/UserAccount'
import ChangePassword from '../imports/ui/components/ChangePassword'

Vue.use(VueRouter); const routes = [

    { path: '/', name: 'home', component: Home },

    { path: '/login', name: 'login', component: Login },

    { path: '/signup', name: 'signup', component: Signup },

    { path: '/about', name: 'about', component: About },

    { path: '/userAccount', name: 'userAccount', component: UserAccount },

    { path: '/changePassword', name: 'changePassword', component: ChangePassword },
]

const router = new VueRouter({
    mode: 'history',

    routes,

})

export default router