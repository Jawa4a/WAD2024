<template>
    <div class="main">
      This is about page
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutView",
    mounted() {
      this.adjustHeight();
      window.addEventListener("resize", this.adjustHeight);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.adjustHeight);
    },
    methods: {
      adjustHeight() {
        const viewportHeight = window.innerHeight;
        const header = document.querySelector("header");
        const footer = document.querySelector("footer");
        const headerHeight = header ? header.offsetHeight : 0;
        const footerHeight = footer ? footer.offsetHeight : 0;
        const main = document.querySelector(".main");
        main.style.height = `${viewportHeight - headerHeight - footerHeight - 40}px`;
      },
    },
  };
  </script>
  
<style scoped>
    .main {
        margin-top: 20px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        overflow: auto;
    }
</style>
  