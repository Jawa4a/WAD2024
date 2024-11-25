<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="validatePassword">
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
      </div>

      <div v-if="errorMessages.length" class="error-messages">
        <p>This password is invalid:</p>
        <ul>
          <li v-for="(message, index) in errorMessages" :key="index">
            {{ message }}
          </li>
        </ul>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginFormComponent",
  data() {
    return {
      username: "",
      password: "",
      errorMessages: [],
    };
  },
  methods: {
    validatePassword() {
      this.errorMessages = [];
      const password = this.password;

      // Validation Rules
      if (password.length < 8 || password.length >= 15) {
        this.errorMessages.push(
          "Password must be between 8 and 15 characters long."
        );
      }
      if (!/^[A-Z]/.test(password)) {
        this.errorMessages.push("Password must start with an uppercase letter.");
      }
      if (!/.*[A-Z].*/.test(password)) {
        this.errorMessages.push(
          "Password must include at least one uppercase letter."
        );
      }
      if ((password.match(/[a-z]/g) || []).length < 2) {
        this.errorMessages.push(
          "Password must include at least two lowercase letters."
        );
      }
      if (!/.*\d.*/.test(password)) {
        this.errorMessages.push(
          "Password must include at least one numeric value."
        );
      }
      if (!password.includes("_")) {
        this.errorMessages.push('Password must include the character "_".');
      }

      if (this.errorMessages.length === 0) {
        alert("Signup successful!");
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
  margin: auto;
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

.error-messages {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
  text-align: center;
}
</style>
