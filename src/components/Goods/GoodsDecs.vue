<template>
    <div class="goodsdecs-CON">
        <h3>ID为： {{ id }} iPhone X详情</h3>
        <hr>
        <p>iPhone X是美国Apple（苹果公司）于北京时间2017年9月13日凌晨1点，在Apple Park新总部的史蒂夫·乔布斯剧院会上发布的新机型。其中“X”是罗马数字“10”的意思，代表着苹果向iPhone问世十周年致敬。
iPhone X属于高端版机型，采用全新设计，搭载色彩锐利的OLED屏幕，配备升级后的相机，使用3D面部识别（Face ID）传感器解锁手机，支持AirPower(空中能量)无线充电。分为64GB、256GB两个版本，中国大陆起售价8316人民币 [1]  ，美国 [2]  起售价999美元，2017年10月27日预售，11月3号正式开卖 [3]  。
2018年2月，苹果官方宣称，所有提交到App Store商店的应用必须支持iPhone X的Super Retina显示屏。</p>
        <img src="https://i.loli.net/2019/02/14/5c653f8a8f503.jpg" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: this.$route.params.id,
                info: {}//图文数据
            }
        },
        methods: {
            // getGoodsDesc(){
            //     this.$axios.get('https://i.loli.net/2019/02/14/5c653f8a8f503.jpg')
            //     .then(res => {
            //         this.info.img = res.config.url;
            //         this.info.title = this.id + 'iphonex详情'
            //         console.log(this.info);
            //     })
            // }
        },
        // created(){
        //     this.getGoodsDesc()
        // }
    }
</script>

<style lang="scss" scoped>
.goodsdecs-CON{
    padding: 5px;
    h3{
        color: #226aff;
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
    }
    p{
        padding: 0;
    }
    img{
        width: 100%;
    }
}
</style>