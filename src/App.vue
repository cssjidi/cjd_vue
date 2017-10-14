<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    beforeCreate(){

    },
    created(){
    },
    computed:{

    },
    beforeMount(){

    },
    mounted(){
    }
  }
</script>
<style lang="scss">
  @import "./scss/media.scss";
  @import "./scss/reset.scss";
  @import "./scss/form.scss";
  @import "./scss/common.scss";
  body{
    background-color: #fff;
  }
  .container{
    width: 100%;
    margin:0 auto;
    height: 100%;
    background-color: #fff;
  }
  .nav{
    position: absolute;
    width: 100%;
    left: 40px;
    bottom:-50px;
  }
  .nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav ul li{
    width: 108px;
    height: 48px;
    line-height: 48px;
    border:1px solid #dadada;
    text-align: center;
    float:left;
  }
  .nav ul li a{
    text-decoration: none;
  }
  .loading{
    width:100%;
    height:100%;
    top:50%;
    margin-top:-21px;
    font-size:32px;
    font-weight:lighter;
    position:absolute;
    text-align:center;
    letter-spacing:1px;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
</style>
