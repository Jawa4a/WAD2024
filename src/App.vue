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
  async mounted() {document.title = "Vue App";this.setFavicon();
    try {
      const response = await fetch("http://localhost:3000/auth/status", {
        credentials: "include",
      });
      const data = await response.json();
      if (data.authenticated) {
        this.$store.commit("setAuthentication", true); // Update Vuex store
      } else {
        this.$store.commit("setAuthentication", false);
      }
    } catch (error) {
      console.error("Error checking authentication status:", error);
      this.$store.commit("setAuthentication", false);
    }
  },
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
