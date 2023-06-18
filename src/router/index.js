import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpLogIn from '@/views/SignUpLogIn.vue'
import ProfilePage from '@/views/ProfilePage.vue'



Vue.use( VueRouter )

const routes = [
  {
    path: '/',
    component: SignUpLogIn,
  },
  {
    path: '/profile',
    component: ProfilePage,
  }
]

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
} )

export default router
