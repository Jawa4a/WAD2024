<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">

        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
          <p v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </p>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginFormComponent",
    props: {
      onSubmit: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      handleSubmit() {
        const isValid = this.onSubmit(this.username, this.password);
        if (!isValid) {
          this.errorMessage = "Invalid username or password. Please try again.";
        } else {
          this.errorMessage = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    background-color: white;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #555;
  }
  
  .error-message {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
    text-align: center;
  }
  </style>
  