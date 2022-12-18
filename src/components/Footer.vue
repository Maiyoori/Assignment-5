<script setup></script>

<template>
  <div class="footer-container">
    <a class="github" href="https://github.com/Maiyoori?tab=repositories" @click="navigate" role="link">GitHub</a>
    <p class="contact">
      Contact Us <br />
      maiyoorisri@gmail.com <br />(416)-000-0000
    </p>
    <a class="about" href="https://github.com/Maiyoori/Assignment-5" @click="navigate" role="link">About</a>
  </div>
</template>

<style scoped>
.footer-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgb(35, 31, 32);
  color: white;
  font-size: 18px;
  margin-top: 140px;
}

.github,
.contact,
.about {
  text-align: center;
  color: white;
}

.contact {
  margin-top: -3px;
}

.contact:hover {
  color: rgb(243, 181, 38);
}

.github:hover {
  color: rgb(243, 181, 38);
}

.about:hover {
  color: rgb(243, 181, 38);
}
</style>
