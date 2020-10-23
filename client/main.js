import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import './main.html';
import AppComponent from '/imports/App.vue';

Meteor.startup(() => {
  new Vue({
    el: '#CovidInfoApp',
    render: (h) => h(AppComponent),
  });
});
