import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IndexView.vue'),
      redirect: '/contentManager',
      children: [
        {
          path: '/contentManager',
          name: 'contentManager',
          component: () => import('../views/ContentManagerView.vue')
        },
        {
          path: '/collectionManager',
          name: 'collectionManager',
          component: () => import('../views/CollectionManagerView.vue')
        },
        {
          path: '/categoryManager',
          name: 'categoryManager',
          component: () => import('../views/CategoryManagerView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
