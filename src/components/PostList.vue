<template>
    <div class="posts">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script>
  import Post from './PostComponent.vue';
  
  export default {
    name: 'PostList',
    components: { Post },
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .posts {
    flex-grow: 1;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 0 20px;
  }
  </style>
  