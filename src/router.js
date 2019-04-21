import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'
import Post from '@/views/Post'
import Message from '@/views/Message'
import Login from '@/views/Login'
import Me from '@/views/Me'
import Topic from '@/views/Topic'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'v-cnode',
  linkActiveClass: 'cnode-active',
  routes: [{
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/topic/:id',
      name: 'Topic',
      component: Topic,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]
})