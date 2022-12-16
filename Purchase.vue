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
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="purchase-container">
    <img v-for="movie in data" @click="openModal(movie.id)" class="poster" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
  </div>

</template>

<style>
.purchase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
  padding: 12px;
}

.poster {
  height: 500px;
}
</style>
