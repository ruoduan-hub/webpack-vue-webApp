<template>
    <div class="shopcar-container">
        <!-- 商品列表区域 -->
        <div class="goods-list">
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="this.$store.getters.getGoodsSelected" ></mt-switch>
                        <img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg!q80.dpg.webp" alt="">
                        <div class="info">
                            <h1>iPhone X (A1865) 64GB 深空灰色</h1>
                            <p>
                                <span class="price">￥7989</span>
                                <numbox :initcount="count"></numbox>
                                <a href="#" @click.prevent="remove">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计：</p>
                        <p>已勾选 <span class="red"> {{ this.$store.state.car.map(item =>{return item.count}) }} </span> 件商品，总价：<span class="red">{{ this.$store.state.car.map(item =>{return item.price * item.count}) }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
		</div>
    </div>
    
</template>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .goods-list{
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }
            img{
                width: 60px;
                height: 60px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                .price{
                    color: red;
                    font-weight: 700
                }
            }
        }
        .mui-card{
            .jiesuan{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .red{
                    color: red;
                    font-weight: 700;
                    font-size: 16px;
                }
            }
        }
    }
</style>

<script>
import numbox from '../subCPTS/shopcar_numbox.vue'
export default {
    data(){
        return {
            id: [],
            count: 0,
            price: ''
        }
    },
    created() {
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            //获取store 中的商品数据
            this.$store.state.car.forEach(item =>{
                this.count += item.count
                console.log(item.count);
            })     
        },
        remove () {
            localStorage.removeItem('car')
        },
        selectedChanged(){
            console.log(1)
        }
    },
    components: {
        numbox
    }
}
</script>