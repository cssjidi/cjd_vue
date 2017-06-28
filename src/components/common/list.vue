<template>
    <div class="info-box">
        <ul class="wu_list">
            <li class="" v-for="result in list">
                <router-link v-bind:to="result.link" class="wu_list-item">
                    <div class="flex-icon">
                        <em class="wu_icon" v-bind:class="icon">
                        </em>
                    </div>
                    <h3 class="wu_title" v-if="isCar">
                        {{result.list.carNo}}
                    </h3>
                    <h3 class="wu_title" v-else>
                        {{result.title}}
                    </h3>
                    <em class="fa fa-angle-right"></em>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import fontAwesome from 'font-awesome-loader';
    export default{
        props:['list','icon','isCar'],
    }
</script>
<style lang="scss" scoped>
    .fa-angle-right{
        font-size:0.7rem;
        color: #bbb;
    }

</style>