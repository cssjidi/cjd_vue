<template>
	<footer class="tab-box" style="{display:isLast?'none':'block'}">
		<div class="flex-box">
			<div class="flex" v-for="list,index in lists" :class="urlPath.includes(list.id) && 'actived'">
				<router-link :to="list.link" :class="list.vertical?'column':'row'">
					<i>
						<icon :name="list.icon" scale="1.5"></icon>
					</i>
					<span>
						{{list.title}}
					</span>
				</router-link>
			</div>
		</div>
	</footer>
</template>
<script>
	export default{
		data(){
			return{
				defaultItems:[
					{
						icon:'heart-o',
						title:'图集',
						link:'/post/index',
						vertical:true,
						id:'post',
					},
					{
						icon:'search',
						title:'发现',
						link:'/found/index',
						vertical:true,
						id:'found',
					},
					{
						icon:'user-o',
						title:'我的',
						link:'/account/me',
						vertical:true,
						id:'account',
					},					
				]
			}
		},
		computed:{
			lists(){
				console.log(this.$route)
				return this.items || this.defaultItems
			},
			isLast(){
				return false
			},
			urlPath(){
				return this.$route.path
			}
		},
		props:['items'],
		methods:{
			goToPage(e){
				
			}
		}
	}
</script>
<style lang="scss">
	.tab-box{
		position: fixed;
		bottom:0;
		width:100%;
		height:1.65rem;
		background: #e6e6e6;
		z-index: 9999;
		font-size: 0.3rem;
		&:before{
			content: "";
		    position: absolute;
		    top: 0;
		    left: 0;
		    bottom: auto;
		    right: auto;
		    z-index: 15;
		    display: block;
		    box-sizing: content-box;
		    background-color: transparent;
		    border-top: 1px solid #ccc;
		    width: 100%;
		    height: 1px;
		    transform-origin: 50% 0;
		}
		a{
			color:#888;
		}
		.column{
			i,span{
				display: block;
				text-align: center;
			}
		}
		.row{
			i,span{
				display: inline-block;
			}
		}
		.flex-box{
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		.flex{
			flex:1;
			&.actived{
				a{
					color:#0e90d2;
				}
			}
		}
		
	}
</style>