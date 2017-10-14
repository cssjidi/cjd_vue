<template>
  <section>
    <div class="header">
      <div class="nav">
        <navi v-bind:is-home="isHome"></navi>
      </div>
    </div>
    <transition name="slide">
      <router-view class="child"></router-view>
    </transition>
  </section>
</template>
<script>
  import navi from '../../components/common/header.vue'
  export default{
    data(){
      return{
      }
    },
    components:{
      navi
    },
    computed:{
      isHome(){
        return this.$route.name === 'medicallinfoindex' ? false : true
      }
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
</style>
