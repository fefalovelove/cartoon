<template>
  <div class="hello">
    <h1>{{ msg }}</h1>   

    <article v-for="(location, idx) in locations" :key="idx">
    <img :src="location.image7">
     </article> 
    <ul>      
      <br><li><router-link to="/page131">นิทรรศการภาพ 3 มิติ</router-link></li><br> 
      </ul> 
      <article v-for="(location, idx) in locations" :key="idx">
    <img :src="location.image8">
     </article>
      <ul>  
      <br><li><router-link to="/page323">เป็นคำตอบสุดท้าย!</router-link></li><br>    
       </ul>         
   
    <br><button v-on:click="logout">Logout</button>        
  </div>
</template>

<script>
  import firebase from 'firebase'
import { db } from '../main'
import { compare } from 'semver';


export default {
  name: 'hello',
  data () {
    return {
      locations: []
    }
  },
  firestore () {
    return {
      locations: db.collection('locations')
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 25px;
}
a {
  color: #42b983;
}
button {
  padding: 10px 20px;
  background: #42b983;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
}
</style>
