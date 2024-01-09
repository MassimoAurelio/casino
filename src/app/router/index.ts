import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/offers',
      name: 'Offers',
      component: () => import('@/pages/offers')
    },
    {
      path: '/tournament',
      name: 'Tourney',
      component: () => import('@/pages/tournaments')
    },
    {
      path: '/',
      name: 'game',
      component: () => import('@/pages/games')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/pages/support')
    }
  ]
})

export default router
