import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutUs from '../views/AboutUs.vue'
// import Login from '../views/Login.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },  
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },  
  {
    path: '/donate',
    name: 'donate',
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
  },
  {
    path: '/training',
    name: 'training',
    component: () => import(/* webpackChunkName: "training" */ '../views/Training.vue')
  },
  {
    path: '/teamMembers',
    name: 'teamMembers',
    component: () => import(/* webpackChunkName: "teamMembers" */ '../views/TeamMembers.vue')
  },
  {
    path: '/memberCenter',
    name: 'memberCenter',
    component: () => import(/* webpackChunkName: "memberCenter" */ '../views/MemberCenter.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import(/* webpackChunkName: "order" */ '../views/Technology.vue')
  },
  { path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: () => import(/* webpackChunkName: "error" */ '../views/NotFound.vue') 
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
