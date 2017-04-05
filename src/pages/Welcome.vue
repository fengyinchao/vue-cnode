<template>
  <div class="hello">

  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'hello',
    data () {
      return {

      }
    },
    methods:{
      startAnimate:function(title){//不能定义成箭头函数，否则this传不进来
        let s = title;
        let con = $('.hello');
        let index = 0;
        let length = s.length;
        let tId = null;
        con.text('');
        tId=setInterval(()=>{
          con.append(s.charAt(index));
          if(index++ === length){
              clearInterval(tId);
              setTimeout(()=>{
                this.$router.push({
                  path:'home'
                })
              },500)
          }
        },200);
      }
    },
    mounted(){
      this.startAnimate('Cnode-Vue');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../assets/styles/util.scss';
  .hello{
    display: flex;
    justify-content: center;
    font-size:px2rem(70);
    font-weight:bold;
    font-style: italic;
    align-items: center;
    position: fixed;
    width:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  }
</style>
