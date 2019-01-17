import Vue from 'vue'
import 	VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Register from './components/Register'
import About from './components/about/About'
import Login from './components/Login'
import Contact from './components/about/Contact' 
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'  
import Phone from './components/about/contact/Phone'
import Linkman from './components/about/contact/Linkman'

Vue.use(VueRouter)

const routes = [
	{path:'/',name:'homeLink',component:Home},
	{path:'/Menu',name:'menuLink',component:Menu},
 	{path:'/Admin',name:'adminLink',component:Admin,
	//beforeEnter:(to,from, next)=>{
// 		//路由独享守卫
// 	}
},
	{path:'/About',name:'aboutLink',redirect:'/about/history',component:About,children:[
		{path:'/about/contact',name:'contactLink',component:Contact,redirect:'/about/contact/phone',children:[
			{path:'/about/contact/phone',name:'phoneLink',component:Phone},
			{path:'/about/contact/linkman',name:'linkmanLink',component:Linkman}
		]},
		{path:'/about/delivery',name:'deliveryLink',component:Delivery},
		{path:'/about/history',name:'historyLink',component:History},
		{path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
	]},
	{path:'/Register',name:'registerLink',component:Register},
	{path:'/Login',name:'loginLink',component:Login},
	{path:'*',redirect:'/'}
]
const router = new VueRouter({
	routes,
	mode:'history'
})

//全局守卫
// router.beforeEach((to,from,next)=>{
// 	// //判断 store.gettes.isLogin === false
// 	 if(to.path == '/Login' || to.path == '/Register'){
// 		 next();
// 	 }else{
// 		 alert('还没有登录')
// 		 next('/Login');
// 	 }
// })

//后置钩子
// router.afterEach((to,from) =>{
// 	
// })

new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
