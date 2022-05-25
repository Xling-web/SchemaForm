import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'newForm',
    component: () => import('../views/newForm/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
