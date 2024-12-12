import { createStore } from 'vuex'

export default createStore({
strict: true,
  state: {
    isAuthenticated: false,
    posts: [],
  },
  getters: {

		isAuthenticated(state) {
			return state.isAuthenticated;
		},

		posts(state) {
		return state.posts;
		},
		
		post(state, id) {
		return state.posts.find(p => p.id===id);
		}

	},
  mutations: {

    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },

    incrementLikes(state, id) {
      const postInArray = state.posts.find((p) => p.id === id);
      if (postInArray) {
        postInArray.likes++;
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

    authenticate({ commit }) {
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      commit('setAuthentication', false);
    },

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
  },
  modules: {},
});