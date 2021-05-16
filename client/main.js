import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

import router from './router'


Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  })
})
