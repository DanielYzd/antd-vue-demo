import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Button.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/Icon.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('../views/Grid.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/affix',
    name: 'Affix',
    component: () => import('../views/Affix.vue')
  },
  {
    path: '/bread',
    name: 'Bread',
    component: () => import('../views/Bread.vue')
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: () => import('../views/Dropdown.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import('../views/Pagination.vue')
  },
  {
    path: '/usepagination',
    name: 'UsePagination',
    component: () => import('../views/UsePagination.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/form1',
    name: 'Form1',
    component: () => import('../views/Form1.vue')
  },
  {
    path: '/form2',
    name: 'Form2',
    component: () => import('../views/Form2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
