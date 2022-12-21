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
        <div class="flex-container">
          <p class="modal-title">{{ data.title }}</p>
          <p class="release">{{ data.release_date }}</p>
          <p class="rating">{{ data.vote_average }} /10</p>
          <iframe class="iframe"
            :src="`https://www.youtube.com/embed/${data.videos.results.filter((video) => video.type === 'Trailer').at(0).key}`"></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000099;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
}

.modal-inner-container {
  padding-left: 13px;
}

.modal-outer-container .modal-inner-container {
  position: absolute;
  background-color: #1f2123;
  color: white;
  width: clamp(280px, 100%, 900px);
  height: 450px;
  z-index: 5;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  background: #1f2123;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 20px;
  right: 0px;
  padding: 1rem;
}

.poster {
  height: 410px;
  margin-top: 20px;
  border: none;
}

.modal-title {
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(243, 181, 38);
  font-size: 35px;
  margin-left: 290px;
}

.release {
  position: relative;
  color: rgb(243, 181, 38);
  font-size: 23px;
  margin-left: 290px;
  margin-top: -10px;
}

.rating {
  position: relative;
  color: rgb(243, 181, 38);
  font-size: 23px;
  margin-left: 290px;
  margin-top: -5px;
}

iframe {
  margin-left: 290px;
  height: 250px;
  width: 530px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  flex-flow: column;
  justify-content: space-between;
  margin-top: -450px;
  padding-bottom: 100px;
}
</style>