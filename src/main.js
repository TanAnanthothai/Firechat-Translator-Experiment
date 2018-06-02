import Vue from 'vue'
import App from './App.vue'
import store from './store'
require('./assets/css/chat.css')

// import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300'
// require('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css')
// require('//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js')
// require('//code.jquery.com/jquery-1.11.1.min.js')

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


