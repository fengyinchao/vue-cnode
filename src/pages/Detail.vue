/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-03-31 19:51
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="container">
      <v-header :title='title' :showMenuButton='false' :showBackButton='true'></v-header>
      <div class="detail" v-if='!showLoading'>
          <div class="top1">
            <img :src="article&&article.author.avatar_url" alt="">
            <span v-text='article&&article.author.loginname'></span>
            <span v-text='article&&article.create_at.substring(0,10)' class='time'></span>
          </div>
          <div class="top2">
            <span class="title">
              {{article&&article.title}}
            </span>
            <div class="a_detail">
              <i class="cnode-iconfont">&#xe7a0;
                {{article&&article.visit_count}}
              </i>
              <i class="cnode-iconfont">&#xe638;
                {{article&&article.reply_count}}
              </i>
            </div>
          </div>
          <div class="content markdown-body" v-html='article&&article.content'>
          </div>
<!--           <div class="comment_fengexian">
            评论
          </div> -->
          <div class="comment" v-if='article.replies&&article.replies.length'>
            <ul>
              <li v-for='comment in article.replies'>
                <v-comment-item :comment='comment'></v-comment-item>
              </li>
            </ul>
          </div>
<!--           <div v-else class="no_comment">
              暂无评论
          </div> -->
<!--           <div class="comment_fengexian">
              我要评论
          </div> -->
          <div v-if='userInfo.userId' class="go_comment">
            <textarea v-model='go_comment' class="gc_content" placeholder="回复支持Markdown语法,请注意标记代码"></textarea>
            <div class="button_group">
              <button type="submit" @click='handleComment'>提交</button>
              <button type="cancle" @click='cancleComment'>取消</button>
            </div>
          </div>
          <div v-else class="unlogin">
            您还未<router-link to='/login' tag='span'>登录</router-link>
          </div>
      </div>
      <v-loading v-else></v-loading>
    </div>
</template>

<script>
    import Axios from 'axios';
    import vHeader from '../components/common/header.vue'
    import vLoading from '../components/common/loading.vue'
    import vCommentItem from '../components/common/comment_item.vue'
    import {mapGetters} from 'vuex'
    export default{
        name:'',
        props: {
            // some:String,
        },
        data(){
            return{
              article:null,
              title:'主题',
              showLoading:true,
              go_comment:''
            }
        },
        methods:{
            handleComment(){
              var comment={
                accesstoken:this.userInfo.token,
                content:this.go_comment,
                reply_id:''
              }
              console.log('lai')
              Axios.post('https://cnodejs.org/api/v1/topic/'+this.article.id+'/replies',comment)
                .then(result=>alert('success'))
            },
            cancleComment(){
              this.go_comment=''
            }
        },
        computed:{
          ...mapGetters({
            userInfo:'getUserInfo'
          })
        },
        components:{
          vHeader,
          vLoading,
          vCommentItem,
        },
        mounted(){
          // console.log(this.$route.params.id);
          var that=this;
          if(this.$route.params.id){
              Axios.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.id).then(function(article ){
                    that.article=article.data.data;
                    that.showLoading=!that.showLoading;
                    // console.log(that.article);
                })
          }


        },
        watch:{
          // '$route':'updateIndex'
        }
    }
</script>

<style lang='scss'>

    @import '../assets/styles/util.scss';

    .detail{
        margin-top:px2rem(100);
        color:black;
        .top1{
          display: flex;
          align-items: center;
          padding-left:px2rem(20);
          height:px2rem(100);
          min-height: px2rem(100);
          border-bottom: px2rem(1) solid #ccc;
          /*background-color: green;*/
          img{
            width:px2rem(50);
            height:px2rem(50);
            border-radius: 50%;
          }
          span{
            margin-left: px2rem(20);
            font-size: 14px;
            color:#83BD50;
            &.time{
              color:gray;
            }
          }
        }
        .top2{
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: px2rem(1) solid #ccc;
          min-height: px2rem(200);
          padding:px2rem(30) px2rem(30) 0;
          .title{
            font-size:24px;
            font-weight: 600;
            line-height:1.3;
            flex:3;
            display: flex;
            align-items: center;
            /*border-bottom: 1px solid #ccc;*/
          }
          .a_detail{
            color:#83BD50;
            height:px2rem(100);
            line-height: px2rem(100);
            flex:1;
            i{
              margin-right: px2rem(50);
            }
          }
        }
        .content{
          padding:px2rem(30);
        }
        .comment_fengexian{
          height:px2rem(100);
          border-top: 1px solid #ccc;
          /*display: inline-block;*/
          line-height: px2rem(100);
          padding:0 px2rem(30) px2rem(30);
          font-size: 22px;
          font-weight: bold;
          /*position: relative;*/
          text-align: center;
         /* &:before,&:after{
            content:'';
            position:absolute;
            top:px2rem(50);
            width:px2rem(200);
            border-bottom:px2rem(1) solid black;
          };
          &:before{
            left:px2rem(40);
          };
          &:after{
            right:px2rem(40);
          };*/
        }
        .no_comment{
          width:50%;
          /*margin:px2rem(20) auto;*/
          padding-left: px2rem(30);
          height:px2rem(60);
          line-height: px2rem(60);
          /*text-align: center;*/
          /*background-color: $main-tone;*/
          /*color:#fff;*/
          letter-spacing: px2rem(10);
          border-radius: 3%;
        }
        .go_comment{
          /*margin-top: px2rem(100);*/
          /*padding:px2rem(30);*/
          /*background-color: red;*/
          textarea{
            width:90%;
            margin:0 auto;
            height:px2rem(200);
            display: block;
            border:1px solid $main-tone;
            box-shadow: 0 0 2px 0 $main-tone;
          }
          .button_group{
            display: flex;
            /*padding:px2rem(30);*/
            button{
              flex:1;
              border:none;
              height:px2rem(80);
              background-color: $main-tone;
              color:#fff;
              margin: px2rem(30);
            }
          }
        }
        .unlogin{
          text-align: center;
          border-top: px2rem(1) solid #ccc;
          padding: px2rem(100) 0;
          letter-spacing: px2rem(4);
          span{
            color:$main-tone;
          }
        }
    }
</style>
