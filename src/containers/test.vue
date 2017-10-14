<template>
	
</template>
<script>
	import axios from 'axios'
	export default{
		created(){
			axios({
				url:'/authorizations/key',
				method:'post',
				data:{
					key:'1234123'
				}
			}).then(data=>console.log(data))
		}
	}
</script>