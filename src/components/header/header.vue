<template>
    <header class="wu_header">
        <a class="fa fa-angle-left" href="javascript:history.back(-1);"></a>
        <h1 class="mui-title">{{title}}</h1>
    </header>
</template>
<script>
    import fontAwesome from 'font-awesome-loader';
    export default{
        data(){
            return{
                headertitle:'13241234124'
            }
        },
        props:['title'],
        computed:{

        },
        mounted() {
        },
        methods:{
            
        },
    }
</script>
<style lang="scss">
    h1{
        margin:0;
        padding:0;
    }
    .wu_header {
        position: fixed;
        z-index: 10;
        right: 0;
        left: 0;
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