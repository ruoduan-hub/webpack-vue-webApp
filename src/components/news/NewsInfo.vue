<template>
    <div class="newsinfo-ct">
        <h3 class="title"> {{ this.id }} 的标题 </h3>
        <p class="subtitle">
            <span>{{ this.id }} 的发表时间：xxxx</span>
            <span>{{ this.id }} 的点击：66次</span>
        </p>
        <hr>
        <div class="content">
            <p>id {{ this.id }} 的正文</p>
        </div>

        <!-- 评论子组件 -->
        <comment-box></comment-box>
    </div>

</template>


<style lang="scss" scoped>
.newsinfo-ct{
    padding: 0 5px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: rgb(241, 92, 92);
    }
    .title:hover{
      color: rgb(238, 36, 36);  
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
        margin: 0 13px;
    }
    .content{
        font-size: 13px;
        color: rgb(105, 105, 105);
        img{
            width: 100%;//解决图片大小展示，要把scoped去掉 原因复杂
        }
    }
}
</style>



<script>
//导入评论 子组件
import comment from '../subCPTS/comment.vue'



export default {
    data(){
        return {
            id:this.$route.params.id,//挂载url传过来的id
            newsinfo: {}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo () {//获取新闻详情
            this.$axios.get('/apiNews/'+ this.id)
            .then(res =>{
                let newsArr = res.data.data
                newsArr.forEach(element => {
                let meg = JSON.parse(element.content); 
            });
            })
            .catch(err =>{
                Toast('获取新闻失败')
            })

        }
    },
    components: {//注册子组件
        "comment-box": comment
    }
}
</script>