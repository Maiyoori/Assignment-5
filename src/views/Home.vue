<script setup>
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
const router = useRouter();
</script>

<template>
  <img class="background" src="../assets/home-background.jpg" />
  <Header />
  <Hero />
</template>

<style>
.background {
  position: absolute;
  width: 1537px;
  height: 610px;
  margin-top: 86px;
  margin-left: -11px;
  z-index: -1;
  border: solid white ;
  opacity: 100%;
}

body {
  background-color: rgb(35, 31, 32);
}
</style>
