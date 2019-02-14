<template>
    <div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" @change="countChange" ref="numbox" value="1" />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
//导入mui 的js
import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return {}
        },
        mounted(){
            //初始化数字选择框
            mui('.mui-numbox').numbox();
            console.log('props接收的到商品剩余：'+ this.max)
        },
        methods:{
            countChange(){
                //每当文本变化触发，立即把最新的数据通过实践调用传递给父组件
                console.log(this.$refs.numbox.value);
                this.$emit('getcount', parseInt(this.$refs.numbox.value))
                
            }
        }
    }
</script>

<style scoped>

</style>