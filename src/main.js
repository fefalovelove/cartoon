// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'firebase/firestore'
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);
Vue.use(VueFire)
Vue.config.productionTip = false

  let app;
 
  var config = {
    apiKey: "AIzaSyAdkR7O2rGBK7vuJnwguY2Kk_bAWwoM3h4",
    authDomain: "webapp-27fae.firebaseapp.com",
    databaseURL: "https://webapp-27fae.firebaseio.com",
    projectId: "webapp-27fae",
    storageBucket: "webapp-27fae.appspot.com",
    messagingSenderId: "803017458562"
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
 export const db = firebase.firestore()



