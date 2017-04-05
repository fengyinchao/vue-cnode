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
  import utils from '../assets/js/utils.js';

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
      showOrHideScroll(){
        let scrollTop=$(window).scrollTop();
        if(scrollTop>300)
            this.$backToTop().show();
        else
            this.$backToTop().hide();
        let windowHeight=$(window).height();
        let documentHeight=$(document).height();
        if(scrollTop+windowHeight>documentHeight-2000){
          this.loadMore();
        }
      },
      loadMore(){
        let page=++this.currentPage;
        let tab=this.$route.query.type;
        let that=this;
        console.log(page,tab);
        Axios.get('https://cnodejs.org/api/v1/topics?'+'page='+page+'&tab='+tab).then(function(arr){
          // console.log('success');
          // console.log(arr.data.data);
          that.listArray=that.listArray.concat(arr.data.data);
          // console.log(that.listArray);
          // that.showLoading=!that.showLoading;
        })
      },
      mapStringToHanzi(string){
          const mapObj={
            'all':'全部',
            'good':'精华',
            'share':'分享',
            'job':'工作',
            'ask':'问答'
          }
          return mapObj[string];
      }
    },
    mounted(){
      var that=this;
      var array=window.window.sessionStorage.array;
      if(array){
        array=JSON.parse(array);
        this.listArray=array;
        this.showLoading=false;
      }else{
        Axios.get('https://cnodejs.org/api/v1/topics').then(function(arr){
          that.listArray=arr.data.data;
          that.showLoading=!that.showLoading;
        })
      }
      $(window).on('scroll',utils.throttle(this.showOrHideScroll,2000));
    },
    beforeRouteLeave(to,from,next){
      console.log('leave');
      if(to.name==='Detail'){
        let scrollTop=$(window).scrollTop();
        let array=this.listArray;
        window.window.sessionStorage.scrollTop=JSON.stringify(scrollTop);
        window.window.sessionStorage.array=JSON.stringify(array);
      }
      next();
    },
    beforeRouteEnter(to,from,next){
      console.log('enter');
      if (from.name!=='Detail') {
        window.window.sessionStorage.removeItem('array');
      }else{
        $(window).scrollTop(window.window.sessionStorage.scrollTop);
        window.window.sessionStorage.removeItem('scrollTop');
      }
      next();
    },
    watch: {
    // 切换页面
      '$route':function(to, from) {
          var that=this;
          console.log('list页面路由监听');
          if (to.query && to.query.type) {
              let tab=to.query.type;
              this.title=this.mapStringToHanzi(tab);
              Axios.get('https://cnodejs.org/api/v1/topics?tab='+tab+'&page=1').then(function(arr){
                that.listArray=arr.data.data;
              })
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
      /*display: none;*/
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:100;
      background:rgba(0,0,0,0.4);
    }
</style>
