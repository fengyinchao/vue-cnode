/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-03-30 14:55
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="head">
        <div :class="['vheader',{showAnimate:show}]">
            <div class="left"  v-show='showMenuButton' @click='showMenu'>
              <i class="cnode-iconfont">&#xe64c;</i>
            </div>
            <div class="left" v-show='showBackButton' @click='handleBackButton'>
              <i class="cnode-iconfont">&#xe606;</i>
            </div>
            <div class="left"  v-show='(showMenuButton==false)&&(showBackButton==false)' @click='showMenu'>
              <i class="cnode-iconfont"></i>
            </div>
            <div class="center">
              <span class="text" v-text='title'></span>
            </div>
            <div class="right" v-show='showPostButton' @click='goPost'>
              <i class="cnode-iconfont" >&#xe65e;</i>
            </div>
            <div class="right" v-show='!showPostButton'>
              <i class="cnode-iconfont" ></i>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default{
        name:'header',
        props: {
            showMenuButton:{
              type:Boolean,
              default:true
            },
            showBackButton:{
              type:Boolean,
              default:false
            },
            showPostButton:{
              type:Boolean,
              default:true
            },
            handleMenuButton:{
              type:Function,
              default:()=>{return;}
            },
            handlePostButton:{
              type:Function,
              default:()=>{return;}
            },
            show:{
              type:Boolean,
              default:false
            },
            title:{
              type:String,
              default:'全部'
            }
        },
        data(){
            return{

            }
        },
        methods:{
            showMenu(){
                this.handleMenuButton(!this.show);
            },
            handleBackButton(){
              this.$router.back();
            },
            goPost(){
              this.$router.push({
                path:'/post'
              });
            }
        },
        mounted(){

        },
        components:{
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../assets/styles/util.scss';
    .vheader{
      position:fixed;
      top:0;
      left:0;
      right:0;
      height:px2rem(100);
      background-color: $main-tone;
      box-shadow: 0 0 10px 0 $main-tone;
      line-height: px2rem(100);
      display: flex;
      justify-content: center;
      text-align: center;
      transition: all 0.3s ease;
      .left{
        flex:1;
      }
      .center{
        flex:3;
      }
      .right{
        flex:1;
      }
    }
    .showAnimate{
      transform:translateX(px2rem(300));
    }
</style>
