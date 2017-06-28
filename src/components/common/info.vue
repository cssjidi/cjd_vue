<template>
    <div class="info-box" :class="{'special-list':isDrink,'birthday-list':isBirth,'car-list':isCar}">
        <dl>
            <dt>
                <div class="flex-box">
                    <span class="flex-item" v-if="isCar">序号</span>
                    <span class="flex-item" v-else="">车号</span>
                    <span class="flex-item">分市场</span>
                    <span class="flex-item">分公司</span>
                    <span class="flex-item">姓名</span>
                    <span class="flex-item flex-add" v-if="isCar">电话</span>
                    <span class="flex-item flex-add" v-if="isBirth">生日</span>
                    <span class="flex-item flex-add" v-if="isDrink">特殊餐饮</span>
                    <span class="flex-item flex-add" v-if="isDrink">晚宴场次</span>
                </div>
            </dt>
            <dd v-for="(f,index) in info">
                <router-link v-bind:to="f.link" class="wu_list-item">
                    <div class="flex-box">
                        <span class="flex-item" v-if="isCar">{{index+1}}</span>
                        <span class="flex-item" v-else="">{{f.user.carNumber}}</span>
                        <span class="flex-item">{{f.user.branchMarket}}</span>
                        <span class="flex-item">{{f.user.branchOffice}}</span>
                        <span class="flex-item username">{{f.user.username}}</span>
                        <span class="flex-item flex-add" v-if="!!f.user.phone && isCar">{{f.user.phone}}</span>
                        <span class="flex-item flex-add" v-if="!!f.user.birthday && isBirth">{{f.user.birthday}}</span>
                        <span class="flex-item flex-add" v-if="!!f.user.birthday && isBirthstr">{{f.user.birthdayStr}}</span>
                        <span class="flex-item flex-add" v-if="!!f.user.specialFood && isDrink">{{f.user.specialFood}}</span>
                        <span class="flex-item flex-add" v-if="!!f.user.screenings && isDrink">{{f.user.screenings}}</span>
                    </div>
                </router-link>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default{
        props:['info','isBirth','isCar','isDrink','isBirthstr']
    }
</script>
<style lang="scss" scoped>
    .info-box{
        &.special-list{
            .flex-box {
                .flex-item {
                    width: 14.8%;
                    &:nth-child(5),&:nth-child(6){
                        width:19.3%;
                                    }
                }
            }
        }
        &.birthday-list{
            .flex-box {
                .flex-item {
                    &:nth-child(1) {
                        width:17.3%
                    }
                    &:nth-child(5) {
                        width:22%;
                    }
                 }
            }
         }
        &.car-list{
            .flex-box {
                .flex-item {
                    &:nth-child(1) {
                         width:14.3%
                     }
                    &:nth-child(5) {
                         width:25%;
                     }
                 }
            }
         }
        .flex-box{
            display:block;
            .flex-add{
                //flex:1.5;
            }
            .flex-item{
                width:19.7%;
                display:inline-block;
                margin-right: -3px;
            }
            .username{
                font-weight:600;
                color:#3333ff;
            }
        }

        dl{
            dt{
                background:#bc2826;
                text-align:center;
                color:#fff;
                span{
                    border-right:none;
                    font-size:0.6rem;
                    padding:0.3rem 0;
                    &:first-child{
                        border-left:none;
                     }
                }
            }
            dd{
                padding:0.7rem 0;
                &:nth-child(2n+1){
                     background:#dfdfdd;
                 }
                 span{
                     text-align: center;
                 }
                .flex-item{
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
    }
</style>