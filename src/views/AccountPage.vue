<script setup>
import { useRouter } from "vue-router";
import MovieDisplay from "../components/MovieDisplay.vue";
const router = useRouter();
</script>
 
<template>
  <div class="account-container">
    <MovieDisplay />
  </div>
</template>
 
<style scoped>
.account-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vh;
}
</style>