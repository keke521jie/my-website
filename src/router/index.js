import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: ()=>import('../views/Blog.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: ()=>import('../views/Article.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: ()=>import('../views/Music.vue')
    },
    {
      path: '/content',
      name: 'content',
      component: ()=>import('../views/Content.vue')
    },
  ]
})

export default router
