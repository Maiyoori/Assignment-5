<script setup>
import axios from "axios";
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
let data = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "53df15a69c17485812f9134bcd4089b6",
      append_to_response: "videos",
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <img class="poster" :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" />
        <div class="title-overflow">
        <p class="modal-title">{{ data.title }}</p>
      </div>
        <p class="info">{{ data.release_date }}</p>
        <iframe class="iframe" :src="`https://www.youtube.com/embed/${data.videos.results.filter((video) => video.type === 'Trailer').at(0).key
        }`"></iframe>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.poster {
  height: 350px;
  margin-top: 20px;
}

.title-overflow{
  text-overflow: ellipsis;
  overflow:hidden;
  margin-top: -400px;
  
}
.modal-title {
  font-size: 35px;
  color: beige;
  margin-left: 250px;

}

.info {
  font-size: 23px;
  position: absolute;
  margin-left: 250px;
  margin-top: -20px;
  color: beige;
}

iframe {
  margin-top: 18px;
  margin-left: 250px;
  height: 250px;
  width: 530px;
}

.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 9;
}

.modal-inner-container {
  padding-left: 13px;
  padding-right: 20px;
}

.modal-outer-container .modal-inner-container {
  background-color: #1f2123;
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: absolute;
  z-index: 5;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>