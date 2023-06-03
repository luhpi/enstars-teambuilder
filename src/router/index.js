import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
import CardListView from '../views/CardListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: CardsView
  },
  {
    path: '/list',
    name: 'list',
    component: CardListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
