<script setup></script>

<template>
  <h1 class="header">Movie Net</h1>
  <div class="icon-container">
    <img class="account-icon" src="../assets/account.png" alt="account" />
    <RouterLink to="/Login" custom v-slot="{ navigate }">
      <button class="button" @click="navigate" role="link">Login</button>
      <a class="login-text" @click="navigate" role="link">Login</a>
    </RouterLink>
  </div>
</template>

<style scoped>
.header {
  color: rgb(243, 181, 38);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5cm;
  font-weight: 100;
  padding: 10px;
  padding-left: 10px;
  margin-top: -10px;
}

button {
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0%;
  margin-top: -106px;
  margin-left: 1445px;
}

.login-text {
  position: absolute;
  color: white;
  font-size: 18px;
  margin-left: 1445px;
  margin-top: -66px;
}

.account-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: -106px;
  margin-left: 1445px;
}

.icon-container:hover .account-icon {
  border: solid rgb(243, 181, 38) 0.9px;
  margin-left: 1444px;
  margin-top: -107px;
}

a:hover {
  color: rgb(243, 181, 38);
}
</style>
