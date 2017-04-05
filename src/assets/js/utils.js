let throttle=function(fun,maxTime){
  let timer;
  return function(){
    if(timer){
      clearTimeout(timer);
    }
    timer=setTimeout(fun,maxTime);
  }
}
export default{
  throttle:throttle
}
