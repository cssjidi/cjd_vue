<template>
    <div id="loadingToast" v-show="showLoading">
        <div class="wu-mask_transparent"></div>
        <div class="wu-toast">
            <i class="wu-icon_toast" :class="{'wu-loading':defaulted,'wu-icon-success-no-circle':success}"></i>
            <p class="wu-toast__content" v-if="defaulted">数据加载中</p>
            <p class="wu-toast__content" v-if="success">{{successText}}</p>
        </div>
        <error v-show="isError"></error>
    </div>
</template>
<script>
    import error from 'src/components/common/500.vue';
    export default{
        data(){
            return{
                timer:null,
                showLoading:true,
                count:0,
                isError:false
            }
        },
        components:{
          error
        },
        computed:{
            successText(){
                if(this.text === ''){
                    this.text='已完成'
                }
                return this.text;
            },
            defaulted(){
                return !this.loading && !this.success ? true:false;
            }
        },
        mounted(){
//            if(this.showLoading){
//                this.error();
//            }
            if(!!this.time){
                this.timer =  setTimeout(()=>{
                    this.showLoading=false;
                },this.time*1000)
            }
        },
        methods:{
            error(){
                if(this.count > 5){
                    console.log(this.count);
                    console.log(1234);
                    this.isError = true;
                    this.showLoading = false;
                    this.clearInterval('errorTiem');
                }else{
                    console.log('error'+this.count);
                    let errorTiem = setInterval(()=>this.count++,1000);
                }
            }
        },
        beforeDestroy(){

        },
        props:['time','text','loading','success']
    }
</script>
<style lang="scss">
    @import '../../scss/mask';
    @import '../../scss/toast';
    @import '../../scss/loading';
</style>