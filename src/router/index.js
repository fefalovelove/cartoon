import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import page131 from '@/components/page131'
import page323 from '@/components/page323'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [  

     {
      path: '*',
      redirect: '/login' 
    },

     {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/page131',
      name: 'page131',
      component: page131,
      meta: {
        requiresAuth: true
      } 
    },

    {
      path: '/page323',
      name: 'page323',
      component: page323,
      meta: {
        requiresAuth: true
      } 
    },

     {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },

     {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth =  to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')  
  else next()
})

export default router