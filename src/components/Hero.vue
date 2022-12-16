<script setup>
</script>

<template>
    <div class="hero-container">
        <p class="main">Watch trending movies anytime, anywhere</p>
        <p class="sign-in">Sign into your account to watch your downloaded movies</p>
    </div>
    <img class="endgame" src="../assets/endgame.jpg" alt="Poster" />
    <img class="thor" src="../assets/thor.jpg" alt="Poster" />
</template>

<style scoped>

.endgame,
.thor {
    position: absolute;
    width: 300px;
    margin-top: 120px;
    border: solid white 2px;
}

.thor {
    margin-left: 15px;
}

.endgame {
    margin-left: 340px;
}

.main, .sign-in{

    margin-left: 52.5%;
    margin-right: 1.6%;
    padding: 10px;
    position: absolute;
    color: rgb(15, 222, 50);
    border: solid white;
    background-color: rgb(35, 31, 32);
    text-align: center;
}

.main {
    font-size: 70px;
    margin-top: 150px;
    margin-right: 1.6%;
}
.sign-in {
    font-size: 29px;
    margin-top: 320px;
    padding-left: 21px;
    padding-right: 21px;
    margin-top: 430px;
}


</style>