//入口文件
import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入axios
import axios from 'axios'
//axios.defaults.baseURL='http://www.escook.cn:3000 '
//安装 axios
Vue.prototype.$axios = axios//全局注册axios

//导入MUI 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//按需导入mint-ui 组件 
import { Header, Swipe, SwipeItem  } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入路由
import router from './router.js'


//定义全局过滤器
// Vue.filter('dateFormat',(dataStr, pattern='YYYY-MM-DD HH:mm:ss') =>{

// })

//导入app 根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
