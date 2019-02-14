<template>
    <div class="goodsinfo-container">
        <!-- 商品轮播图 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbotuList="phoneimg" :isfull="false"></swiper>
				</div>
			</div>
		</div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header"> Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机 id：{{ id }}</div>
			    <div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">
                            市场价：<del>￥ 8299 </del>&nbsp;&nbsp;销售价：<span class="now_price">￥7989</span>
                        </p>
                        <p>购买数量：<numbox></numbox></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" >加入购物车</mt-button>
                        </p>
                    </div>
				</div>
		</div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：LD-124FS34624</p>
                        <p>库存情况：666</p>
                        <p>上架时间：2018-4-21</p>
					</div>
				</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="large" plain >图文介绍</mt-button>
                <mt-button type="danger" size="large" plain >商品评论</mt-button>
            </div>
		</div>
    </div>
</template>

<script>
import swiper from '../subCPTS/swiper.vue'//导入轮播图组件
import numbox from '../subCPTS/GoodsInfo_numbox.vue'//导入数字选择框组件

export default {
    data() {
        return {
            id: this.$route.params.id,//抽离路由参数
            phoneimg: []
        }
    },
    methods: {
        getphoneimg(){
            this.$axios.get('https://i.loli.net/2019/02/13/5c63fb8246c59.jpg')
            .then(res =>{
                this.phoneimg.push(res.config.url)
                return this.$axios.get('https://i.loli.net/2019/02/13/5c63fb81f20a6.jpg')
            })
            .then(res =>{
                this.phoneimg.push(res.config.url)
                return this.$axios.get('https://i.loli.net/2019/02/13/5c63fb8222d4a.jpg')
            })
            .then(res =>{
                    this.phoneimg.push(res.config.url)
                    console.log(this.phoneimg)
            })
        }
    },
    created(){
        this.getphoneimg()
    },
    components:{
        swiper,
        numbox
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
}
.mui-card-footer{
    display: block;
    button{
        margin: 15px 0;
    }
}
</style>