import Vue from 'vue';
import $ from 'jquery';
export default {
  install(){
    Vue.prototype.$backToTop=function(){
      $('#backToTop').remove();
      let $div=$("<div id='backToTop' class='backToTop'></div>");
      $div.on('click',()=>$(window).scrollTop(0));
      let $i=$("<i class='cnode-iconfont back'>&#xe630;</i>");
      $div.append($i);
      $('body').append($div);
      function show(){
        $div.css({'visibility':'visible'});
      }
      function hide(){
        $div.css({'visibility':'hidden'})
      }
      return{
        show:show,
        hide:hide,
      }
    }
  }
}
