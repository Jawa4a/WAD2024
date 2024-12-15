<template>
  <div class="add-post-container">
    <h2>Add a New Post</h2>
    <form @submit.prevent="submitPost">
      <label for="postBody">Post Content:</label>
      <textarea
        id="postBody"
        v-model="postContent"
        placeholder="Write something here..."
        rows="5"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPostComponent",
  data() {
    return {
      postContent: "",
    };
  },
  methods: {
    async submitPost() {
      try {
        const token = document.cookie.split("jwt=")[1];

        const response = await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
          body: JSON.stringify({
            uid: 1, 
            username: "testuser", 
            body: this.postContent, 
            attachments: {}
          }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        alert("Post added successfully!");
        this.postContent = "";
        this.$router.push("/");
      } catch (error) {
        console.error("Error adding post:", error.message);
        alert("Failed to add post. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.add-post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

textarea {
  padding: 10px;
  font-size: 16px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
}

button:hover {
  background-color: #45a049;
}
</style>
