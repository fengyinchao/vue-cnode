/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-03-30 14:57
 * @Github https://github.com/fengyinchao
 */
<template>
    <div :class="['vsidebar',{show:showSideBar}]">
        <div class="login">
          <router-link v-if='user.loginname' to='/me' tag='div'>
            <img :src="user&&user.avatar_url" alt="用户头像"/>
            <span>{{user&&user.loginname}}</span>
          </router-link>
          <router-link v-else to='/login' tag='div'>
            <img src="../assets/imgs/unlogin.jpg" alt="unlogin.jpg">
            <span>{{'点此登录'}}</span>
          </router-link>
        </div>
        <div class="topics" >
          <ul @click='hide'>
            <router-link :to="{ path: 'home', query: { type: 'all' }}" tag='li' class="topic"><i class="cnode-iconfont">&#xe64c;</i>全部</router-link>
            <router-link :to="{ path: 'home', query: { type: 'good' }}" tag='li' class="topic"><i class="cnode-iconfont">&#xe605;</i>精华</router-link>
            <router-link :to="{ path: 'home', query: { type: 'share' }}" tag='li' class="topic"><i class="cnode-iconfont">&#xe64f;</i>分享</router-link>
            <router-link :to="{ path: 'home', query: { type: 'ask' }}" tag='li' class="topic"><i class="cnode-iconfont">&#xe733;</i>问答</router-link>
            <router-link :to="{ path: 'home', query: { type: 'job' }}" tag='li' class="topic"><i class="cnode-iconfont">&#xe640;</i>招聘</router-link>
          </ul>
        </div>
        <div class="about">
          <router-link to='/about' tag='span'><i class="cnode-iconfont">&#xe6f7;</i>关于</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        name:'sidebar',
        props: {
            showSideBar:Boolean,
            toggleSideBar:Function,
        },
        computed:{
          ...mapGetters({
            userInfo:'getUserInfo'
          })
        },
        data(){
            return{
              user:{...this.userInfo,...this.getUserFromSession()}
            }
        },
        methods:{
            hide(){
              this.toggleSideBar(!this.showSideBar);
            },
            getUserFromSession(){
              let user=window.window.sessionStorage.user;
              return user&&JSON.parse(user);
            }
        },
        components:{

        }
    }
</script>

<style lang='scss'>
    @import '../assets/styles/util.scss';
    .vsidebar{
      /*font-size:16px !important;*/
      position: fixed;
      top:0;
      left:px2rem(-300);
      transition: all 0.3s ease;
      bottom:0;
      width:px2rem(300);
      /*background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);*/
      background-color:#fff;

      z-index:150;
      display: flex;
      flex-direction: column;
      font-weight: 500;
      .login{
        height:px2rem(300);
        min-height:px2rem(300);
        /*border-bottom:px2rem(1) solid #ccc;*/
        display: flex;
        background-color: $main-tone;
        div{
          /*background-color: red;*/
          flex:1;
          height:100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding:px2rem(40);
          img{
            height:px2rem(160);
            border-radius:50%;
            background-color: red;
            width:px2rem(160);
          }
          span{
            height:px2rem(60);
            line-height: px2rem(60);
            /*padding-bottom: 10px;*/
            width:80%;
            color:yellow;
            text-align: center;
            /*text-decoration: underline;*/
          }
        }
      }
      .about{
        border-top: px2rem(1) solid #ccc;
        height:px2rem(100);
        min-height:px2rem(100);
        padding:px2rem(30);
        display: flex;
        align-items: center;
        color:black;
        font-weight: bold;
        /*justify-content: center;*/
        span{
          i{
            padding: 0 px2rem(30);
          }
        }
      }
      .topics{
        height:px2rem(350);
        min-height:px2rem(350);
        display:flex;
        align-items: center;
        /*justify-content: center;*/
        padding:px2rem(30) 0;
        ul{
          color:black;
          font-weight: bold;
          padding:px2rem(30);
          li{
            margin:px2rem(30) 0;
            i{
              padding: 0 px2rem(30);
            }
          }
        }
      }
    }
    .show{
      transform:translateX(px2rem(300));
      /*box-shadow: 0 0 10px 0 $main-tone;*/
    }
</style>
