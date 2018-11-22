<template>
  <div class="login">
  <h3>Sign In</h3>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button v-on:click="signIn">Login</button>
  <p><router-link to="/sign-up">+ Create new account</router-link></p>
</div>


</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'login' ,
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function(){
          firebase.auth().signInWithEmailAndPassword(this.email,this. password).then(
            (user) => {
              this.$router.replace('hello')
          },
            (err) => {
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
