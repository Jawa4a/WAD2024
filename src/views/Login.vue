<template>
    <div class="login-container">
      <section class="form-section">
        <LoginFormComponent :onSubmit="handleLogin" />
      </section>
    </div>
  </template>
  
  <script>
  import LoginFormComponent from "../components/LoginFormComponent.vue";
  
  export default {
    name: "LoginView",
    components: {
      LoginFormComponent,
    },
    methods: {
      handleLogin(username, password) {
        if (username === "admin" && password === "Password_123") {
          alert("Login successful!");
          return true;
        } else {
          return false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  .form-section {
    width: 100%;
    max-width: 400px;
  }
  </style>
  