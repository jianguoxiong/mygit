<template id='tabbar'>
    <div class="bottom_nav">
        <ul>
            <li v-for="item in items" @click="rdt(item.Text)">
                <router-link :to='{path:item.rt}'>
                    <div class="images"><img :src="isSelected === item.Text?item.ImgSrc1:item.ImgSrc"/></div>
                    <p :class="isSelected === item.Text?fontCe:fontMr">{{item.Text}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isSelected: '首页',
      fontMr: 'fontMr',
      fontCe: 'fontCe',
      items: [{ImgSrc: '../../static/images/sy@x1.png', ImgSrc1: '../../static/images/sy@x2.png', Text: '首页',rt: '/'}, 
        {ImgSrc: '../../static/images/dz@x1.png', ImgSrc1: '../../static/images/dz@x2.png', Text: '定制需求', rt: 'dz'},
        {ImgSrc: '../../static/images/order@x1.png', ImgSrc1: '../../static/images/order@x2.png', Text: '我的订单', rt: 'order'}]
    }
  },
  methods: {
    rdt: function (Text) {
      this.isSelected = Text
    }
  }
}
</script>

<style>
/***************底部导航********************/
.bottom_nav {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background: #ffffff;
}
.bottom_nav ul {
  width: 100%;
  display: flex;
  height: 5rem;
  justify-content: space-around;
  padding: 0.2rem 0;
}
.bottom_nav li {
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem;
}
.nav_font {
  font-size: 0.4rem;
}
.fontMr{
  color:#000;
}
.fontCe{
  color:#2d8cf0
}
</style>
