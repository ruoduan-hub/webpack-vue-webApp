<template>
  <!-- 轮播图 -->
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="https://i.loli.net/2019/02/09/5c5ef04f4f7c0.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://i.loli.net/2019/02/09/5c5ef04f7026b.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://i.loli.net/2019/02/09/5c5ef04f6c8d0.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 6宫格 -->
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">好物分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">商品反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: yellow;
    }
    &:nth-child(3) {
      background-color: blue;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
    background: #fff;
    img{
        width: 60px;
        height: 60px;
    }
    li{
        border: none;
    }
    .mui-media-body{
        font-size: 13px;
        color: #666;
    }
}
</style>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据方法
      this.$axios
        .get("https://i.loli.net/2019/02/09/5c5edbf785f60.jpg")
        .then(res => {
          this.lunbotuList.url = res.config.url;
          this.lunbotuList.data = res.data;
          console.log(this.lunbotuList);
        })
        .catch(err => {
          Toast("加载失败，请检查网络");
        });
    }
  }
};
</script>