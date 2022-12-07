<script setup></script>

<template>
  <div class="header-container">
    <h1 class="header">Movie Net</h1>
    <div class="icon-container">
      <img class="account-icon" src="../assets/account.png" alt="account" />
      <RouterLink to="/Login" custom v-slot="{ navigate }">
        <button class="button" @click="navigate" role="link">Login</button>
        <a class="login-text" @click="navigate" role="link">Login</a>
      </RouterLink>
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
  margin-top: -10px;
  padding-left: 10px;
}

button {
  margin-top: -100px;
  position: absolute;
  width: 40px;
  height: 40px;
  margin-left: 1420px;
  opacity: 0%;
}

.login-text {
  color: white;
  font-size: 18px;
  margin-left: 1418.5px;
  margin-top: -66px;
  position: absolute;
}

.account-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: -106px;
  margin-left: 1418px;
}

.icon-container:hover .account-icon {
  border: solid rgb(213, 85, 249) 0.9px;
  margin-left: 1417.5px;
  margin-top: -107px;
}

a:hover {
  color: rgb(213, 85, 249);
}
</style>
