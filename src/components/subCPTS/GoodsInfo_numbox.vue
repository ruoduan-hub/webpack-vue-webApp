<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='999'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" />
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
            mui('.mui-numbox').numbox()
        }
    }
</script>

<style scoped>

</style>