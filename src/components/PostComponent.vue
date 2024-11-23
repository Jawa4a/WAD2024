<template>
    <div class="post">
      <div class="post-header">
        <img class="avatar" src="../assets/user.png" alt="Avatar" />
        <span class="username">{{ post.username }}</span>
        <span class="date">
          {{ new Date(post.createdTime).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) }}
        </span>
      </div>
  
      <div class="post-content">
        <div v-if="post.attachments && post.attachments.length > 0">
          <div v-for="(attachment, index) in post.attachments" :key="index">
            <img v-if="attachment.type === 'image'" class="post-image" :src="attachment.url" :alt="attachment.description"/>
            <a v-if="attachment.type === 'file'" :href="attachment.url" download class="download-link">
              {{ attachment.description }}
            </a>
          </div>
        </div>
        <p>{{ post.body }}</p>
      </div>
  
      <div class="post-footer">
        <button class="like-button" @click="likePost">👍 {{ likeText }}</button>
        
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'PostComponent',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    likeText() {
      return this.post.likes === 1
        ? `${this.post.likes} like`
        : `${this.post.likes} likes`;
    },
  },
  methods: {
    likePost() {
      this.$store.commit('incrementLikes', this.post.postId);
    },
  },
};
  </script>
  
<style scoped>
.post {
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
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
</style>
  