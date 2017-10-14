<template>
	<div>
		<ul>
			<li v-for="list in items" style="display:inline-block;width:50%;over-flow:hidden;">
				<router-link class="link" :to="{ name: 'image', params: { postId: list.postId }}">
					<img :src="'images/'+list.thumb" width="100%" alt="">
					<div>{{list.title}}</div>
				</router-link>
			</li>
		</ul>
		<button v-if="hasMore" v-on:click="nextPage()">加载更多</button>
		<input type="hidden" v-model="len">
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
		    items:'postList',
		    len:'postListLength',
		    hasMore:'hasMore'
		  })
		},
		created(){
		  	this.$store.dispatch('fetchPostList')
		},
		methods:{
			nextPage(){
				this.$store.dispatch('fetchPostList',{page:2})
			}
		}
	}
</script>