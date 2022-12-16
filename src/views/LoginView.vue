<script setup>
import Login from "../components/Login.vue";
</script>
 
<template>
  <img class="background" src="../assets/background.jpg" />
  <Login />
</template>

<style>

.background {
  position: absolute;
  width: 1257px;
  height: 775px;
  margin-top: 85px;
  margin-left: -8px;
  z-index: 0;
  border: solid white;
  opacity: 100%;
}

body {
  background-color: rgb(35, 31, 32);
}
</style>