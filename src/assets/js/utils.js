/*
函数节流
 */
import $ from 'jquery'
let throttle=function(fun,maxTime){
  let timer;
  return function(){
    if(timer){
      clearTimeout(timer);
    }
    timer=setTimeout(fun,maxTime);
  }
}

let mapStringToHanzi=function(string){
  const mapObj={
    'all':'全部',
    'good':'精华',
    'share':'分享',
    'job':'工作',
    'ask':'问答'
  }
  return mapObj[string];
}

let showOrHideScroll=function(top){
  let defaulTop=top||500;
  let scrollTop=$(window).scrollTop();
  if(scrollTop>defaulTop)
      this.$backToTop().show();
  else
      this.$backToTop().hide();
}
export default{
  throttle:throttle,
  mapStringToHanzi:mapStringToHanzi,
  showOrHideScroll:showOrHideScroll,
}
