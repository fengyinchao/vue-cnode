// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/user.js'
import alerTips from './assets/js/alerTips.js'
import backToTop from './assets/js/backToTop.js'
Vue.use(alerTips);
Vue.use(backToTop);

import 'lib-flexible/flexible.js';
import './assets/styles/reset.css';
import FastClick from 'fastclick';
import 'github-markdown-css';
import './assets/styles/iconfont/iconfont.css';
import './assets/styles/animate.css';
import './assets/styles/common.scss';
FastClick.attach(document.body);

Vue.config.productionTip = false;

router.beforeEach((to,from,next)=>{
  console.log('全局路由控制');
  if(to.matched.some(route=>route.meta.requireAuth)){
    let user=window.window.sessionStorage.user;
    user=user&&JSON.parse(user);
    user={...store.state.userInfo,...user}
    if(user.userId){
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
