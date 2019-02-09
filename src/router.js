//路由文件
//1.导入vue-router 包
import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'


var routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopContainer },
    { path: '/search', component: SearchContainer }
]

//3.创建路由对象
const router = new VueRouter({
    routes,
    linkActiveClass: 'mui-active'//设置默认覆盖高亮的类，默认类：router-link-active
})

//把路由对象暴露出去
export default router