/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-04-01 21:42
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="login">
      <v-header :title='title' :showMenuButton='false' :showBackButton='true' :showPostButton='false'></v-header>
      <div class="login-detail">
          <div class="login1">
            <input placeholder="Access Token" v-model='accesstoken'/>
            <span @click='handleLogin'>确定</span>
          </div>
      </div>
    </div>
</template>

<script>
    import vHeader from '../components/common/header';
    import { mapActions } from 'vuex';
    import Axios from 'axios';
    export default{
        name:'login',
        props: {
            // some:String,
        },
        data(){
            return{
              show:false,
              title:'登录',
              accesstoken:''
            }
        },
        methods:{
          ...mapActions({
            setUserInfo:'setUserInfo'
          }),
          handleLogin(){
            if(!this.accesstoken){
              this.$alerTips('AccessToken不能为空！');
            }else{
              Axios.post('https://cnodejs.org/api/v1/accesstoken',{
                    accesstoken:this.accesstoken
                })
                .then(data=>{
                  let user={
                      loginname: data.data.loginname,
                      avatar_url: data.data.avatar_url,
                      userId: data.data.id,
                      token: this.accesstoken
                  }
                  this.setUserInfo(user);
                  this.$alerTips('登陆成功！',{'background-color':'#03A9F4'})
                  setTimeout(
                    ()=>this.$router.push({
                    'path':'/home'
                    }),1950)
                })
                .catch(error=>this.$alerTips('Token格式有误！'))
            }
          }
        },
        components:{
          vHeader,
        }
    }
</script>

<style lang='scss'>
    @import '../assets/styles/util.scss';
    .login-detail{
      position:fixed;
      top:px2rem(100);
      bottom:0;
      left:0;
      right:0;
      color:black;
      .login1{
          margin-top: px2rem(200);
          height:px2rem(100);
          input{
            border:none;
            border-bottom: 1px solid $main-tone;
            &:focus{
              outline:none;
            }
          }
          input,span{
            display: block;
            margin:0 auto;
            width:90%;
            text-align: center;
          }
          span{
            margin-top: px2rem(50);
            background-color: $main-tone;
            color:#fff;
            letter-spacing: px2rem(30);
            height:px2rem(80);
            line-height: px2rem(80);
          }
      }
    }
</style>
