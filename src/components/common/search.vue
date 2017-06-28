<template>
    <div class="header">
        <section class="flex-box">
            <group class="flex-block">
                <popup-picker value-text-align="left" :data="typeOptions" v-model="sType" @on-change="changeType"></popup-picker>
            </group>
            <group class="flex-block">
                <em class="fa fa-search search-icon" v-show="icon"></em>
                <x-input v-model="text" style="padding-left:0.2rem;" placeholder="       请输入关键词" @on-change="changeIcon"></x-input>
            </group>
            <group class="flex-block">
                <x-button type="primary" text="搜索" @click.native="search()" action-type="button"></x-button>
            </group>
        </section>
        <div class="result" v-show="isSearch">
            共<span>{{total}}</span>条搜索结果
        </div>
    </div>
</template>
<script>
    import { XInput,XButton,Group,PopupPicker} from 'vux'
    export default{
        props:['option','link','isSearch','total','isList'],
        data(){
            return {
                text:'',
                type:0,
                icon:true,
                child:'',
                //options:['车号','岗位','姓名'],
                //options1:['车号','岗位','姓名'],
                typeOptions:[['车号','岗位','姓名']],
                sType:['车号']
            }
        },
        components:{
            XInput,
            Group,
            XButton,
            PopupPicker,
        },
        methods:{
            hide(){
                this.icon=false;
            },
            changeType(val){
                console.log(val)
                this.type = parseInt(this.typeOptions[0].indexOf(val[0]));
                console.log(this.type)
            },
            changeIcon(){
                this.icon = this.text !== ''? false:true;
            },
            search(){
                //this.isList = false;
                //this.isSearch = true;
                console.log(12341234);
                let query = {
//                    projectId:this.link.id,
//                    organizePy:this.link.sp,
                    text:this.text,
                    type:this.type,
//                    carNo:this.link.carNo,
//                    category:this.link.ct,
//                    isSearch:!!this.text?true:false,
//                    isList:!!this.text?false:true,
//                    page:1
                }
                //if(this.text !== ''){
                    this.$emit('search',query);

                //}
           },

        },
        created(){
            //this.search();
        }
    }
</script>
<style lang="scss">

    .header{
        max-height:4rem;
    .flex-box{

        .flex-block{
            height:1.37rem;
            &:first-child{
                width:3.3rem;
             }
             &:last-child{
                width:2.97rem;
              }
              &:nth-child(2){
                flex:1;
               }
            .weui-cells{
                margin-top:0 !important;
            }
            .weui-cell{
                height:1.43rem;
                padding-top:0;
                padding-bottom:0;
                .vux-popup-picker-value{
                    font-size:0.46rem;
                }
            }
    .weui-btn_primary{
        background-color: #bc2826;
        font-size:0.46rem;
        border-radius: 0;
        height: 1.43rem;
    }
    .vux-x-input.weui-cell{
        border-left:1px solid #ddd;
        box-sizing: border-box;
        height: 1.43rem;
        font-size:0.46rem;
    }
        }
    }
    .search-input{
        height:1.28rem;
    }
    .flex-item{
        padding:0 0.3rem;
    }
    .flex-item:nth-child(3){
        padding-left:0.5rem;
    }
    .result{
        font-size:0.5rem;
        padding:0.5rem  0 0.5rem 0.5rem;
        border-bottom:1px solid #dfdfdd;
    span{
        color:#f00;
    }
    }
    }
    .wu_list-item{
    .icon-left{
        flex:1;
    span{
        display: block;
        line-height: 2.8;
    }
    .rotate{
        padding-top:0.25rem;
        border-radius: 50%;
        width:2rem;
        height:1.75rem;
        vertical-align: 1rem;
        background: #96c8e5;
        color:#fff;
        font-size:0.5rem;
        margin-left:-0.2rem;
    }
    }
    .item{
        flex:0 0 80%;
        color:#888;
        text-align:left;
        padding-left:0.2rem;
    strong{
        color:#1c1b20;
        font-size:0.6rem;
        margin-right:0.2rem;
    }
    }
    .fa{
        color:#bbb;
        font-size:0.8rem !important;
    }
    }
    .search-icon{
        position: absolute;
        font-size:0.6rem;
        top:0.35rem;
        left:0.5rem;
        color:#D9D9D9;
    }
</style>