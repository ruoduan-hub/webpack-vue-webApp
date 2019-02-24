<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" @change="countChange"
         ref="numbox" :value="initcount" readonly />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
//导入mui 的js
import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return {
               count :this.$store.state.car.count
            }
        },
        mounted(){
            //初始化数字选择框
            mui('.mui-numbox').numbox();
            console.log('props接收的到商品剩余：'+ this.max)
        },
        methods:{
            countChange(){
                //数量改变了
                this.$store.commit('updataGoodsInfo', {
                    count: this.$refs.numbox.value
                })
            }
        },
        props: ['initcount']
    }
</script>

<style scoped>

</style>