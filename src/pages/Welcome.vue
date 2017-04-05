<template>
  <div class="hello">
      <!-- <img src="../assets/imgs/loading.gif" alt=""> -->
      <!-- <img src="../assets/imgs/cnode.jpg" alt=""> -->
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
    mounted(){
      var s = 'Cnode-Vue';
      var con = $('.hello');
      var index = 0;
      var length = s.length;
      var tId = null;
      var that=this;
      function start(){
        con.text('');
        tId=setInterval(function(){
          con.append(s.charAt(index));
          // console.log(index)
          if(index++ === length){
              clearInterval(tId);
              setTimeout(()=>{
                that.$router.push({
                  path:'/home'
                })
              },500)
          }
        },200);
      }
      start();
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
    /*letter-spacing: 2px;*/
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
