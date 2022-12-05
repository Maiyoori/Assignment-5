<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
 
<template>
    <div class="title-logo">
        <img class="logo" src="../assets/movie-net.png">
    </div>
    <img class="background" src="../assets/background.jpg">
</template>

<style>
.title-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.logo {
    z-index: 1;
    width: 370px;
    position: absolute;
    margin-top: 10px;
}

.background {
    position: absolute;
    width: 1500px;
    height: 1400px;
    z-index: -1;
}
</style>
