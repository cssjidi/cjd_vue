<template>
  <section class="list-box">
    <ul>
      <li v-for="list in items">
        <div class="item">
          <router-link class="link" :to="{ name: 'PostImage', params: { postId: list.postId }}">
            <img :src="'images/'+list.thumb">
            <p>{{list.title}}</p>
          </router-link>
        </div>
      </li>
    </ul>
    <div class="center">
      <button v-if="hasMore" v-on:click="nextPage()">加载更多
        <i><icon name="angle-down" scale="1.6"></icon></i>
      </button>
    </div>
    <input type="hidden" v-model="len">
  </section>
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
        this.$store.dispatch('changeHeaderTitle',{title:'发现',path:'/found/index'})
    },
    methods:{
      nextPage(){
        this.$store.dispatch('fetchPostList',{page:2})
      }
    }
  }
</script>
<style lang="scss">
  .list-box{
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        flex:0 0 50%;
        height:12rem;
        position:relative;
        .item{
          margin:0.2rem 0;
          padding:0 0.2rem;
        }
        p{
        }
        img{
          width: 100%;
        }
      }
    }
    .center{
      text-align:center;
    }
    button{
      font-size:0.4rem;
      background:#0099FF;
      border:none;
      color:#fff;
      padding:0.3rem 2.4rem 0.3rem 2rem;
      margin:0.5rem 0;
      position:relative;
      text-align: center;
      &:active{
        border:none;
      }
      &:focus{
        border:none;
      }
      i{
        position:absolute;
        right:1.7rem;
        top:0.16rem;
      }
    }
  }
</style>