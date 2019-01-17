<template>
	<div class="card text-dark bg-light mb-3">
		<div class="card-heder">联系我们</div>
		<div class="card-body">
			<h4 class="card-title">联系我们</h4>
			<p class="card-text">27732357@qq.com</p>
			<router-link :to="{name:'phoneLink'}">电话</router-link>
			<router-link :to="{name:'linkmanLink'}">联系人</router-link>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
