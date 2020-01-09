import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '@/views/containers/TodoList/TodoList.vue';
import noFoundPage from '@/views/containers/NotFoundPage/NotFoundPage.vue';

Vue.use(VueRouter)

const routes = [{
  path: '/todoList',
  name: 'TodoList',
  component: TodoList
}, {
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '*',
  name: 'noFoundPage',
  component: noFoundPage
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
