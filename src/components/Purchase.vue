<script setup>
import axios from "axios";
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';
let data = (
  await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
    params: {
      api_key: "53df15a69c17485812f9134bcd4089b6",
    },
  })
).data.results;
const showModal = ref(false);
const selectedId = ref(0);
const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};
const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <h1 class="header">Movie Net</h1>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="purchase-container">
    <img v-for="movie in data" @click="openModal(movie.id)" class="poster"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
  </div>

</template>

<style>
.header {
  color: rgb(243, 181, 38);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5cm;
  font-weight: 100;
  padding: 10px;
  padding-left: 10px;
  margin-top: -18px;
}

.purchase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
  padding: 12px;
  margin-top: -55px;
}

.poster {
  height: 400px;
  border: solid rgb(243, 181, 38);
  margin-left: -3px;
}
</style>