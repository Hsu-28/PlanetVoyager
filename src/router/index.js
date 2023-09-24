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
    path: '/aboutus',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },  
  {
    path: '/t2',
    name: 'HereIsTest2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HereIsTest2.vue')
  }, 
  {
    path: '/t1',
    name: 'HereIsTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HereIsTest.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index.vue')
  },
  {
    path: '/Destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "Destination" */ '../views/Destination.vue')
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
    path: '/register',
    name: 'register',
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "Login" */ '../views/Register.vue')
  }, 
  { 
=======
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  }, { 
>>>>>>> 65a7291606a2deda3914afdafbc8b68aadd1f5a8
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderTitle.vue')
  },
  { 
    path: '/moon',
    name: 'moon',
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderProcess.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import(/* webpackChunkName: "order" */ '../views/Technology.vue')
  },
<<<<<<< HEAD
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import(/* webpackChunkName: "error" */ '../views/NotFound.vue') 
  },
  {
    path: '/loginSuccess',
    name: 'loginSuccess',
    component: () => import(/* webpackChunkName: "order" */ '../views/LoginSuccess.vue')
  },
  {
    path: '/loginFail',
    name: 'loginFail',
    component: () => import(/* webpackChunkName: "order" */ '../views/LoginFail.vue')
  },
  // {
  //   path: '/itinerary',
  //   name: 'itinerary',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/Itinerary.vue')
  // },
  {
    path: '/mars',
    name: 'mars',
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderProcessMars.vue')
  },
=======
   {
    path: '/registerv',
    name: 'registerv',
    component: () => import(/* webpackChunkName: "order" */ '../views/RegisterV.vue')
  },
  
  { path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: () => import(/* webpackChunkName: "error" */ '../views/NotFound.vue') 
},
>>>>>>> 65a7291606a2deda3914afdafbc8b68aadd1f5a8


////-----------------後台-------------------------
// {
//   path: '/backstagelongin',
//   name: 'backstagelongin',
//   component: () => import(/* webpackChunkName: "BackstageLongin" */ '../backend/BackstageLongin.vue')
// },
// {
//   path: '/mangerMGMT',
//   name: 'mangerMGMT',
//   component: () => import(/* webpackChunkName: "MangerMGMT" */ '../backend/MangerMGMT.vue')
// },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  });
  




export default router