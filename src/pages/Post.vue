<template>
  <div class="post">
    <v-header :title='title' :showMenuButton='false' :showBackButton='true'></v-header>
    <div class="content">
      <input required class="title" placeholder="标题...（不少于十个字）"  v-model='article.title'/>
      <select class="select" v-model='article.tab'>
        <option value="">选择...</option>
        <option value="share">分享</option>
        <option value="ask">问答</option>
        <option value="job">招聘</option>
      </select>
      <textarea class="post_detail" placeholder="内容..." v-model='article.content'></textarea>
      <button @click='handleSubmit'>提交</button>
    </div>
  </div>
</template>

<script>
  import vHeader from '../components/common/header';
  import Axios from 'axios';
  import { mapGetters } from 'vuex';
  export default {
    name: 'Post',
    data () {
      return {
        show:false,
        title:'发表',
        article:{
          title:'',
          tab:'',
          content:'',
        }
      }
    },
    computed:{
      ...mapGetters({
        user:'getUserInfo'
      })
    },
    methods:{
      showOrHideMask(show){
        // debugger;
        this.show=show;
      },
      hide(){
        this.show=!this.show;
      },
      handleSubmit(){
        let article={
          ...this.article,
          accesstoken:this.user.token
        }
        console.log(article)
        if(article.title.length<11){
          alert('标题字数没超过十个字！');
          return;
        }
        if(article.accesstoken){
          Axios.post('https://cnodejs.org/api/v1/topics',{
            ...article
          }).then(()=>{
            this.$router.push({
              path:'/home'
            })
          })
          .catch(err=>alert(err))
        }
      }
    },
    mounted(){

    },
    components:{
      vHeader,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '../assets/styles/util.scss';
  .content{
    padding:px2rem(40);
    margin-top: px2rem(100);
    color:black;
    display: flex;
    flex-direction: column;
    .title,.select{
      display:flex;
      align-items: center;
      height: px2rem(100);
      min-height: px2rem(100);
      border:none;
      border-bottom: 1px solid #ccc;
      &:focus{
        outline:none;
      }
    }
    .post_detail{
      margin:px2rem(50) 0;
      flex:1;
      height:px2rem(700);
      overflow-y:visible;
      border:none;
      &:focus{
        outline:none;
      }
    }
    button{
      background-color: $main-tone;
      letter-spacing: px2rem(30);
      height:px2rem(80);
      line-height: px2rem(80);
      color:white;
      border:none;
    }
  }
</style>
