<template>
    <div class="app">
        <top></top>
        <div class="content">
            <transition name="slide" class="add">
                <router-view class="child"></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    import top from 'src/components/header/header.vue';
    export default{
        data(){
            return{
                msg:'1234'
            }
        },
        mounted(){
        },
        components:{
            top
        },
        computed:{
            title(){
                return this.$route.name;
            }
        }
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
        width: 100%;
        margin:0 auto 0;
        height: 100%;
        background-color: #fff;
    }
    .content{
        padding-top:50px;
    }
</style>