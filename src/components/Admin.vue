<template>
	<h1>Admin</h1>
</template>

<script>
	export default {
		data() {
			return {
				name:"Henry"
			}
		},
		beforeRouteEnter:(to,from,next) => {
			next(vm=>{
				alert("Hello" + vm.name)
			})
		}
	}
</script>

<style>

</style>