import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import Bulma from 'bulma/css/bulma.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import VueMaterial from 'vue-material'
import 'fontawesome'
import Modal from './Modal.vue'
import SweetAlert from 'sweetalert2'
// import '.css/materialize.min.css'


import Home from './Home.vue'
import Employer_Signup from './employer/EmployerSignUp.vue'
import Student_Signup from './student/Profile.vue'
import School_Signup from './school/Signup.vue'

// import Vue-Material from 'vue-material/dist/vue-material.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(SweetAlert)
// Vue.use(Materialize)

Vue.component('icon', Icon)
Vue.component('modal', Modal)

const routes = [
  { path: '/', component: Home },
  { path: '/employer/signup', component: Employer_Signup },
  { path: '/student/profile', component: Student_Signup },
  { path: '/school/signup', component: School_Signup }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
