/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-04-01 15:44
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="loading">
        <div class="spinner">
          <div class="cube1"></div>
          <div class="cube2"></div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'loading',
        props: {
            // some:String,
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

<style lang='scss'>
    @import '../../assets/styles/util.scss';
    .loading{
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      display: flex;
      align-items: center;
      justify-content: center;
      .spinner {
        margin: 100px auto;
        width: 100px;
        height: 100px;
        position: relative;
        /*background-color: red;*/
        .cube1, .cube2 {
          background-color: $main-tone;
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          left: 10px;
          animation: cubemove 1.8s infinite ease-in-out;
          -webkit-animation: cubemove 1.8s infinite ease-in-out;
        }
        .cube2 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
        }
      }
    }

    @-webkit-keyframes cubemove {
      25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
      50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
      75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
      100% { -webkit-transform: rotate(-360deg) }
    }

    @keyframes cubemove {
      25% {
        transform: translateX(42px) rotate(-90deg) scale(0.5);
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
      } 50% {
        transform: translateX(42px) translateY(42px) rotate(-179deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
      } 50.1% {
        transform: translateX(42px) translateY(42px) rotate(-180deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
      } 75% {
        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
      } 100% {
        transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
      }
}
</style>
