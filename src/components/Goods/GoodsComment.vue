<template>
    <div>
        <cmtbox></cmtbox>
    </div>
</template>

<script>
//评论子组件
import cmtbox from '../subCPTS/comment.vue'

    export default {
        data(){
            return {
                id:this.$route.params.id
            }
        },
        components:{
            cmtbox
        }
    }
</script>

<style lang="scss" scoped>

</style>