import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/demo/demo'
import order from '@/demo/order'
import sy from '@/demo/sy'
import dz from '@/demo/dz'
import tabbar from '@/tabbar/tabbar'
import list from '@/demo/list'
import swiper from '@/demo/swiper'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: demo,
      meta: {
        title: '乡墅众包——专业的自建房设计施工平台'
      }
    },
    {
      path: '/',
      name: 'sy',
      component: sy
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/dz',
      name: 'dz',
      component: dz
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: tabbar
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        title: '乡墅建房众包平台'
      }
    },
    {
      path: '/swiper',
      name:'swiper',
      component: swiper
    }
  ]
})
