<template>
  <div class="zeroContainer">
  <button class="zeroize" @click="zeroize">set likes to 0</button>
  </div>
<div class="home-container">
<Sidebar />
<section class="posts">
<PostComponent v-for="post in getAllPosts" :key="post.postId" :post="post" />
</section>
<Sidebar />
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
            return this.$store.getters.posts
        }
    },
  methods: {
  zeroize(){
    this.$store.commit('zeroizeLikes', this.posts);
  },
  },
};


</script>

<style scoped>
.zeroContainer{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zeroize{
  background: linear-gradient(to bottom right, #000000, #bbbbbb);
  border: 0;
  border-radius: 10px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.zeroize:hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

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
