<script setup>
import { ref } from "vue";
import axios from "axios";;

const movie = ref("");
const response = ref(null);

const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};
 
const getMovies1 = async () => {
  movie.value = await
  getData(`https://api.themoviedb.org/3/movie/${movie_options.value}`, {
    params: {
      api_key: "53df15a69c17485812f9134bcd4089b6",
      append_to_response: "videos", 
    }
  });
 }

</script>
 
<template>
<body>

  <div class="select">
    <div class="select_text">
      <label for="movie_options">Choose a movie:</label>
    </div>
    <form class="movie_list">
      <select v-model="response" id="movie_options">
        <option value="24428" class="avengers">The Avengers</option>
        <option value="99861">Avengers: Age of Ultron</option>
        <option value="299536">Avengers: Infinity War</option>
        <option value="299534">Avengers: Endgame</option>
        <option value="1726">Iron Man</option>
        <option value="10138">Iron Man 2</option>
        <option value="68721">Iron Man 3</option>
        <option value="1771">Captain America: The First Avenger</option>
        <option value="100402">Captain America: The Winter Soldier</option>
        <option value="271110">Captain America: Civil War</option>
      </select>
    </form>
    <div class="button_align">
      <button @click="getMovies1">Click me</button>

    </div>
    <div v-if="movie" class="movie-container">
    <p>Title: {{ movie.data.title }}</p> 
    <p>Overview: {{ movie.data.overview }}</p>
    <p>Release Date: {{ movie.data.release_date }}</p>
    <p>Genres: Action, Adventure, Science Fiction</p>
    <p>Language: English</p>
    <p>Vote Average: {{ movie.data.vote_average }}/10</p>
    <p>Vote Count: {{ movie.data.vote_count }}</p>
    <p>Popularity: {{ movie.data.popularity }}</p>
    <p>Trailer:</p>
    <img class="poster" :src="`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`" alt="">
    <iframe class="iframe" :src="`https://www.youtube.com/embed/${movie.data.videos.results.filter((video) => video.type === 'Trailer').at(0).key}`"></iframe>
  </div>
  </div>

</body> 
</template>

<style>
.comic{
  margin: -1%;
  margin-left: -0.3%;
  width: 100.3%;
  height: 147%;
  opacity: 25%;
  position: absolute;
  z-index: -1;
}


.title_logo{
  display: flex;
  margin-left: -4%;
  margin-top: -15%;
  flex-direction: row;
  justify-content: center;
}

#logo{
  z-index: 1;
  width: 20%;
  position: absolute;
  margin-top: 0px;
}

.select{
  margin-top: 10%;
}

.select_text{
  margin-top: -4px;
  font-size: x-large;
  text-align: center;
}

#movie_options{
  text-align: center;
  font-size: 17px;
}

.button_align{
  margin-top: 0.5%;
  text-align: center;
}

.movie_list{
  text-align: center;
}

img{
  width: 38%;
  position: absolute;
  margin-left: 2%;
  margin-top: 80px;
}


.movie-container{
  position: absolute;
  font-size: 27px;
  font-weight: bold;
  display: flex;
  margin-left: 48%;
  flex-direction: column;
  margin-top: 0%;
  font-weight: 100;
}

.poster{
  width: 486px;
  height: 730px;
  margin-left: -580px;
  margin-top: 30px;
}

iframe{
  font-size: 21.5px;
  display: flex;
  margin-left: 14%;
  margin-right: 45%;
  margin-top: -52px;
}
</style>