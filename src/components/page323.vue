<template>
  <div class="page323">
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
</v-toolbar>
  <article v-for="(location, idx) in locations" :key="idx">
   <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="true" :autoplay="true" :autoplayTimeout=2000>
      <slide>
            <img :src="location.image4">
      </slide>
      <slide>
            <img :src="location.image5">
      </slide>
      <slide>
            <img :src="location.image6">
      </slide>
    </carousel>
  </article>

    <ul>      
      <br><li><router-link to="/page111">เรื่องถัดไป</router-link></li><br> 
      <br><li><router-link to="/hello">Home</router-link></li> <br>      
    </ul>      
    <br><button v-on:click="logout">Logout</button>  
  </div>
</template>

<script>
  import firebase from 'firebase'
import { db } from '../main'
import { compare } from 'semver';
export default {  
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

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size: 25px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-size: 25px;
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