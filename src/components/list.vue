/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-03-30 22:18
 * @Github https://github.com/fengyinchao
 */
<template>
    <div class="list">
      <ul>
        <li v-for='item in array'>
            <v-list-item :item='item'></v-list-item>
        </li>
      </ul>
    </div>
</template>

<script>
    import vListItem from './common/list_item.vue';
    export default{
        name:'list',
        props: {
            array:Array,
        },
        data(){
            return{
              showLoading:true,
            }
        },
        methods:{
        },
        beforeMount(){

        },
        mounted(){

        },
        components:{
          vListItem,
        }
    }
</script>

<style lang='scss'>
    @import '../assets/styles/util.scss';
    .list{
      margin:px2rem(100) 0;
      padding-bottom:px2rem(50);
      color:black;
    }
</style>
