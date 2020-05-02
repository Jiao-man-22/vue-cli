import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//axiou时遇到的报错
import vueRsource from 'vue-resource'
import Welcome from '../components/Welcome.vue'
 
Vue.use(vueRsource);

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/newpage',
    name:'Newpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsPage.vue')
  },
  //配置路由
  // {
  //   path:'/login',
  //   name:'Login',
  //   component: () => import('../components/Login.vue')
  // },
  //
  {
    path:'/login_1',
    name:'Login_1',
    component: () => import('../components/Login_1.vue')
  },
  {
    path:'/home_T',
    name:'Home_T',
    component: () => import('../components/Home.vue'),
    redirect:'/welcome',
    children:[
      {path:'/welcome',component:Welcome}
    ]

  }

]
//存放路由
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//挂载守护路由
//to表示将要跳转的地址，from 来自哪个页面 ，next放行函数
// router.beforeEach((to,from,next) =>{
//   if(to.path==='/login_1') return next();
//   //获取token
//   const tokenStr=window.sessionStorage.getItem('token');
//   if(!tokenStr) return next('/Login_1');
//   next();
// })
//暴露路由
export default router
