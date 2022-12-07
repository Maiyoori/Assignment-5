<script setup>
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
const router = useRouter();
</script>

<template>
  <img class="background" src="../assets/home-background.jpg" />
  <Header />
  <Hero />
  <Footer />
</template>

<style>
.background {
  position: absolute;
  width: 1515px;
  height: 610px;
  margin-top: 86px;
  margin-left: -8px;
  z-index: 0;
  border: solid white ;
  opacity: 100%;
}

body {
  background-color: rgb(35, 31, 32);
}
</style>
