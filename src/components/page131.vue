<template>

  <div class="page131" >
  <article v-for="(location, idx) in locations" :key="idx">
   <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="true" :autoplay="true" :autoplayTimeout=2000>
      <slide>
            <img :src="location.image">
      </slide>
      <slide>
            <img :src="location.image2">
      </slide>
      <slide>
            <img :src="location.image3">
      </slide>
    </carousel>
  </article>
  

    <ul>      
      <br><li><router-link to="/page323">เรื่องถัดไป</router-link></li> <br>
      <br><li><router-link to="/hello">Home</router-link></li><br>       
    </ul>      
    <br><button v-on:click="logout">Logout</button>  
  </div>

</template>

<script>
  import firebase from 'firebase'
import { db } from '../main'
import { compare } from 'semver';


  export default {
  name: 'HelloWorld',
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
  mounted() {
  },
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