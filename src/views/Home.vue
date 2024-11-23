<template>
<div class="home-container">
<Sidebar />
<section class="posts">
<PostComponent v-for="post in getAllPosts" :key="post.postId" :post="post" />
</section>
<Sidebar />
<Footer />
</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import PostComponent from '../components/PostComponent.vue';
// import postsData from '../assets/myJson.json';

export default {
  components: {Sidebar,PostComponent},
name: 'HomeView',
data: function() {
            return {}
    },
    computed: {
        getAllPosts(){
          // console.log('Posts:', this.$store.getters.posts)
            return this.$store.getters.posts
        }
    }
};

</script>

<style scoped>
.home-container {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.posts {
    flex-grow: 1;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 0 20px;
}

@media (max-width: 800px) {
.sidebar {
display: none;
}
.posts {
width: 100%;
padding: 10px;
}
}
</style>
