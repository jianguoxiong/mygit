<template>
	<div>
		<h1>Home</h1>
		<button class="btn btn-success" @click="goToMenu">Let's order!</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goToMenu(){
				// this.$router.go(-1)
				// this.$router.replace('/menu')
				// this.$router.replace('/menu')
				this.$router.push('/menu')
			}
		}
	}
</script>

<style>

</style>
