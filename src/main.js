//入口文件
import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//注册-Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {//this.$store.state.xxx
    car: []//购物车商品数据，用数组存储
  },
  mutations: {//this.$store.commit('fn-name', '按需传递唯一参数')

  },
  getters: {//this.$store.getters.xxx

  }
})

//安装图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.8,
    tapToClose: true,
    tapToToggleControls: false
  })

//导入axios
import axios from 'axios'
//axios.defaults.baseURL='http://www.escook.cn:3000 '
//安装 axios
Vue.prototype.$axios = axios//全局注册axios

//导入MUI 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//按需导入mint-ui 组件 
// import { Header, Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);//懒加载

//全局导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//导入路由
import router from './router.js'
//导入格式化时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

//导入app 根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})
