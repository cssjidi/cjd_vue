<template>
  <section>
    <div class="header">
      <div class="nav">
        <navi v-bind:is-home="isHome"/>
      </div>
    </div>
    <div class="content">
      <transition name="slide">
        <router-view class="child"></router-view>
      </transition>
    </div>
    <tab/>
    </div>
  </section>
</template>
<script>
  import navi from '../../components/common/header.vue'
  import tab from '../../components/common/tab.vue'
  export default{
    data(){
      return{
      }
    },
    created(){

    },
    computed:{
      isHome(){
        return this.$route.name === 'PostIndex' ? false : true
      }
    },
    components:{
      navi,
      tab,
    },

  }
</script>
<style lang="scss">
  .header{
    width:100%;
    z-index: 999;
    position:relative;
    .nav{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:1.8rem;
    }
  }
  .content{
    position: relative;
    z-index: 1;
    padding:50px 0;
  }
</style>
