<template>
    <div class="address">
        <transition name="slide">
            <router-view class="child"></router-view>
        </transition>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:''
            }
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
</style>