<template>
  <div class="register">
    <div class="register-form">
      <div class="back-btn">
        <nuxt-link to="/"><fa :icon="['fas', 'arrow-left']" /><span class="back-text">Inicio</span></nuxt-link>
      </div>
      <div class="register-container">
        <h1 class="text-center">Crear cuenta</h1>
        <form @submit.prevent="pressed">
          <div class="text-center text-email">Usa tu correo electrónico para registrarte</div>
          <div class="email-form">
            <input type="email" v-model="email" placeholder="email@email...">
          </div>
          <div class="password-form">
            <input type="password" v-model="password" placeholder="Passwords">
          </div>
          <div class="submit-btn">
            <button type="submit">Registrar</button>
          </div>
        </form>
        <div class="login"><nuxt-link to="login">Ya tienes una cuenta?</nuxt-link></div>
      </div>
    </div>
    <div class="main-register">
      <div class="main-text">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, autem!</h1>
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
      pressed() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.$router.push("/")
        }).catch(error => (this.error = error ))
      }
    }
  }
</script>

<style scoped>
/** Register Page */
.register {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  overflow: hidden;
}
/** Register Form */
.register-form {
  align-items: center;
  display: flex;
  justify-content: center;
}
.register-form .back-btn a {
  border: 1px solid transparent;
  color: #112d4e;
  left: 5%;
  padding: 15px;
  position: absolute;
  text-decoration: none;
  top: 5%;
}
.register-form .back-btn a:hover {
  border: 1px solid #112d4e;
  border-radius: 3em;
  text-decoration: none;
}
.register-form .back-btn .back-text {
  margin-left: 5px;
  opacity: 0;
  transition: all .3s;
}
.register-form .back-btn:hover .back-text {
  opacity: 1;
}
.register-container {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .4);
  padding: 50px;
}
.register-container .text-email {
  color: #393e46;
  margin: 15px auto;
}
.register-container input {
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
.login a {
  color: #393e46;
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
}
.login a:hover {
  text-decoration: underline;
}
/** Main Section */
.main-register {
  align-items: center;
  background: #112d4e;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
}
.main-register::before {
  background: url("../assets/img/wave.png");
  /* background-position: center center; */
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  height: 100%;
  left: 0px;
  position: absolute;
  transform: rotate(180deg);
  top: 0;
  width: 120px;
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
</style>