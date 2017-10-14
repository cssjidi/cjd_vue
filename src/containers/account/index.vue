<template>
  <section>
    <div class="header">
      <div class="nav">
        <navi :is-home="isHome"/>
      </div>
    </div>
    <div class="content">
      <transition name="slide">
        <router-view class="child"></router-view>
      </transition>
    </div>
  </section>
</template>
<script>
  import navi from '../../components/common/header.vue'
  export default{
    data(){
      return{
        isHome:true
      }
    },
    created(){
      
    },
    computed:{
    },
    components:{
      navi
    },

  }
</script>
<style lang="scss">
  .header{
    width:100%;
    height:50px;
    z-index: 999;
    position:relative;
    .nav{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:50px;
    }
  }
  .content{
    position: relative;
    z-index: 1;
  }
</style>
