import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Home from '@/pages/Home'
import Post from '@/pages/Post'
import Message from '@/pages/Message'
import Login from '@/pages/Login'
import Me from '@/pages/Me'
import Topic from '@/pages/Topic'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'v-cnode',
  linkActiveClass:'cnode-active',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        requireAuth:false
      }
    },
    {
      path:'/post',
      name:'Post',
      component:Post,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/message',
      name:'Message',
      component:Message,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/me',
      name:'Me',
      component:Me,
      meta:{
        requireAuth:false
      }
    },
    {
      path:'/topic/:id',
      name:'Topic',
      component:Topic,
      meta:{
        requireAuth:false
      }
    },
    {
      path:'*',
      redirect:'/home'
    },
  ]
})
