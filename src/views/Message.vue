<template>
  <div class="message">
    <v-header :show_parent='show' :title='title' :showMenuButton='false' :showBackButton='true' :showPostButton='false'></v-header>
    <div class="message-detail1">
      <div class="top">
        <span :class="{active:active=='done'}" @click="toggle('done')">已读</span>
        <span :class="{active:active=='will'}" @click="toggle('will')">未读&nbsp;&nbsp;{{message_count?message_count:''}}</span>
      </div>
      <div v-show="active==='done'" class="bottom markdown-body">
        <div class="message " v-for="item in has_read_message">
            <div class="user">
                <img class="head" :src="item.author.avatar_url" />
                <div class="info">
                    <span class="cl">
                        <span class="name">{{item.author.loginname}}</span>
                        <span class="name" v-if="item.type==='at'">在回复中@了您</span>
                        <span class="name" v-if="item.type==='reply'">回复了您的话题</span>
                    </span>
                </div>
            </div>
            <div class="reply_content" v-html="item.reply.content"></div>
            <div class="topic-title">
              <router-link :to="{name:'Topic',params:{id:item.topic.id}}">
                话题：{{item.topic.title}}
              </router-link>
            </div>
        </div>
      </div>
      <div v-show="active==='will'" class="bottom markdown-body">
        <div class="message " v-for="item in hasnot_read_message">
            <div class="user">
                <img class="head" :src="item.author.avatar_url" />
                <div class="info">
                    <span class="cl">
                        <span class="name">{{item.author.loginname}}</span>
                        <span class="name" v-if="item.type==='at'">在回复中@了您</span>
                        <span class="name" v-if="item.type==='reply'">回复了您的话题</span>
                    </span>
                </div>
            </div>
            <div class="reply_content" v-html="item.reply.content"></div>
            <div class="topic-title">
              <router-link :to="{name:'Topic',params:{id:item.topic.id}}">
                话题：{{item.topic.title}}
              </router-link>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import vHeader from '../components/common/header';
  import { mapGetters } from 'vuex';
  import Axios from 'axios'
  export default {
    name: 'message',
    data () {
      return {
        show:false,
        title:'消息',
        active:'done',
        message_count:'',
        has_read_message:[],
        hasnot_read_message:[],
        user:{}
      }
    },
    methods:{
      toggle(msg){
        this.active=msg;
      },
      getUserFromSession(){
        let userFromSession=window.window.sessionStorage.user;
        // debugger;
        if(userFromSession)
          userFromSession=JSON.parse(userFromSession);
        else
          userFromSession={}
        return userFromSession;
      }
    },
    computed:{
      ...mapGetters({
        userInfo:'getUserInfo'
      })
    },
    mounted(){
      let userFromSession=this.getUserFromSession();
      Object.assign(this.user,this.userInfo,userFromSession)
      // console.log(this.userInfo);
      let token=this.user.token;
      Axios.get('https://cnodejs.org/api/v1/messages?accesstoken='+token+'&mdrender=true').then(result=>{
          this.has_read_message=result.data.data.has_read_messages;
          this.hasnot_read_message=result.data.data.hasnot_read_messages;
          this.message_count=this.hasnot_read_message.length;
      }).catch(err=>console.log(err));
    },
    components:{
      vHeader,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    @import '../assets/styles/util.scss';
    .message-detail1{
      /*background-color: green;*/
      display: flex;
      flex-direction:column;
      position: absolute;
      top:px2rem(100);
      z-index:-100;
      bottom:0;
      left:0;
      right:0;
      .top{
        background-color: $main-tone;
        min-height:px2rem(100);
        line-height: px2rem(100);
        display: flex;
        span{
          flex:1;
          text-align: center;
          position: relative;
          &.active{
            color:pink;
            &:before{
              content:'';
              height:px2rem(10);
              position: absolute;
              bottom:0;
              background-color: lightgray;
              left:0px;
              width:100%;
            };
          }
        }
      }
      .bottom{
        /*background-color: red;*/
        flex:1;
        .message{
          /*padding-top: px2rem(100);*/
          .user{
            display: flex;
            height:px2rem(100);
            align-items: center;
            img{
              height:px2rem(100);
              width:px2rem(100);
              margin-right:px2rem(40);
            }
          }
          .reply_content{
            min-height:px2rem(100);
            padding-top: px2rem(30);
            /*line-height: px2rem(100);*/
          }
          .topic-title{
            padding-bottom: px2rem(30);
            border-bottom: 1px solid #ccc;
            a{
              color:black;
            }
          }
        }
        padding:px2rem(30);
      }
    }
</style>
