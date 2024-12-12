<template>
    <div class="main">
        <Sidebar />
        <div class="postContainer">
            <div v-if="getPost" class="post">
                <PostComponent :post="getPost" :disableLinks="true" />
            </div>
        </div>
        <Sidebar />
    </div>
</template>
  
  
<script>
import PostComponent from '@/components/PostComponent.vue';
import Sidebar from '@/components/Sidebar.vue';
export default {
    components: { Sidebar, PostComponent },
    name: "singlepost",
    data: function() {
        return {};
    },
    async created() {
        await this.$store.dispatch("fetchPosts");
        window.scrollTo(0, 0);
    },
    computed: {
        getPost() {
            const routeId = Number(this.$route.params.id);
            const post = this.$store.getters.posts.find((p) => p.id === routeId);
            return post;
        },
    },

  methods: {
    updatePost() {
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deletePost() {
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
  <style scoped>
.main{
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
.post:last-child {
    border-bottom: none;
}
.post-header {
    display: flex;
    align-items: center;
    gap: 10px;
}
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.date {
    color: gray;
    font-size: 0.9em;
}
.post-content {
    margin-top: 10px;
}
.post-image {
    width: 100%;
    border-radius: 5px;
}
.post-content p {
    margin-top: 10px;
}
.like-button {
    background-color: #333;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
.like-button:hover {
    background-color: #555;
}
@media (max-width: 800px) {
    .sidebar {
        display: none;
    }
}
</style>