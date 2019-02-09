//入口文件
import Vue from 'vue'


//导入MUI 样式
import './lib/css/mui.min.css'


//按需导入mint-ui 组件 
import { Header  } from 'mint-ui'
Vue.component(Header.name, Header)

//导入app 根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})
