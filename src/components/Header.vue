<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Add Post</router-link></li>
        </ul>
        <div class="user-profile">
          <a href="javascript:void(0);" @click="toggleDropdown">
            <img src="@/assets/user.png" alt="User Icon">
          </a>
          <!-- <div v-if="isDropdownVisible" class="dropdown-content">
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
            <p @click="logout">Logout</p>
          </div> -->
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }
  nav ul li a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
  }
  nav ul li a:hover {
    background-color: #555;
    text-decoration: none;
  }
  .user-profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user-profile {
    margin-left: auto;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  .dropdown-content {
    border-radius: 10px;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: rgb(197, 197, 197);
    border: 1px solid #ccc;
    min-width: 160px;
    padding: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown-content p {
    margin: 5px 0;
    color: black;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  .dropdown-content p:hover {
    background-color: #ddd;
    border-radius: 5px;
  }
  </style>
  