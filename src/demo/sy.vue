<template>
      <div id="sy">
            <div class="top_banner">
                  <img class="banner_img" src="../index/banner1.jpg" alt="">
            </div>
            <div class="serch">
               <input type="srech">
               <img src="../../static/images/serch.png" alt="">
            </div>
            <div class="mian">
                  <Tabs :animated="false">
                      <TabPane label="建房服务">
                              <div class="item" v-for="item in items">
                                 <router-link :to="{path:'list'}">
                                    <div class="item_l">
                                          <img :src='item.img' />
                                    </div>
                                    <div class="item_r">
                                          <div class="item_title">{{item.title}}</div>
                                          <div class="item_jg">
                                                <div class="price">{{item.price}}</div>
                                                <div class="number">{{item.number}}</div>
                                          </div>
                                          <div class="item_information">
                                              <div>{{item.school}}</div>
                                              <div>{{item.dz}}</div>
                                          </div>
                                    </div>
                                 </router-link>  
                               </div>
                      </TabPane>
                      <TabPane label="店铺">第二页的内容</TabPane>
                      <TabPane label="定制需求">第三页的内容</TabPane>
                  </Tabs>
                   <div class="fw"><a href="#">注册为服务商</a></div>
            </div>
            <footerNav></footerNav>
      </div>
</template>
<script>
import footerNav from '@/tabbar/tabbar.vue'
export default {
  data () {
     return {
        items :[
          {img:'../../static/images/item.png',title:'【12年专家定制】 个性化别墅建筑设计个性化别墅建筑设计',price:'2000元/套',number:'已成交376笔',school:'长沙师范学院',dz:'湖南尝试'},
          {img:'../../static/images/item.png',title:'【12年专家定制】 个性化别墅建筑设计个性化别墅建筑设计',price:'2000元/套',number:'已成交376笔',school:'长沙师范学院',dz:'湖南尝试'},
          {img:'../../static/images/item.png',title:'【12年专家定制】 个性化别墅建筑设计个性化别墅建筑设计',price:'2000元/套',number:'已成交376笔',school:'长沙师范学院',dz:'湖南尝试'}
        ]
     }
  },
  components: {
    footerNav
  },
}
</script>

<style>
a{
  text-decoration: none;
}
li,ul{
  list-style: none;
  margin:0;
  padding:0;
}
.none{
  display: none;
}
body{
  background: #fbfbfb;
  padding-bottom:4rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#fbfbfb;
  text-align: center;
  color: #2c3e50;
  font-size:0.7rem;
}
/***********top*************/
.top_banner{
    width:100%;
    height:14rem;
}
.banner_img{
  width:100%;
  height:14rem;
}
/***********搜索*************/
.serch{
  width:100%;
  height:5rem;
  background: #ffffff;
  position: relative;
}
.serch input{
  width: 90%;
  height:1.1rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  background: #fbfbfb;
  box-sizing:border-box;
  padding:0 1.5rem;
  margin-top: 0.2rem;
}
.serch img{
  position: absolute;
  right:1rem;
  top:1.5rem;
}
/***********主体部分*************/
.mian{
 width:100%;
 margin-top:0.5rem;
 background: #ffffff;
 display: flex;
 flex-direction: column;
 box-sizing: border-box;
 position:relative;
}
/***********顶部*************/
.mian_top{
 display: flex;
 height:1.5rem;
 line-height: 1.5rem;
 border-bottom: 2px solid #f7f7f7;
}
.mian_top div{
  font-size: 0.4rem;
 box-sizing: border-box;
 padding:0 0.5rem;
}
.on{
  color:#8ed5cf;
  border-bottom: 2px solid #8ed5cf;
}
.fw{
  font-size: 1rem;
  position: absolute;
  right:0.4rem;
  top:1.3rem;
}
.jf_text,.dp_text,dp_text{
  display: flex;
  flex-direction: column;
}
/***********item*************/
.item{
  display: flex;
  box-sizing: border-box;
  padding:1.5rem 1.5rem;
  border-bottom: 2px solid #f7f7f7;
}
.item_l{
  width:5rem;
  height:6rem;
  margin-right: 0.2rem;
}
.item_l img{
  width:5rem;
  height:6rem;
}
.item_r{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.item_title{
  font-size: 1.2rem;
  text-align: left;
}
.item_jg{
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
  margin:0.2rem 0;
}
.price{
  color:#e9661a;
}
.number{
  color:#919191;
}
.item_information{
  font-size: 1rem;
  display: flex;
}
.item_information div{
  color:#919191;
  border: 1px solid #919191;
  margin-right:0.2rem;
  padding:0 0.1rem;
}
/************自定义插件***************/
.mian .ivu-tabs-tab{
   height:4rem;
   line-height:4rem;
   font-size:1.2rem;
   padding:0 1.5rem;
}
.ivu-tabs-tab-active{
   border-bottom: 2px solid #2d8cf0;
}
.ivu-tabs-ink-bar{
  display: none!important;
}
/***************router-link***********************/
.item a{
   display: flex;
   justify-content: space-between;
   width:100%;
}
</style>
