<template>
  <div class="page323">
    <h1>5810110323</h1>  
    <p>Mr.Sirasit Lertprakobkit</p>  

    <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false" :autoplay="true" :autoplayTimeout=2000>
    <slide>
      <img :src="require('@/assets/323img/img1.jpg')" width="800" height="600">
    </slide>
    <slide>
      <img :src="require('@/assets/323img/img2.jpg')" width="800" height="600">
    </slide>
    <slide>
      <img :src="require('@/assets/323img/img3.jpg')" width="800" height="600">
    </slide>    
  </carousel>


    <ul>      
      <br><li><router-link to="/page131">page-5810110131</router-link></li><br> 
      <br><li><router-link to="/hello">Home</router-link></li> <br>      
    </ul>      
    <br><button v-on:click="logout">Logout</button>  
  </div>
</template>

<script>
  import firebase from 'firebase';
export default {  
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