// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { MdButton, MdToolbar, MdField, MdRadio, MdSnackbar, MdProgress } from 'vue-material/dist/components'
import firebase from 'firebase/app'
//import 'firebase/firestore'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdField)
Vue.use(MdRadio)
Vue.use(MdSnackbar)
Vue.use(MdProgress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
