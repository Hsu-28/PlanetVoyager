import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutUs from '../views/AboutUs.vue'
// import Login from '../views/Login.vue'



const routes = [
  // {
  //   path: '/t',
  //   name: 'home',
  //   component: HomeView
  // },
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
    path: '/',
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
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  }, { 
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
   {
    path: '/registerv',
    name: 'registerv',
    component: () => import(/* webpackChunkName: "order" */ '../views/RegisterV.vue')
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
  //   path: '/itineraryMoon',
  //   name: 'itineraryMoon',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/ItineraryMoon.vue')
  // },
  // {
  //   path: '/itineraryMoon2',
  //   name: 'itineraryMoon2',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/ItineraryMoon2.vue')
  // },
  {
    path: '/three',
    name: 'three',
    component: () => import(/* webpackChunkName: "order" */ '../views/Three.vue')
  },
  // {
  //   path: '/itineraryMars',
  //   name: 'itineraryMars',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/ItineraryMars.vue')
  // },
  // {
  //   path: '/itineraryMars2',
  //   name: 'itineraryMars2',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/ItineraryMars2.vue')
  // },
  // {
  //   path: '/itineraryVenus',
  //   name: 'itineraryVenus',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/ItineraryVenus.vue')
  // },
  // {
  //   path: '/itineraryVenus2',
  //   name: 'itineraryVenus2',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/ItineraryVenus2.vue')
  // },
  // {
  //   path: '/itineraryCombo',
  //   name: 'itineraryCombo',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/ItineraryCombo.vue')
  // },
  {
    path: '/mars',
    name: 'mars',
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderProcessMars.vue')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import(/* webpackChunkName: "error" */ '../views/NotFound.vue') 
  },
  {
    path: '/venus',
    name: 'venus',
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderProcessVenus.vue')
  },
  {
    path: '/orbit',
    name: 'orbit',
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderProcessOrbit.vue')
  },


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
  scrollBehavior(to, from, savedPosition) {
    // 始终滚動到顶部
    return { top: 0 }
  },
  });

  router.beforeEach((to, from) => {
    // 檢查用户是否已登录 並 ❗️避免無限重定向
    if(to.meta.requiresAuth && to.name !== 'login'){
      const isAuth = localStorage.getItem('token')
      console.log('檢查用户'+ isAuth);
      if(isAuth){
        // return '/about'
        return true
      }else{
        return '/login'
      }
    }
  })


export default router