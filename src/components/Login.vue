<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
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
    <div class="input">
      <RouterLink to="/Account" custom v-slot="{ navigate }">
        <form @submit.prevent="login()">
          <input type="text" v-model="username" placeholder="Username" />
          <input type="password" v-model="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </RouterLink>
    </div>
    <div v-if="error" class="error">
      <p>Incorrect username or password.</p>
    </div>
  </div>
</template>

<style scoped>
.login {
  position: absolute;
  background-color: rgb(35, 31, 32);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 5cm;
  font-weight: 100;
  color: rgb(243, 181, 38);
  border: solid white;
  padding-bottom: 20px;
  margin-top: 80px;
  z-index: 1;
}

.input {
  z-index: 1;
  margin-top: 280px;
}

.error {
  position: absolute;
  background-color: rgb(300, 215, 223);
  color: rgb(0, 0, 0);
  border: 2px solid rgb(255, 0, 0);
  font-size: 35%;
  padding-left: 3px;
  padding-right: 3px;
  margin-top: 490px;
  z-index: 1;
}

.header {
  position: absolute;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5cm;
  font-weight: 100;
  color: rgb(243, 181, 38);
  padding: 10px;
  padding-left: 10px;
  margin-top: -610px;
  margin-left: -1270.5px;
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
  border: solid white;
  z-index: 1;
}

form input {
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
  font-weight: 100;
  padding: 0.25rem;
}
</style>
