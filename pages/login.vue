<template>
  <div class="login">
    <div class="main-login">
      <div class="back-btn">
        <nuxt-link to="/"><fa :icon="['fas', 'arrow-left']" /><span class="back-text">Inicio</span></nuxt-link>
      </div>
      <div class="main-text">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur.</h1>
      </div>
    </div>
    <div class="login-form">
      <div class="login-container">
        <h1 class="text-center">Iniciar sesión</h1>
        <div class="login-parthners">
          <div class="parthners">
            <div class="google parthner-icon" @click.prevent="googleSign">
              <fa :icon="['fab', 'google']" />
            </div>
            <!-- <div class="facebook parthner-icon" @click.prevent="facebookSign">
              <fa :icon="['fab', 'facebook-f']" />
            </div> -->
          </div>
        </div>
        <form @submit.prevent="pressed" >
          <div class="text-center text-email">Ó usa tu cuenta de correo electrónico:</div>
          <div class="email-form">
            <input type="email" v-model="email" placeholder="email@email...">
          </div>
          <div class="password-form">
            <input type="password" v-model="password" placeholder="Passwords">
          </div>
          <div class="submit-btn">
            <button type="submit">Iniciar Sesión</button>
          </div>
        </form>
        <div class="register"><nuxt-link to="register">Crear una cuenta</nuxt-link></div>
        <div class="error" v-if="error">{{error.message}}</div>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  layout: 'white',
  data() {
    return {
      email: "",
      password: "",
      error: ""
    }
  },
  methods: {
    googleSign() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.push("/");
      }).catch(error => (this.error = error))
    },
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.$router.push('/');
      })
      .catch(error => (this.error = error))
    }
  }
}
</script>

<style scoped>

/** Login Page */
.login {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  overflow: hidden;
}
/** Main Seccion */
.main-login {
  align-items: center;
  background: #112d4e;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
}
.main-login::after {
  background: url("../assets/img/wave.png");
  /* background-position: center center; */
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0;
  width: 120px;
}
.main-login .back-btn a {
  border: 1px solid transparent;
  color: #dfe2e2;
  left: 5%;
  padding: 15px;
  position: absolute;
  text-decoration: none;
  top: 5%;
}
.main-login .back-btn a:hover {
  border: 1px solid #dfe2e2;
  border-radius: 3em;
  text-decoration: none;
}
.main-login .back-btn .back-text {
  margin-left: 5px;
  opacity: 0;
  transition: all .3s;
}
.main-login .back-btn:hover .back-text {
  opacity: 1;
}
.main-text {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 50%;
}
/** Login Form */
.login-form {
  align-items: center;
  display: flex;
  justify-content: center;
}
.login-container {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .4);
  padding: 50px;
}
.login-container .text-email {
  color: #393e46;
}
.login-container input {
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  font-size: 18px;
  height: 45px;
  margin: 15px 0;
  text-indent: 15px;
  width: 300px;
}
.submit-btn {
  display: flex;
  justify-content: center;
}
.submit-btn button {
  align-items: center;
  background: #112d4e;
  border: 0;
  border-radius: 10px;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 45px;
  justify-content: center;
  transition: all .3s;
  width: 125px;
}
.submit-btn button:hover {
  background: #3f72af;
}
.parthners {
  display: flex;
  justify-content: space-evenly;
  margin: 15px auto;
  width: 50%;
}
.parthner-icon {
  align-items: center;
  border: 1px solid #dfe2e2;
  border-radius: 3em;
  display: flex;
  height: 50px;
  justify-content: center;
  transition: all .3s;
  width: 50px;
}
.google:hover {
  background: #dd4b39;
}
.facebook:hover {
  background: #3b5998;
}
.google:hover svg, .facebook:hover svg {
  color: #fff;
}
.register a {
  color: #393e46;
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
}
.register a:hover {
  text-decoration: underline;
}
</style>