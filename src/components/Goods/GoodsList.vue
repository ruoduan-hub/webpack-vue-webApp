<template>
    <div class="goods-list">
       <div v-for="(im,i) in 3" :key="i" class="goods-item">
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
    
}
</script>