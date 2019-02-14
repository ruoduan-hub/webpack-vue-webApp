<template>
    <div class="goodsinfo-container">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        
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
                        <!-- 数字组件 -->
                        <p>购买数量：<numbox @getcount="getSelectedCount" ></numbox></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToCar" >加入购物车</mt-button>
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
                <mt-button type="primary" size="large" plain @click="goDesc(id)" >图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)" >商品评论</mt-button>
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
            phoneimg: [],
            ballFlag: false,
            SeCount: 1
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
        },
        goDesc(id){
            //编程式导航，到图文介绍页
            this.$router.push({ name: "goodsdesc", params: { id }});
        },
        goComment(id){
            //编程式导航，到评论页
            this.$router.push({ name: "goodscomment", params: { id }});
        },
        addToCar(){
            //添加购物车
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el, done){
            //获取小球界面中的位置
            // 小球动画优化思路：
            // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
            // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
            // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
            // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
            // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
            const ballP = this.$refs.ball.getBoundingClientRect()
            //通过dom 拿到 badge
            const badge = document.getElementById('badge')
            .getBoundingClientRect()

            const xDist = badge.left - ballP.left;
            const yDist = badge.top - ballP.top;
            //拼接到对应位置
            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 0.3s cubic-bezier(.4,-0.3,1,.68)";
            done()
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            //当子组件向父组件传值的时候，把值保存到data上
            this.SeCount = count
            console.log('父组件拿到的数量值为:' + this.SeCount);
            
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
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top:400px;
    left: 150px;
}
</style>