<template>
  <div>
    <app-banner :listImg="listImg"></app-banner>
    <div class="list-title">CAD制图 景观施工图 庭院绿化 庭院设计 庭院景观 室内设计</div>
    <div class="jg">
        <div class="jg_l">2000元/套</div>
        <div class="jg_r">销量1000</div>
    </div>
    <div class="dp">
          <div class="dp_img">
            <img src="../../src/index/item.jpg">
          </div>
          <div class="dp_name">
              <p class="dp_title">嘻嘻哈哈哈设计工作室</p>
              <p class="dp_dz">湖南长沙</p>
          </div>
    </div>
    <div class="section">
         服务详情
    </div>
  </div>
</template>
<script>
import swiperBox from '@/demo/swiper.vue'
import a from '../../static/images/lb1.jpg'
import b from '../../static/images/lb2.jpg'
import c from '../../static/images/lb3.jpg'
export default {
    data() {
        return {
            listImg: [{
                url: a
            }, {
                url: b
            }, {
                url: c
            }]
        }
    },
    components: {
        'app-banner': swiperBox
    }
}
</script>
<style>
body{
  background:#f7f7f7;
}
.list-title{
  font-size: 1.3rem;
  box-sizing: border-box;
  text-align: left;
  padding:0.5rem 1.5rem;
  background: #fff;
}
.jg{
  display: flex;
  justify-content: space-between;
  padding:0 1.5rem;
  height: 3rem;
  line-height: 3rem;
  background: #fff;
}
.jg_l{
  color: coral;
  font-size: 1.2rem;
  font-weight: bold;
}
.jg_r{
  font-size: 1rem;
  color: darkgrey;
}
.dp{
  margin: 1rem 0;
  background: #fff;
  display: flex;
  padding:1rem 1rem;
}
.dp_img{
  width:4rem;
  height:4rem;
  margin-right: 1rem;
}
.dp_img img{
  width:4rem;
  height:4rem;
}
.dp_name{
  height:4rem;
  display: flex;
  flex-direction: column;
}
.dp_title{
  height:3rem;
  font-size: 1.2rem;
  line-height: 2rem;
}
.dp_dz{
  font-size: 1rem;
  color:darkgrey;
}
.section{
  background: #ffffff;
  text-align: center;
  height:20rem;
}
/***************swiper 自定义*****************/
.swiper-container{
  height:15rem!important;
}
.swiper-slide{
  height:15rem!important;
  background-size: auto 15rem!important;
}
.swiper-pagination .swiper-pagination-bullet-active{
  background:#fff!important;
}
</style>

