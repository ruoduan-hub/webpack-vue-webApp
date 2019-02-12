<template>
    <div class="app-container">

        <!-- 顶部header -->
        <mt-header fixed title="vue-webapp"></mt-header>
        
        <!-- 路由 router-view -->
        <transition>
            <router-view></router-view>
        </transition>


        <!-- tab-bar -->
        	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-my" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
            <router-link class="mui-tab-item-my" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>


<style lang="scss" scoped>
.mint-header {
    z-index: 999;
}
.app-container{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;//解决bar和header动画效果滚动条问题
}
.v-enter{
    opacity: 0;
    transform: translateX(100%)
}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;//解决动画时，元素往上飘
}

.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}

//改类名 解决tabbar 无法切换的问题
.mui-bar-tab .mui-tab-item-my.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-my {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-my .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-my .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

<script>
export default {
    
}
</script>