<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Audio />
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Audio from './components/Audio.vue';
</script>

<style lang="scss">
main {
  padding: 80px 250px;
  width: 1200px;
  margin: 0 auto;
  color: #fff;
}
</style>