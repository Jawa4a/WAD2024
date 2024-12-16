<template>
  <div class="main">
    <Sidebar />
    <div class="postContainer">
      <div v-if="getPost" class="post">
        <PostComponent :post="getPost" />
        <div class="actions">
          <button class="delete-button" @click="deletePost">Delete Post</button>
          <button class="edit-button" @click="toggleEditMode">
            {{ isEditing ? "Cancel" : "Edit Post" }}
          </button>
        </div>
        <div v-if="isEditing" class="edit-section">
          <textarea v-model="editedContent" rows="5"></textarea>
          <button class="save-button" @click="updatePost">Save Changes</button>
        </div>
      </div>
      <div v-else>
        <p>Post not found!</p>
      </div>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar, PostComponent },
  name: "singlepost",
  data() {
    return {
      isEditing: false,
      editedContent: "",
    };
  },
  async created() {
    await this.$store.dispatch("fetchPosts");
    window.scrollTo(0, 0);
    if (this.getPost) {
      this.editedContent = this.getPost.body;
    }
  },
  computed: {
    getPost() {
      const routeId = Number(this.$route.params.id);
      return this.$store.getters.posts.find((p) => p.id === routeId);
    },
  },
  methods: {
    toggleEditMode() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.editedContent = this.getPost.body;
      }
    },
    async updatePost() {
      try {
        const response = await fetch(
          `http://localhost:3000/posts/${this.getPost.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ body: this.editedContent }),
          }
        );
        if (!response.ok) throw new Error("Failed to update post");
        await this.$store.dispatch("fetchPosts");
        this.isEditing = false;
      } catch (e) {
        console.error("Error updating post:", e.message);
      }
    },
    async deletePost() {
      try {
        const response = await fetch(
          `http://localhost:3000/posts/${this.getPost.id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) throw new Error("Failed to delete post");
        await this.$store.dispatch("fetchPosts");
        this.$router.push("/");
      } catch (e) {
        console.error("Error deleting post:", e.message);
      }
    },
  },
};
</script>

<style scoped>
.main {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.postContainer {
  flex-grow: 1;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 20px;
  width: 100%;
  padding: 10px;
}

.post {
  border-bottom: 1px solid #ddd;
  padding: 0;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.edit-section {
  margin-top: 15px;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #dc3545;
}

.delete-button:hover {
  background-color: #c82333;
}

.save-button {
  margin-top: 10px;
  background-color: #28a745;
}

.save-button:hover {
  background-color: #218838;
}

@media (max-width: 800px) {
  .sidebar {
    display: none;
  }
}
</style>
