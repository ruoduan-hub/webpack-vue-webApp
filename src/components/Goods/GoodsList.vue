<template>
    <div class="goods-list" tag="div" @click="goDetail(id)">
       <div v-for="(item,i) in nub" :key="i" class="goods-item">
            <img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg!q80.dpg.webp" alt="">
            <h1 class="title">Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机</h1>
            <div class="info">
                <p class="top">
                    <span class="now">￥7900</span>
                    <span class="old">￥8300</span>
                </p>
                <p class="but">
                    <span>年货节</span><span>剩余66</span>
                </p>
            </div>
       </div>
       <!-- 加载更多 -->
       <mt-button @click="morelist" type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item{
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        width: 49%;
        margin: 4px 0;
        padding: 2px;
        flex-direction: column;
        justify-content: space-between;
        min-height: 295px;
        img{
            width: 100%;
        }
        .title{
            font-size: 15px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .top{
                .now{
                    color: red;
                    font-weight:bold; 
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .but{
                display: flex;
                justify-content:space-between;
                font-size: 13px;
            }
        }
    }
}
</style>


<script>
export default {
    data(){
        return {
            nub: 10,
            id: 6
        }
    },
    methods: {
        getgoodslist () {//获取商品列表
            this.axios.get()
            .then()
            .catch(err => {
                Toast('网络连接不佳')
            })
        },
        morelist(){
           this.nub+=6
        },
        goDetail(id){
            //使用js 进行路由导航
            this.$router.push('goodsinfo/' + id);
        }
    }
}
</script>