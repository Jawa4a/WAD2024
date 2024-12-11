import { createStore } from 'vuex'

export default createStore({
strict: true,
  state: {
    posts: [],
  },
  getters: {
    posts(state) {
      return state.posts;
    },
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts.find((p) => p.postId === postId);
      if (post) {
        post.likes++;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    },
    zeroizeLikes(state) {
      state.posts.forEach((s) => (s.likes = 0));
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    setPosts(state, posts) {
      state.posts = posts;
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/posts", {
          credentials: "include",
        });
        if (response.ok) {
          const posts = await response.json();
          commit("setPosts", posts);
        } else {
          console.error("Failed to fetch posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    },
    // loadPosts({ commit }) {
    //   const savedPosts = JSON.parse(localStorage.getItem('posts'));
    //   if (savedPosts) {
    //     commit('setPosts', savedPosts);
    //   }
    // },
  },
  modules: {},
});