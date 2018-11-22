// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from './App'
import router from './router'
import firebase from 'firebase'
//hkhka
Vue.use(VueCarousel);
Vue.config.productionTip = false

  let app;
 
  let config = {
    apiKey: "AIzaSyAYjopEVjp9cgiyzDpthlG_dHPWcqY9l04",
    authDomain: "vue-firebase-9f5ae.firebaseapp.com",
    databaseURL: "https://vue-firebase-9f5ae.firebaseio.com",
    projectId: "vue-firebase-9f5ae",
    storageBucket: "vue-firebase-9f5ae.appspot.com",
    messagingSenderId: "700006267695"
  };

  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user){
    if (!app) {
      app = new Vue({
        el: '#app',
        template: '<App/>',
        components: { App },
        router
      })
    }
 });


