<template>
  <div class="sign-up">
  <img :src="require('../assets/logo.jpg')" />
  <br><br><h3>Let's create a new account !</h3>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button v-on:click="signUp">Sign Up</button>
  <p>or go back to <router-link to="/login">login</router-link>.</p>
</div>


</template>

<script>
  import firebase from 'firebase'


  export default {
    name: 'signUp' ,
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email,this. password).then(
          (user) => {
            this.$router.replace('hello')
          },
          function (err) {
            alert('Oops.' + err.message)
          }
         ); 
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 48px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
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
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;    
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }

  p a {
    color: #42b983;
    text-decoration: underline;
    cusor: pointer;
  }

  

</style>
