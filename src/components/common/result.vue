<template>
    <div>
        <ul class="wu_list">
            <li v-for="result in list" v-if="!!list.length">
                <router-link v-bind:to="result.link" class="wu_list-item">
                    <div class="icon-left">
                        <div class="rotate">
                            <span>{{result.list.carNumber}}{{result.list.carNo}}</span>
                        </div>
                    </div>
                    <div class="item">
                        <strong>{{result.list.username}}</strong>
                        <span>{{result.list.position}}</span>
                        <p>
                            手机：{{result.list.phone}}   &nbsp;境外电话：{{result.list.outsidePhone}}
                        </p>
                    </div>
                    <em class="fa fa-angle-right">
                    </em>
                </router-link>
            </li>
            <li v-if="!!noResult">
                <p>{{noResult}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:['list','noResult'],
    }
</script>
<style lang="scss" scoped>
    .wu_list-item {
        .icon-left{
            .rotate {
                padding:0;
                width: 1.8rem;
                height: 1.8rem;
                font-size: 0.8rem;
                margin-left:0rem;
                margin-top: 0rem;
            }
            span {
                display: block;
                line-height: 3.3;
                font-size:0.5rem;
            }
        }
        .item{
            p{
                font-size:0.4rem;
                padding:0;
            }
            strong{
                font-size:0.5rem;
            }
        }
    }

</style>