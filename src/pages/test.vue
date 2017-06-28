<template>
    <div>
        <ul>
            <li v-for="p in products">
                {{p.province}}
            </li>
        </ul>
        <button v-on:click="getUsers()">submit</button>
    </div>
</template>
<script>
    import { mapState , mapGetters, mapMutations, mapActions } from 'vuex'
    export default{
        name:'test',
        data() {
            return {
                msg:'test',
            }
        },
        created(){
            this.getData()
        },
        computed:{
            ...mapGetters ({
                products:'getList'
            }),
        },
        methods:{
            getData(){
                this.$store.dispatch('loadProducts')
            },
            getUsers(){
                this.$store.dispatch('getUsers')
            }
        }
    }
</script>