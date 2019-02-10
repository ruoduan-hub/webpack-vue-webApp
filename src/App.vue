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
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
            <router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>


<style lang="scss" scoped>
.app-container{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;//解决bar和header动画效果滚动条问题
}
.v-enter{
    opacity: abs($number: 0);
    transform: translateX(100%)
}
.v-leave-to{
    opacity: abs($number: 0);
    transform: translateX(-100%);
    position: absolute;//解决动画时，元素往上飘
}

.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}
</style>

<script>
export default {
    
}
</script>