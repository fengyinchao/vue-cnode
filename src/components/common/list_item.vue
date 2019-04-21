/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-03-31 15:47
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="item">
        <router-link :to="{name:'Topic',params: { id: item.id }}" tag='div' class="top">
          <div class="t_left">
            <div class="tl_top">
              <img :src="item.author.avatar_url" alt="">
              <div class="author">
                <span class="name">{{item.author.loginname}}</span>
                <span class="create">{{item.create_at.substring(0,10)}}</span>
              </div>
            </div>
            <div class="tl_bottom" id="title">
              <span>{{item.title}}</span>
            </div>
          </div>
          <div class="t_right">
              <span :class="{good:item.good}">精华</span>
              <span :class="{top1:item.top}">置顶</span>
          </div>
        </router-link>
        <div class="bottom">
          <div class="b_item">
            <i class="cnode-iconfont">&#xe7a0;</i>
            <span>{{item.visit_count}}</span>
          </div>
          <div class="b_item">
            <i class="cnode-iconfont">&#xe638;</i>
            <span>{{item.reply_count}}</span>
          </div>
          <div class="b_item">
            <i class="cnode-iconfont">&#xe60d;</i>
            <span>{{item.last_reply_at.substring(5,10)}}</span>
          </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'list_item',
        props: {
            // some:String,
            item:{
              type:Object,
            }
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

<style lang='scss' scoped>
    @import '../../assets/styles/util.scss';
    .item{
      height:px2rem(300);
      min-height: px2rem(300);
      width:100%;
      border-bottom:1px solid #ccc;
      margin-bottom:20px;
      box-shadow: 0 0 5px 0 #ccc;
      background-color: white;
      display: flex;
      flex-direction: column;
      .top{
        flex:1;
        display: flex;
        padding: 5px 20px;
        .t_left{
          flex:5;
          /*max-width:px2rem(800);*/
          display:flex;
          flex-direction: column;
          .tl_top{
            /*border-bottom: 1px solid red;*/
            padding:10px;
            flex:3;
            display: flex;
            align-items: center;
            img{
              /*flex:1;*/
              height:px2rem(80);
              width:px2rem(80);
              border-radius: 100%;
              margin-right:px2rem(60);
            }
            .author{
              flex:2;
              .create{
                display: block;
                margin-top:10px;
              }
            }
          }
          .tl_bottom{
            flex:2;
            display: flex;
            align-items: center;
            span{
              text-overflow: ellipsis;
              white-space:nowrap;
              overflow: hidden;
              width:px2rem(450);
            }
          }
        }
        .t_right{
          flex:1;
          min-width:px2rem(230);
          display: flex;
          align-items: center;
          justify-content: center;
          span{
              border-radius: 10%;
              margin-right:px2rem(10);
              visibility: hidden;
              height:30%;
              display: flex;
              align-items: center;
              font-weight: bold;
              letter-spacing: 2px;
              padding:2px;
              color:#fff;
          }
          .good{
            /*width:px2rem(80);*/
            visibility: visible;
            background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
          }
          .top1{
            /*width:px2rem(80);*/
            visibility: visible;
            background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
          }
        }
      }
      .bottom{
        height:px2rem(80);
        line-height:px2rem(80);
        text-align:center;
        min-height: px2rem(80);
        border-top:1px solid #ccc;
        display: flex;
        .b_item{
          flex:1;
          &:not(:last-child){
            border-right: 1px solid #ccc;
          }
          i{
            margin-right:10px;
          }
        }
      }
    }
</style>
