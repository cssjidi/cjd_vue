<template>
    <header class="wu_header">
        <span class="icon" v-on:click="goBack()" v-if="isHome">
          <icon name="angle-left" scale="1.6"></icon>
        </span>
        <h1 class="mui-title">{{title}}</h1>
    </header>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    data(){
      return{

      }
    },
    props:['name','isHome'],
    computed:{
      ...mapGetters({
        title: 'headerTitle',
        path:'backPath'
      })
  },
  mounted() {
  },
  methods:{
    goBack(){
      this.$router.push({
        path: this.path
      });
    }
  },
  }
</script>
<style lang="scss">
    h1{
        margin:0;
        padding:0;
    }
    .icon{
      position: absolute;
      left:0.3rem;
      top:0.3rem;
      z-index: 1000;
    }
    .wu_header {
        height: 44px;
        padding-right: 10px;
        padding-left: 10px;
        border-bottom: none;
        -webkit-box-shadow: 0 1px 6px #ccc;
        box-shadow: 0 1px 6px #ccc;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        top: 0;
        background-color: #f7f7f7;
        .mui-title {
            font-size: 17px;
            font-weight: 500;
            line-height: 44px;
            position: absolute;
            display: block;
            width: 100%;
            margin: 0 -10px;
            padding: 0;
            text-align: center;
            white-space: nowrap;
            color: #000;
        }
        a{
            display: inline-block;
            color:#0062cc;
            float: left;
            font-size: 24px;
            position: relative;
            z-index: 20;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-right: -10px;
            margin-left: -10px;
            padding-right: 10px;
            padding-left: 18px;
            font-weight: 400;
            font-style: normal;
            line-height: 1;
            display: inline-block;
            text-decoration: none;
            -webkit-font-smoothing: antialiased;
        }
    }
</style>
