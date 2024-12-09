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

      <button type="submit" style="font-weight: bold;">Login</button>
      <div class="signupLinkContainer">
      <router-link to="/Signup" class="signupLink">Register</router-link>
    </div>
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
    async validatePassword() {
        console.log("validating password");
        this.errorMessages = [];
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.username,
                    // email: this.email,
                    password: this.password,
                }),
                credentials: 'include',
            });

            if (response.ok) {
                alert("Login successful!");
                this.$router.push('/');
            } else {
                const data = await response.json();
                if (data.errors) {
                    this.errorMessages = data.errors;
                } else {
                    this.errorMessages = ["An unexpected error occurred."];
                }
            }
        } catch (error) {
            console.error("Login error:", error.message);
            this.errorMessages = ["An unexpected error occurred."];
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
.signupLinkContainer{
  margin-top: 20px;
  text-align: center;
}
.signupLink{
  text-decoration: none;
  color:black;
}
</style>
