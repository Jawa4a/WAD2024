<template>
    <main>
      <SignupComponent />
    </main>
  </template>
  
  <script>
  import SignupComponent from "@/components/SignupComponent.vue";
  export default {
    name: "Signup",
    components: {
      SignupComponent,
    },
  };
  </script>
  
  <style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  </style>
  