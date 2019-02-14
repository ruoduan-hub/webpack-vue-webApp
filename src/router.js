//路由文件
//1.导入vue-router 包
import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/Goods/GoodsList.vue'
import GoodsInfo from './components/Goods/GoodsInfo.vue'
import GoodsDecs from './components/Goods/GoodsDecs.vue'
import GoodsComment from './components/Goods/GoodsComment.vue'


var routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo },
    { path: '/home/goodsdesc/:id', component: GoodsDecs, name:'goodsdesc' },
    { path: '/home/goodscomment/:id', component: GoodsComment, name:'goodscomment' }
]

//3.创建路由对象
const router = new VueRouter({
    routes,
    linkActiveClass: 'mui-active'//设置默认覆盖高亮的类，默认类：router-link-active
})

//把路由对象暴露出去
export default router