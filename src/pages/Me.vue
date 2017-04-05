<template>
  <div class="me">
    <v-header :show_parent='show' :title='title' :showBackButton='true' :showMenuButton='false' :showPostButton='false'></v-header>
    <div class="me-detail">
        <div class="me-header">
            <img v-if='user.avatar_url' :src="user.avatar_url" alt="">
            <img v-else src="../assets/imgs/unlogin.jpg" alt="unlogin.jpg">
            <div class="text">{{user.loginname||'暂未登录'}}</div>
        </div>
        <div class="me-item item1">
          <span>
            <i class="cnode-iconfont">&#xe61f;</i>发表主题{{user.recent_topics&&user.recent_topics.length||0}}<i class="cnode-iconfont right">&#xe619;</i>
          </span>
          <span>
            <i class="cnode-iconfont">&#xe639;</i>我的消息{{user.recent_replies&&user.recent_replies.length||0}}<i class="cnode-iconfont right">&#xe619;</i>
          </span>
        </div>
        <div class="me-item item2">
          <span>
            <i class="cnode-iconfont">&#xe666;</i>社区周榜<i class="cnode-iconfont right">&#xe619;</i>
          </span>
          <span>
            <i class="cnode-iconfont">&#xe62f;</i>意见反馈<i class="cnode-iconfont right">&#xe619;</i>
          </span>
                    <span>
            <i class="cnode-iconfont">&#xe60b;</i>系统设置<i class="cnode-iconfont right">&#xe619;</i>
          </span>
        </div>
    </div>
  </div>
</template>

<script>
  import vHeader from '../components/common/header';
  import Axios from 'axios';
  import { mapState, mapGetters } from 'vuex';
  export default {
    name: 'me',
    data () {
      return {
        show:false,
        title:'我的',
        user:{...this.userInfo,...this.getUserFromSession()}
      }
    },
    methods:{
      getUserFromSession(){
        let user=window.window.sessionStorage.user;
        return user&&JSON.parse(user);
      }
    },
    computed: mapGetters({
        userInfo:'getUserInfo'
    }),
    mounted(){
        let loginname=this.userInfo.loginname;
        if(loginname){
          Axios.get('https://cnodejs.org/api/v1/user/'+loginname)
              .then(userDetail=>{
                this.user=userDetail.data.data;
                console.log(this.user)
              })
              .catch(err=>console.log(err))
        }
    },
    components:{
      vHeader,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
    @import '../assets/styles/util.scss';
    .me-detail{
      position:fixed;
      top:px2rem(100);
      bottom:0;
      left:0;
      right:0;
      color:black;
      background-color: #EEEEEE;
      .me-header{
        height:px2rem(200);
        position:relative;
        background-image: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
        img{
          position:absolute;
          /*background-color: red;*/
          border:0;
          top:px2rem(100);
          left:50%;
          transform: translateX(-50%);
          width:px2rem(200);
          height:px2rem(200);
          background-image: linear-gradient(top, #f5f7fa 0%, #c3cfe2 100%);
          border-radius:50%;
        }
        .text{
          position:absolute;
          top:px2rem(320);
          left:50%;
          transform: translateX(-50%);
          width:px2rem(400);
          height:px2rem(200);
          text-align: center;
          color:green;
        }
      }
      .me-item{
        background-color: white;
        span{
          height:px2rem(100);
          display: block;
          line-height: px2rem(100);
          padding-left: px2rem(50);
          border-bottom:1px solid #ccc;
          i{
            margin-right: px2rem(50);
            color:green;
            &.right{
              float:right;
            }
          }
        }
      }
      .item1{
        margin:px2rem(200) 0 px2rem(100) 0;
      }
    }
</style>
