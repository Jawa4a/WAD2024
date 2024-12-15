<template>
    <div class="edit-post-container">
      <h2>Edit Post</h2>
      <textarea v-model="postBody" placeholder="Edit your post here..." required></textarea>
      <div class="actions">
        <button @click="updatePost" class="update-button">💾 Update</button>
        <button @click="cancel" class="cancel-button">❌ Cancel</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: null,
        postBody: "",
      };
    },
    methods: {
      // Fetch the post for editing
      async fetchPost() {
        try {
          const response = await fetch(`http://localhost:3000/posts/${this.postId}`);
          if (!response.ok) throw new Error("Failed to fetch post");
          const post = await response.json();
          this.postBody = post.body;
        } catch (error) {
          console.error("Error fetching post:", error.message);
        }
      },
  
      // Update the post
      async updatePost() {
        try {
          const response = await fetch(`http://localhost:3000/posts/${this.postId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ body: this.postBody }),
          });
  
          if (!response.ok) throw new Error("Failed to update post");
          alert("Post updated successfully.");
          this.$router.push(`/singlepost/${this.postId}`);
        } catch (error) {
          console.error("Error updating post:", error.message);
        }
      },
  
      // Navigate back
      cancel() {
        this.$router.push(`/singlepost/${this.postId}`);
      },
    },
    mounted() {
      this.postId = this.$route.params.id;
      this.fetchPost();
    },
  };
  </script>
  
  <style scoped>
  .edit-post-container {
    max-width: 600px;
    margin: 20px auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .update-button,
  .cancel-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }
  .update-button {
    background-color: #28a745;
  }
  .cancel-button {
    background-color: #dc3545;
  }
  .update-button:hover {
    background-color: #218838;
  }
  .cancel-button:hover {
    background-color: #c82333;
  }
  </style>
  