import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import singlepost from '@/views/Post.vue';
import about from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/singlepost/:id',
    name: 'singlepost',
    component: singlepost,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
	if (to.meta.requiresAuth) {
	  try {
		const response = await fetch('http://localhost:3000/auth/status', {
		  credentials: 'include',
		});
  
		if (response.ok) {
		  const data = await response.json();
		  if (data.authenticated) {
			next();
		  } else {
			next('/login');
		  }
		} else {
		  next('/login');
		}
	  } catch (error) {
		console.error('Error checking authentication status:', error);
		next('/login');
	  }
	} else {
	  next();
	}
  });
  

export default router;
