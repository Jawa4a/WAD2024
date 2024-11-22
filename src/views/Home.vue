<template>
<div class="home-container">
<Sidebar />
<section class="posts">
<Post v-for="post in posts" :key="post.id" :post="post" />
</section>
<Sidebar />
<Footer />
</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Post from '../components/PostComponent.vue';
import postsData from '../assets/myJson.json';

export default {
name: 'HomeView',
components: {
  Sidebar,
  Post,
},
data() {
  return {
    posts: postsData,
  };
},
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
