<template>
  <div class="message">
    <v-header :show_parent='show' :title='title' :showMenuButton='false' :showBackButton='true'></v-header>
    <div class="message-detail1">
      <div class="top">
        <span :class="{active:active=='done'}" @click="toggle('done')">已读</span>
        <span :class="{active:active=='will'}" @click="toggle('will')">未读&nbsp;&nbsp;{{message_count?message_count:''}}</span>
      </div>
      <div class="bottom">
  <!--       <div class="message markdown-body" v-for="item in has_read_message">
            <div class="user">
                <img class="head" :src="item.author.avatar_url" />
                <div class="info">
                    <span class="cl">
                        <span class="name">{{item.author.loginname}}</span>
                        <span class="name" v-if="item.type==='at'">在回复中@了您</span>
                        <span class="name" v-if="item.type==='reply'">回复了您的话题</span>
                    </span>
                    <span class="cr">
                        <span class="name" ></span>
                    </span>
                </div>
            </div>
            <div class="reply_content" v-html="item.reply.content"></div>
            <router-link :to="{name:'topic',params:{id:item.topic.id}}">
                <div class="topic-title">
                    话题：{{item.topic.title}}
                </div>
            </router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from '../components/common/header';
  import {mapGetters} from 'vuex';
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
        hasnot_read_message:[]
      }
    },
    methods:{
      showOrHideMask(show){
        // debugger;
        this.show=show;
      },
      hide(){
        this.show=!this.show;
      },
      toggle(msg){
        this.active=msg;
      }
    },
    computed:{
      ...mapGetters({
        userInfo:'getUserInfo'
      })
    },
    mounted(){
      Axios.get('https://cnodejs.org/api/v1/messages?accesstoken='+this.userInfo.token+'&mdrender=true').then(result=>{
        console.log(result.data.data);
          this.has_read_message=result.data.data.has_read_messages;
          this.hasnot_read_message=result.data.data.hasnot_read_messages;
          this.message_count=this.hasnot_read_message.length;
      });
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
      bottom:0;
      left:0;
      right:0;
      .top{
        background-color: $main-tone;
        height:px2rem(100);
        line-height: px2rem(100);
        display: flex;
        span{
          flex:1;
          text-align: center;
          position: relative;
          &.active{
            color:black;
            &:before{
              content:'';
              height:px2rem(10);
              position: absolute;
              bottom:0;
              background-color: black;
              left:0px;
              width:100%;
            };
          }
        }
      }
      .bottom{
        flex:1;
        /*background-color: red;*/
        padding:px2rem(30);
      }
    }
</style>
