<template>
	<div>
		<ul>
			<li v-for="list in items">
				<img width="100%" :src="'images/'+list.image" alt="">
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		data(){
		  return{
		    
		  }
		},
		computed:{
		  ...mapGetters({
		    items:'imageList'
		  })
		},
		created(){
		  this.$store.dispatch('fetchImageList',this.$route.params.postId)
		  this.$store.dispatch('changeHeaderTitle',{title:'图片详情',path:'/post/index'})
		}
	}
</script>