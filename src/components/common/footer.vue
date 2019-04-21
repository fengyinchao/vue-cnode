/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-03-30 14:56
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="vfooter">
        <ul>
<!--           <li class="item">
            <router-link :to="{ path: 'home', query: { type: 'all' }}">
              <i class="cnode-iconfont">&#xe7a4;</i>
              <span>主页</span>
            </router-link>
          </li> -->
          <li class="item">
            <router-link :to="{path:'/post'}">
              <i class="cnode-iconfont">&#xe61f;</i>
              <span>发表</span>
            </router-link>
          </li>
          <li class="item">
            <router-link :to="{path:'/message'}">
              <i class="cnode-iconfont">&#xe639;</i>
              <span>消息</span>
            </router-link>
          </li>
          <li class="item">
            <router-link :to="{path:'/me'}">
              <i class="cnode-iconfont">&#xe66e;</i>
              <span>我的</span>
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'footer',
        props: {
            // some:String,
        },
        data(){
            return{

            }
        },
        methods:{

        },
        components:{

        }
    }
</script>

<style lang='scss'>
    @import '../../assets/styles/util.scss';
    .vfooter{
      position:fixed;
      bottom:0;
      left:0;
      right:0;
      height:px2rem(100);
      background-color: $main-tone;
      box-shadow: 0 0 10px 0 $main-tone;
      ul{
        display: flex;
        justify-content: center;
        li{
          display: flex;
          height:px2rem(100);
          flex:1;
          justify-content: center;
          a{
            padding:px2rem(10);
            i,span{
              display: block;
              line-height: px2rem(40);
              text-align: center;
            }
          }
          .cnode-active{
            color:green;
          }
        }
      }
    }
</style>
