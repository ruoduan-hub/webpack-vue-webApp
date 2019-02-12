<template>
    <div class="photoinfo-container">
        <h3>标题--- 本页面id是{{ id }}</h3>
        <p class="subtitle">
            <span>发表时间：2019-1-11</span>
            <span>点击：0次</span>
        </p>
        <hr>

        <!-- 缩略图 -->
        <div class="myimg">
            <vue-preview :slides="slide1"></vue-preview>
        </div>
        

        <!-- 图片内容区域 -->
        <div class="content">
            TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。安德斯·海尔斯伯格，C#的首席架构师，已工作于TypeScript的开发。2012年十月份，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后微软正式发布了正式版TypeScript 0.9，向未来的TypeScript 1.0版迈进了很大一步。
        </div>

        <!-- 放置评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<style lang="scss" scoped>
.photoinfo-container{
    padding: 5px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
    }
}
</style>

<script>
//导入评论子组件
import comment from '../subCPTS/comment.vue'
export default {
    data(){
        return {
            id: this.$route.params.id,
            lunbotuList: [],
            slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 600,
            h: 400
          }
        ]
        }
    },
    created(){
        this.getphotoinfo()
    },
    methods:{
        getphotoinfo(){
            this.$axios.get("https://i.loli.net/2019/02/09/5c5edbf785f60.jpg")
            .then(res => {
            this.lunbotuList.push(res.config.url);
            return this.$axios.get("https://i.loli.net/2019/02/09/5c5ef04f7026b.jpg")
            })
            .then(res =>{
                this.lunbotuList.push(res.config.url);
                return this.$axios.get("https://i.loli.net/2019/02/09/5c5ef04f6c8d0.jpg")
            })
            .then(res =>{
                this.lunbotuList.push(res.config.url);
                console.dir(this.lunbotuList);
            })
        }
    },
    components: {//注册评论子组件
        'cmt-box': comment
    }
}
</script>
