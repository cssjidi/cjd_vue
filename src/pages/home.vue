<template>
    <div v-title data-title="首页" ref="msg">
        <ul>
            <li><router-link to='/address/index?dataParams={"projectId":1}'>通讯录</router-link></li>
            <li><router-link to='/list/birthday/index?dataParams={"projectId":1}'>生日名单</router-link></li>
            <li><router-link to='/list/special/index?dataParams={"projectId":1}'>特殊餐饮名单</router-link></li>
            <li><router-link to='/list/car/index?dataParams={"projectId":1}'>分车名单</router-link></li>
            <li><router-link to='/incident/list?dataParams={"projectId":1}'>事件汇报</router-link></li>
            <li><router-link to='/incident/my_list?dataParams={"projectId":1}'>我的事件汇报</router-link></li>

        </ul>
    </div>
</template>
<script>

    export default{
        data() {
            return {
                msg: 'home',
            }
        },
        mounted(){
            //console.log(this.$ref.ddd);
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    ul,li{
        margin:0;
        padding:0;
    }
    ul{
        li{
            border-bottom:1px solid #dfdfdf;
            height:3rem;
            line-height: 3rem;
            text-align: center;
            font-size:0.8rem;
            &:first-child{
                 border-top:1px solid #dfdfdf;
             }
        }
    }
</style>