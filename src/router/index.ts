import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import DetailsView from '@/views/DetailsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsView,
    },
    {
      path: '/:catchall(.*)*',
      name: 'Not Found',
      component: NotFoundView,
    },
  ],
})

export default router
