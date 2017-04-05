/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-04-01 21:42
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="about">
      <v-header :title='title' :showMenuButton='false' :showPostButton='false' :showBackButton='true'></v-header>
      <div class="about-detail">
        <div class="item">
          <h1>关于项目</h1>
          <p>该项目基于Cnode.js的API，采用VUE全家桶重写的webapp</p>
        </div>
        <div class="item">
          <h1>关于源码</h1>
          <p>请点击<a href="https://github.com/fengyinchao/v-cnode.git" title="">这里</a>查看源码</p>
        </div>
        <div class="item">
          <h1>关于反馈</h1>
          <p>请点击<a href="https://github.com/fengyinchao/v-cnode/pulls" title="">这里</a>进行反馈</p>
        </div>
        <div class="item">
          <h1>关于版本</h1>
          <p>当前版本：V1.0</p>
        </div>
      </div>
    </div>
</template>

<script>
    import vHeader from '../components/common/header';
    export default{
        name:'about',
        props: {
            // some:String,
        },
        data(){
            return{
              show:false,
              title:'关于'
            }
        },
        methods:{

        },
        components:{
          vHeader,
        }
    }
</script>

<style lang='scss' scoped>
    @import '../assets/styles/util.scss';
    .about-detail{
      position:fixed;
      top:px2rem(100);
      bottom:0;
      left:0;
      right:0;
      color:black;
      .item{
        height:px2rem(150);
        border-bottom: 1px solid #ccc;
        padding: px2rem(40);
        h1{
          font-weight: bold;
          font-size:18px;
          padding-bottom: px2rem(20);
        }
        p{
          text-indent: px2rem(40);
          line-height:1.5;
          a{
            color:green;
          }
        }
      }
    }
</style>
