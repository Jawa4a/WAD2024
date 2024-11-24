<template>
  <main>
    <h1>Welcome</h1>
    <p>Log in:</p>
    <form @submit.prevent="validatePassword">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <div v-if="errorMessages.length">
      <p>This password is invalid:</p>
      <ul>
        <li v-for="(message, index) in errorMessages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </main>
</template>
  <script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        errorMessages: [],
      };
    },
    methods: {
      validatePassword() {
        this.errorMessages = [];
        const password = this.password;
        if (password.length < 8 || password.length >= 15) {
          this.errorMessages.push('Password must be between 8 and 15 characters long.');
        }
        if (!/^[A-Z]/.test(password)) {
          this.errorMessages.push('Password must start with an uppercase letter.');
        }
        if (!/.*[A-Z].*/.test(password)) {
          this.errorMessages.push('Password must include at least one uppercase letter.');
        }
        if ((password.match(/[a-z]/g) || []).length < 2) {
          this.errorMessages.push('Password must include at least two lowercase letters.');
        }
        if (!/.*\d.*/.test(password)) {
          this.errorMessages.push('Password must include at least one numeric value.');
        }
        if (!password.includes('_')) {
          this.errorMessages.push('Password must include the character "_".');
        }
        if (this.errorMessages.length === 0) {
          alert('Signup successful!');
        }
      },
    },
  };
  </script>
  <style scoped>
  main {
    max-width: 400px;
    margin: 50px auto;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  form div {
    margin-bottom: 15px;
  }
  form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  form input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  button {
    background-color: #007BFF;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056B3;
  }
  </style>