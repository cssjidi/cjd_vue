<template>
	<section class="scroll-tab">
		<span v-for="list,index in lists" @touchstart="touchStart" @click="onClick(index)" :class="tagIndex===index && 'actived'">
			{{list.title}}
			<sup v-if="!!list.badge">{{list.badge}}</sup>
		</span>
	</section>
</template>
<script>
	export default{
		data(){
			return{
				defaultItems:[
					{
						title:'国内新闻',
						badge:'hot',
						link:'gnxw'
					},
					{
						title:'国内新闻',
						badge:'hot',
						link:'gnxw'
					},
					{
						title:'国内新闻',
						badge:'hot',
						link:'gnxw'
					},
					{
						title:'国内新闻',
						badge:'hot',
						link:'gnxw'
					},
				]
			}
		},
		props:['items','tagIndex'],
		computed:{
			lists(){
				return this.items || this.defaultItems
			}
		},
		methods:{
			onClick(index){
				this.$emit('onClick',index)
			},
			touchStart(e){
				console.log(e)
			}
		}
	}
</script>
<style lang="scss">
	.scroll-tab{
		margin:0.5rem 0;
		span{
			cursor: pointer;
			padding: 0.2rem 0.5rem;
			&.actived{
				background:#d90f3a;
				color:#fff;
			}
			sup{
				position:absolute;
				margin-top:-0.3rem;
			}
		}
	}
</style>