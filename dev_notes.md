## 开发过程
+ vue init webpack cnode-vue
+ npm i
[重置样式和响应式布局（rem+font-size方案）]:#
+ npm i reset.css lib-flexible --save-dev  //重置样式和响应式布局（rem+font-size方案）
+ npm i github-markdown-css --save  //支持github编辑的文章,使用时要给包裹元素加上类名markdown-body
+ 引入iconfont.css   //采用阿里巴巴矢量图标库
+ npm install sass-loader --save-dev //使用scss编辑css
+ npm install vuex --save //引入vuex
+ npm install axios --save //引入axios,用于http请求,vue-resource过时了
+ npm install zepto --save //引入zepto,用于DOM操作



## 遇到的问题
+ sass-loader依赖node-sass，但安装node-sass时总是失败
    解决办法：在项目根目录下建.npmrc文件，内容为sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
+ z-index布局问题
    <div class="parent">
      <div class="child"></div>
    </div>
    parent的z-index不会影响child,使用z-index时注意同级元素
+ 给一个元素绑定多个class时（动态绑定）
    写法：<div :class="['vsidebar',{show:showSideBar}]">，指令要用""包起来，数组，对象语法绑定
+ sublime-text:ctrl+h 查找替换快捷键，开启正则匹配查找要用括号，1，3
+ router-link几种用法：1、直接跟路径```<router-link to="/me">```；2、跟对象```<router-link :to="{path:'/me'}">```
  注意to前加':'，对象用双引号包起来
+ 删除远程分支```git push  [远程名] :[分支名]```,注意远程名后空格,push,pull语法区别
+ vue组件，驼峰结构，引入时vSideBar，使用时<v-side-bar>;引入时vSidebar，使用时<v-sidebar>，注意区别
+ 单行文本，超出部分省略，要同时使用上```text-overflow: ellipsis;white-space:nowrap;overflow: hidden;width```四个属性
+ `<router-link :to="{path:'/detail',params: { id: item.id }}"/>`不会工作，必须使用name属性，命名路由
+ `<router-link :to="{ path: 'register', query: { plan: 'private' }}"/>`查询字符串用path
+ `<router-link @click='some'/>`，在HTML5模式下不能绑定click事件！！
+ 写提示插件步骤：1、写一个包含install方法的对象，在该方法内做一些dom操作；2、给对应的dom元素写样式;3、Vue.use(该对象)
+ 监听原生事件，官网上说加.native 不过```<list @scroll.native='someFunction'/>```这种形式好像没起作用
  ，目前是通过window.addEventListener('onScroll',someFunction)处理的
