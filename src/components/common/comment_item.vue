/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-04-03 10:13
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="comment_list">
        <div class="comment_top">
          <div class="c_top_left">
            <img :src="comment.author.avatar_url" alt="">
            <span class="author">{{comment.author.loginname}}</span>3分钟前
          </div>
          <div class="c_top_right">
            <i class="cnode-iconfont" @click='doGood'>&#xe605;
              <span>{{comment.ups.length}}</span>
            </i>
            <i class="cnode-iconfont">&#xe60e;
              <span></span>
            </i>
          </div>
        </div>
        <div class="comment_bottom">
          <div class="commet_detail markdown-body" v-html='comment.content'></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Axios from 'axios'
    export default{
        name:'comment_list',
        props: {
            // some:String,
            comment:{
              type:Object,
              default:{}
            }
        },
        data(){
            return{

            }
        },
        computed:{
          ...mapGetters({
            userInfo:'getUserInfo'
          })
        },
        methods:{
            doGood(){
                alert('正在开发。。')
              // let comment_id=this.comment.id;
              //  console.log(this.comment);
              // Axios.post('https://cnodejs.org/api/v1/reply/'+comment_id+'/ups',{
              //   accesstoken:this.userInfo.token
              // }).then(result=>alert('success'))
            }
        },
        components:{

        }
    }
</script>

<style lang='scss'>
  @import '../../assets/styles/util.scss';
  .comment_list{
    min-height: px2rem(200);
    display: flex;
    flex-direction: column;
    /*background-color: red;*/
    padding:px2rem(10);
    border-top: 1px solid #ccc;
    .comment_top{
      height:px2rem(150);
      line-height: px2rem(150);
      /*background-color: green;*/
      display: flex;
      .c_top_left{
        flex:1;
        padding:0 0 0 px2rem(30);
        img{
          width:px2rem(100);
          height:px2rem(100);
          border-radius: 50%;
          vertical-align: middle;
        }
        span{
          margin:0 px2rem(10);
          color:blue;
        }
      }
      .c_top_right{
        width:px2rem(200);
        display: flex;
        justify-content: flex-end;
        color:#03A9F4;
        i{
          margin-left: 10px;
        }
        /*float:right;*/
      }
    }
    .comment_bottom{
      flex:1;
      padding:px2rem(30);
    }
  }
</style>
