<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  methods: {
    setFavicon(url) {let link = document.querySelector("link[rel*='icon']");link.href = require('@/assets/jest-js-icon.svg');},
  },
  mounted() {document.title = "Vue App";this.setFavicon();},
};
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f0f0;
}
</style>
