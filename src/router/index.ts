import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import CallingAllMembersArticle from '@/views/blog/CallingAllMembersArticle.vue'
import NycGrassrootsAiSafetyArticle from '@/views/blog/NycGrassrootsAiSafetyArticle.vue'
import HtmlDay2026 from '@/views/HtmlDay2026.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/htmlDay2026',
      name: 'html-day-2026',
      component: HtmlDay2026,
    },
    {
      path: '/blog/calling-all-members',
      name: 'calling-all-members',
      component: CallingAllMembersArticle,
    },
    {
      path: '/blog/nyc-grassroots-ai-safety',
      name: 'nyc-grassroots-ai-safety',
      component: NycGrassrootsAiSafetyArticle,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { 
        el: to.hash,
        behavior: 'smooth' 
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        left: 0
      }
    }
  }
})

export default router
