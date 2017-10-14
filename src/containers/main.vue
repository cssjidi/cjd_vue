<template>
    <div class="app">
        <transition name="slide">
            <router-view class="child"></router-view>
        </transition>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
    export default{
        data(){
            return{
                msg:'1234'
            }
        },
      computed:{
          ...mapGetters({
            isFinished:'isFinished'
          })
      },
    }
</script>
<style lang="scss">
    .slide-enter-active, .slide-leave-active {
        transform: translate(-1000px,0);
    }
    .slide-enter, .slide-leave-active {
        transform: translate(0,0);
    }
    .app{
        //padding-top:0.2rem;
        width: 100%;
        margin:0 auto 0;
        height: 100%;
        background-color: #fff;
    }

</style>
