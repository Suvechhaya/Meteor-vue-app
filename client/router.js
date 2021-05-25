import Vue from 'vue'

import VueRouter from 'vue-router'

import { Meteor } from "meteor/meteor";

import Home from '../imports/ui/components/Home'
import Login from '../imports/ui/components/Login.vue'
import Signup from '../imports/ui/components/Signup'
import About from '../imports/ui/components/About'
import UserAccount from '../imports/ui/components/UserAccount'
import ChangePassword from '../imports/ui/components/ChangePassword'
import ForgotPassword from '../imports/ui/components/ForgotPassword'
import ResetPassword from '../imports/ui/components/ResetPassword'


Vue.use(VueRouter); const routes = [

    { path: '/', name: 'home', component: Home, meta: { auth: false } },

    { path: '/login', name: 'login', component: Login, meta: { auth: false } },

    { path: '/signup', name: 'signup', component: Signup, meta: { auth: false } },

    { path: '/about', name: 'about', component: About, meta: { auth: false } },

    { path: '/userAccount', name: 'userAccount', component: UserAccount, meta: { auth: true } },

    { path: '/changePassword', name: 'changePassword', component: ChangePassword, meta: { auth: true } },

    { path: '/forgotPassword', name: 'forgotPassword', component: ForgotPassword, meta: { auth: false } },

    { path: '/resetPassword/:token', name: 'resetPassword', component: ResetPassword, meta: { auth: false } },
]

const router = new VueRouter({
    mode: 'history',

    routes,

})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !Meteor.user()) {
        next('/login')
    } else {
        next();
    }
});

export default router