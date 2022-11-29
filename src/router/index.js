import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue'),
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: () => import('../pages/tousLesConcerts.vue'),
  },
  {
    path: '/mesRéservations',
    name: 'mesRéservations',
    component: () => import('../pages/mesReservations.vue'),
  },
  {
    path: '/concerts/:concerts_id',
    component: () => import('../pages/concerts/reserver.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;