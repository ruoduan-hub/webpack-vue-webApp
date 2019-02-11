<template>
    <div class="cmt-cont">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="mypl" maxlength="120" placeholder="最多bb 120字" name="" id="" cols="30" rows="10"></textarea>
        <mt-button @click="pushMypl" type="primary" size="large" >发表评论</mt-button>

        <div v-for="(item, i) in comments" :key="i" class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第{{ i+1 }}楼&nbsp;&nbsp;匿名用户&nbsp;&nbsp;发表时间:2019-1-19&nbsp;&nbsp;</div>
                <div class="cmt-body">
                    {{ item.msg }}
                </div>
            </div>
        </div>

        <mt-button @click="getMore" plain type="danger" size="large" >加载更多</mt-button>
    </div>

</template>


<style lang="scss" scoped>
    .cmt-cont{
        font-size: 18px;
        textarea{
            font-size: 15px;
            height: 120px;
            margin: 0;
        }
        .cmt-list{
            margin: 8x 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    background-color: rgb(175, 169, 169);
                    line-height: 30px;
                }
                .cmt-body{
                    line-height: 40px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>


<script>
import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            pageIndex: 1,//默认是第一页
            comments:[],
            mypl:''
        }
    },
    created(){
        this.getComment()
    },
    methods: {
        getComment () {//获取评论
            this.$axios.get("/apiNews/data" + "?pageindex=" + this.pageIndex)
            .then(res => {
                let newsArr = res.data.data
                newsArr.forEach(element => {
                let meg = JSON.parse(element.content);
                let plArr = meg.filter_words;
                plArr.forEach(element =>{
                    this.comments.push({
                        msg: element.name
                    })  
                })
                });
            })
            .catch(err =>{
                Toast('评论加载失败')
            })
        },
        getMore(){//加载更多
            Toast('正在加载...');
            this.pageIndex++;
            this.getComment();
            
        },
        pushMypl(){
            if (this.mypl == '') {
                return Toast('评论不能为空哦~')
            }
            this.comments.unshift({
                msg: this.mypl
            })
            this.mypl = ''
            Toast('发布成功')
        }
    },
    props: ['id']//父组件传值
}
</script>