<script setup></script>

<template>
  <div class="footer-container">
    <a
      class="github"
      href="https://github.com/Maiyoori?tab=repositories"
      @click="navigate"
      role="link"
      >GitHub</a
    >
    <p class="contact">
      Contact Us <br />
      maiyoorisri@gmail.com <br />(416)-000-0000
    </p>
    <a
      class="about"
      href="https://github.com/Maiyoori/Assignment-5"
      @click="navigate"
      role="link"
      >About</a
    >
  </div>
</template>

<style scoped>
.footer-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 660px;
  color: white;
  font-size: 18px;
  background-color: rgb(35, 31, 32);
}

.github, .contact, .about {
  text-align: center;
  color: white;
}

.contact{
    margin-top: 0px;
}

.contact:hover {
  color: rgb(213, 85, 249);
}

.github:hover {
  color: rgb(213, 85, 249);
}

.contact:hover {
  color: rgb(213, 85, 249);
}

.about:hover {
  color: rgb(213, 85, 249);
}
</style>
