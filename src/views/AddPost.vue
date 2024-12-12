<template>
    <main>
        AddPost view
        <AddPostComponent />
    </main>
  </template>
  
  <script>
  import AddPostComponent from "@/components/AddPostComponent.vue";
  
  export default {
    name: "AddPost",
    components: {
      AddPostComponent,
    },
  };
  </script>
  
  <style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  </style>
  