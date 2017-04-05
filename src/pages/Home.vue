<template>
  <div class="home">
    <div v-show='show' class="pagecover" @click='hide'></div>
    <v-header :handleMenuButton='showOrHideMask' :show='show' :title='title'></v-header>
    <v-side-bar :showSideBar='show' :toggleSideBar='showOrHideMask'></v-side-bar>
    <v-list :updateHeaderTitle='updateHeaderTitle' :array='listArray'></v-list>
    <v-loading v-show='showLoading'></v-loading>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from '../components/common/header';
  import vFooter from '../components/common/footer';
  import vList from '../components/list.vue';
  import vSideBar from '../components/sidebar.vue';
  import vLoading from '../components/common/loading.vue';
  import $ from 'jquery';
  import Axios from 'axios';
  import Utils from '../assets/js/utils.js';

  export default {
    name: 'Home',
    data () {
      return {
        show:false,
        title:'全部',
        listArray:[],
        showLoading:true,
        currentPage:1,
      }
    },
    methods:{
      showOrHideMask(show){
        this.show=show;
      },
      hide(){
        this.show=!this.show;
      },
      updateHeaderTitle(title){
        this.title=title;
      },
      loadMore(){
        let scrollTop=$(window).scrollTop();
        let windowHeight=$(window).height();
        let documentHeight=$(document).height();
        if(scrollTop+windowHeight>documentHeight-2000){
          let page=++this.currentPage;
          let tab=this.$route.query.type||'all';
          console.log(page,tab);
          Axios.get('https://cnodejs.org/api/v1/topics?'+'page='+page+'&tab='+tab)
                .then((arr)=>this.listArray=this.listArray.concat(arr.data.data))
        }
      },

    },
    mounted(){
      let array=window.window.sessionStorage.array;
      if(array){
        array=JSON.parse(array);
        this.listArray=array;
        this.showLoading=false;
        this.$nextTick(()=>$(window).scrollTop(window.window.sessionStorage.scrollTop));
      }else{
        Axios.get('https://cnodejs.org/api/v1/topics')
              .then(arr=>{
                this.listArray=arr.data.data;
                this.showLoading=!this.showLoading;
              })
              .catch(error=>this.$alerTips('出错了！'))
      }
      $(window).on('scroll',Utils.throttle(Utils.showOrHideScroll.bind(this),500));
      $(window).on('scroll',Utils.throttle(this.loadMore,2000));
    },
    beforeRouteLeave(to,from,next){
      // console.log('leave');
      if(to.name==='Topic'){
        let scrollTop=$(window).scrollTop();
        let array=this.listArray;
        window.window.sessionStorage.scrollTop=scrollTop;
        window.window.sessionStorage.array=JSON.stringify(array);
        this.$backToTop().hide();
        $(window).off('scroll');
      }
      next();
    },
    beforeRouteEnter(to,from,next){
      if (from.name!=='Topic') {
        window.window.sessionStorage.removeItem('array');
      }
      next();
    },
    watch: {
    // 切换页面
      '$route':function(to, from) {
          console.log('list页面路由监听');
          if (to.query && to.query.type) {
            console.log('success');
              let tab=to.query.type;
              this.title=Utils.mapStringToHanzi(tab);
              Axios.get('https://cnodejs.org/api/v1/topics?tab='+tab+'&page=1')
              .then(arr=>{
                this.listArray=arr.data.data;
              })
              .catch(err=>this.$alerTips(err))
          }
      }
    },
    components:{
      vHeader,
      vList,
      vSideBar,
      vLoading,
      vFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
    .pagecover{
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:100;
      background:rgba(0,0,0,0.4);
    }
</style>
