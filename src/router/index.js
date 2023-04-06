import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import books from '@/views/Books.vue'
import bookEdit from '@/views/BookEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  
  {
    path: '/books',
    name: 'books',
    component: books
  },
  {
    path: '/books/:id',
    name: 'booksEdit',
    component: bookEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
