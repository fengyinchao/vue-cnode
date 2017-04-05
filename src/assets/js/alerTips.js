import $ from 'jquery';//引入zepto会报错，原因不明
import Vue from 'vue';
export default {
  install(){
    let timer=null;
    Vue.prototype.$alerTips=function(msg,options){
        let option=options||'';
        $('#tip').remove();

        let $div=$("<div class='tip' id='tip'></div>");
        if(option){
          $div.css(option);
        }
        $div.text(msg);
        $('body').append($div);
        $('#tip').addClass('showAlert');
        clearTimeout(timer);
        timer=setTimeout(()=>{
          $('#tip').remove();
          timer=null;
        },2000);

    }
  }
}
