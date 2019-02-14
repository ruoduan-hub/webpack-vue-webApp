<template>
    <div>
        <!-- 需要使用者传递lunbotuList，父组件向子组件传值 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
        <img :src="item" alt="" :class="{'full': isfull}">
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>

<script>
    export default {
        props: ['lunbotuList','isfull']
    }
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align: center;
    // &:nth-child(1) {
    //   background-color: red;
    // }
    // &:nth-child(2) {
    //   background-color: yellow;
    // }
    // &:nth-child(3) {
    //   background-color: blue;
    // }
    img {
      height: 100%;
    }
  }
}
.full{
    width: 100%;
}
</style>