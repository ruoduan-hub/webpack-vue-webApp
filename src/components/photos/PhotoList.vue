<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a v-for="(item, i) in classify" :key="i" class="mui-control-item">
							{{ classify[i] }}
						</a>
					</div>
				</div>

			</div>
    
    
        <!-- 图片列表 -->
        <ul class="photp-list">
            <router-link v-for="(item, i) in imgList" :key="i" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.img">
                <div class="info">
                    <h1 class="info-title"> 图片标题  </h1> 
                    <div class="info-body">{{ item.title }}</div>
                </div>
            </router-link>
        </ul>


    </div>
</template>


<style lang="scss" scoped>
*{
    touch-action: auto;//优化手指滑动
}

.photp-list{
    list-style: none;
    margin: 0;
    padding: 15px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {//懒加载样式
            width: 40px;
            height: 300px;
            margin: auto;
        }

        .info{
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, .4);
            width: 100%;
            max-height: 80px;
            .info-title {
                font-size: 15px;
            }
            .info-body {
                font-size: 13px;
            }
        }
    }
}
</style>



<script>
//导入mui的js
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data(){
        return{
            classify: ['全部','美女','明星','时尚','家居','性感','个性','科技'],
            imgList: [] //图片列表
        }
    },
    methods:{
        getMXimg(){
            this.$axios('/apiNews/img')
            .then(res =>{
                let newsArr = res.data.data
                newsArr.forEach((element,i) => {
                let meg = JSON.parse(element.content);
                let img =meg.share_info.weixin_cover_image.url;
                this.imgList.push({
                    img: img,
                    title: meg.title,
                    id: i + 1
                })
                console.log(this.imgList)
        });
                
            })
        }
    },
    created(){
        this.getMXimg()
    },
    mounted(){//当组件中的dom结构北渲染好了，才能初始化滚动条，不然卡死，这是一个坑！！！
        //初始化 mui 的顶部滑动条的scroll控件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        //err：mui.min.js:946 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
        //webpack 启用了严格模式和 包冲突了
    }

}
</script>