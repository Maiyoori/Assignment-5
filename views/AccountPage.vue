<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

let data = (
  await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
    params: {
      api_key: "53df15a69c17485812f9134bcd4089b6",
    },
  })
).data.results;
</script>

<template>
  <div class="purchase-container">
    <img v-for="movie in data" @click="openModal(movie.id)" class="poster" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
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

.account-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vh;
}

.modal {
  position: absolute;
  margin-left: 500px;
  margin-top: -750px;
}
</style>
