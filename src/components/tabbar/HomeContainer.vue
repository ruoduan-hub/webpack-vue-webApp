<template>
  <!-- 轮播图 -->
  <div>
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper> 

    <!-- 6宫格 -->
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="home/newslist"> 
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="home/photolist">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">好物点评</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
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
import swiper from '../subCPTS/swiper.vue'

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
      //axios 异步请求 轮播图床
    getLunbotu() {
      //获取轮播图数据方法
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
  components:{
    swiper
  }
};
</script>