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
.main{
    font-size: 70px;
    margin-top: 120px;
    margin-left: 50%;
    margin-right: 1.6%;
    padding: 10px;
    position: absolute;
    color: rgb(89, 16, 216);
    border: solid white;
    background-color: rgb(35, 31, 32);
}

.sign-in{
    font-size: 29px;
    margin-top: 320px;
    margin-left: 50%;
    margin-right: 1.6%;
    padding: 10px;
    padding-left: 21px;
    padding-right: 21px;
    position: absolute;
    color: rgb(89, 16, 216);
    border: solid white;
    background-color: rgb(35, 31, 32);
}

.endgame, .thor{
    position: absolute;
    width: 350px;
    margin-top: 0px;
}

.thor{
    margin-left: 15px;
}

.endgame{
    margin-left: 390px;
}
</style>