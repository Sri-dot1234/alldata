import { createRouter, createWebHistory } from 'vue-router'
import GetData from '../views/GetData.vue'
import ContactGetdata from '../views/ContactGetdata.vue'
import ContactPost from '../views/ContactPost.vue'
import AddOpp from '../views/AddOpp.vue'
import OppGet from '../views/OppGet.vue'
const routes = [
  {
    path: '/',
    name: 'GetData',
    component: GetData
  },
  {
    path: '/PostData',
    name: 'PostData',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostData.vue')
  },
  {
    path: '/ContactPost',
    name: 'ContactPost',
    component: ContactPost
  },
  {
    path: '/ContactGetdata',
    name: 'ContactGetdata',
    component: ContactGetdata
  },
  {
    path: '/AddOpp',
    name: 'AddOpp',
    component: AddOpp
  },
  {
    path: '/OppGet',
    name: 'OppGet',
    component:OppGet
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
