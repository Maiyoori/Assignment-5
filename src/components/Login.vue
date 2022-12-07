<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);
const login = () => {
  if (username.value === "TMDB" && password.value === "Movies") {
    router.push("/account");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="home-container">
    <h1 class="header">Movie Net</h1>
    <p class="login">Login</p>
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
    <div v-if="error" class="error">
      <p>Incorrect username or password.</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5cm;
  font-weight: 100;
  padding: 10px;
  margin-top: -21px;
  margin-left: -1270.5px;
  padding-left: 10px;
  z-index: 2;
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 4rem;
}
form {
  display: flex;
  flex-direction: column;
}
form input {
  padding: 0.25rem;
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
  font-weight: 100;
}
.error {
  font-size: 35%;
  color: rgb(0, 0, 0);
  border: 2px solid rgb(255, 0, 0);
  background-color: rgb(275, 225, 233);
  padding-left: 3px;
  padding-right: 3px;
  margin-top: 5px;
  opacity: 100%;
}

.login {
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 5cm;
  font-weight: 100;
}
</style>
