import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'

export default new VueRouter({
  routes: [
    {
      path:"/",
      redirect: "/home"
    },
    {
      name: "home",
      path:"/home",
      component:Home,
      meta:{
        footer_show: true
      }
    }, 
    {
      name: "search",
      path:"/search/:keyword?",
      component: Search,
      meta:{
        footer_show: true
      }
    },
    {
      name: "login",
      path:"/login",
      component: Login,
      meta:{
        footer_show: false
      }
    },
    {
      name:"register",
      path:"/register",
      component: Register
    },
  ]
})