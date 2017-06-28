<template>
    <div class="detail">
        <div class="user-box" v-if="!isIncident">
            <div class="user-face">
                <div class="u-info">
                    <em class="user-face-icon"></em>
                    <strong>
                        {{user.username}}
                    </strong>
                </div>
            </div>
            <ul>
                <li v-if="!!user.category">
                        <span><em>分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类</em>：</span>
                        <strong>{{user.category}}</strong>
                </li>
                <li v-if="!!user.organize">
                        <span><em>分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组</em>：</span>
                        <strong>{{user.organize}}</strong>
                </li>
                <li v-if="!!user.branchMarket">
                        <span class="word3"><em>分&nbsp;&nbsp;市&nbsp;场</em>：</span>
                        <strong>{{user.branchMarket}}</strong>
                </li>
                <li v-if="!!user.branchOffice">
                        <span class="word3"><em>分&nbsp;&nbsp;公&nbsp;司</em>：</span>
                        <strong>{{user.branchOffice}}</strong>
                </li>
                <li v-if="!!user.position">
                        <span><em>岗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</em>：</span>
                        <strong>{{user.position}}</strong>
                </li>
                <li v-if="!!user.username">
                        <span><em>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</em>：</span>
                        <strong>{{user.username}}</strong>
                </li>
                <li v-if="!!user.carNumber || !!user.carNo">
                        <span><em>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</em>：</span>
                        <strong>{{user.carNumber}}{{user.carNo}}</strong>
                </li>
                <li v-if="!!user.phone">
                        <span><em>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</em>：</span>
                        <strong><a v-bind:href="phone"> {{user.phone}} <em class="phone-icon"></em></a></strong>
                </li>
                <li v-if="!!user.outsidePhone">
                        <span class="word4">境外电话：</span>
                        <strong><a v-bind:href="outsidePhone">{{user.outsidePhone}}<em class="phone-icon"></em></a> </strong>
                </li>
                <li v-if="!!user.sex">
                        <span><em>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</em>：</span>
                        <strong>{{user.sex | gender}}</strong>
                </li>
                <li v-if="!!user.age">
                        <span><em>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</em>：</span>
                        <strong>{{user.age}} </strong>
                </li>
                <li v-if="!!user.birthday">
                        <span><em>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</em>：</span>
                        <strong>{{user.birthday | birth}}</strong>
                </li>
                <li v-if="!!user.cardNo">
                    <span><em>卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</em>：</span>
                    <strong>{{user.cardNo}}</strong>
                </li>
                <li v-if="!!user.specialFood">
                        <span class="word4">特殊餐饮：</span>
                        <strong>{{user.specialFood}}</strong>
                </li>
                <li v-if="!!user.batchNumber">
                        <span class="word6">餐饮场次：</span>
                        <strong>{{user.batchNumber}}</strong>
                </li>
            </ul>
        </div>
        <div class="incident-detail-box" v-if="isIncident">
            <div class="title-box">
                <h3 v-if="isIncident">{{user.title}}</h3>
                <p>
                    <span v-if="!!user.happenedShowTime">汇报时间：{{user.happenedShowTime}}</span>
                    <span v-if="!!user.reporter">汇报人：{{user.reporter}}</span>
                </p>
            </div>
            <dl>
                <dt><em class="user-info-icon"></em><strong>业务员资料</strong></dt>
                <dd v-if="!!user.cardNo"><span>卡      号:</span><strong>{{user.cardNo}}</strong></dd>
                <dd v-if="!!user.username"><span>姓      名：</span><strong>{{user.username}}</strong></dd>
                <dd v-if="!!user.sex"><span>性      别：</span><strong>{{user.sex | gender}}</strong></dd>
                <dd v-if="!!user.carNo"><span>车      号：</span><strong>{{user.carNo}}</strong></dd>
                <dd v-if="!!user.position"><span>岗      位：</span><strong>{{user.position}}</strong></dd>
                <dd v-if="!!user.age"><span>年     龄：</span><strong>{{user.age}}</strong></dd>
                <dd v-if="!!user.birthday"><span>生     日：</span><strong>{{user.birthday | birth}}</strong></dd>
                <dd v-if="!!user.phone">电      话：<a v-bind:href="phone"><em class="fa fa-phone-square"></em>{{user.phone}}</a></dd>
                <dd v-if="!!user.outsidePhone">境 外 电 话：<a v-bind:href="outsidePhone"><em class="fa fa-phone-square"></em>{{user.outsidePhone}}</a></dd>
                <dd v-if="!!user.category"><span>分      类：</span><strong>{{user.category}}</strong></dd>
                <dd v-if="!!user.organize"><span>分      组：</span><strong>{{user.organize}}</strong></dd>
                <dd v-if="!!user.branchOffice"><span class="word3">分 公  司：</span><strong>{{user.branchOffice}}</strong></dd>
            </dl>
            <dl>
                <dt><em class="incident-detail-icon"></em><strong>事件详情</strong></dt>
                <dd v-if="!!user.incidentType"><span>事件类型:</span><strong>{{user.incidentType | intype}}</strong></dd>
                <dd v-if="otherType"><span>其他描述:</span><strong>{{user.incidentTypeRemark}}</strong></dd>
                <dd v-if="!!user.description" class="desc"><span>事件描述：</span>
                    <strong ref="more">{{user.description}}</strong>
                    <em v-if="desc" ref="moreIcon" class="arrow-down-icon" @click="showMore()"></em>
                </dd>
            </dl>
            <dl>
                <dt><em class="other-icon"></em><strong>其他情况</strong></dt>
                <dd v-if="!!user.specialFood"><span>特殊餐饮：</span><strong>{{user.specialFood}}</strong></dd>
                <dd v-if="!!user.batchNumber"><span>特殊餐饮场次：</span><strong>{{user.batchNumber}}</strong></dd>
                <dd v-if="!!user.trailer"><span>跟进人：</span><strong>{{user.trailer}}</strong></dd>
                <dd v-if="!!user.traceState"><span>跟进情况：</span><strong>{{user.traceState | trace}}</strong></dd>
                <dd v-if="!!user.payment"><span>费用情况：</span><strong>{{user.paymentState | payment}}</strong></dd>
                <dd v-if="!!user.money"><span>费用金额：</span><strong>{{user.money}}</strong></dd>
                <dd v-if="!!user.currency"><span>费用币种：</span><strong>{{user.currency}}</strong></dd>
            </dl>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                type:false,
                arrowDown:false
            }
        },
        props:['user','isIncident','isUser'],
        computed:{
            desc(){
                if(this.user.description.length > 100){
                    return true;
                }else{
                    return false;
                }
            },
            phone(){
                return ("tel:"+this.user.phone);
            },
            outsidePhone(){
                return ("tel:"+this.user.outsidePhone);
            },
            otherType(){
                console.log(this.user.incidentType);
                if(this.user.incidentType==-1){
                    console.log(this.user.incidentType);
                    this.type = true;
                }
                return this.type
            }
        },
        filters:{
            time(str){
                let reg = str.match(/(.*)T(.*).000Z$/);
                let time = reg[1]+' '+reg[2];
                return time;
            },
            time1(str){
                let reg = str.match(/(.*)T(.*).000Z$/);
                let time = reg[1];
                return time;
            },
            trace(str){
                let type = ['跟进完毕','待后续跟进'];
                return type[str];
            },
            payment(str){
               let type = ['无费用产生','业务员自付','公司/旅行社垫付'];
                return type[str];
            },
            birth(str){
                if(str.indexOf('T') > 0){
                    let reg = str.match(/(.*)T(.*).000Z$/);
                    let time = reg[1];
                    return time;
                }else{
                    return str;
                }
            },
            gender(str){
                let sex = '男';
                switch (str){
                    case 1:
                        sex = '男';
                        break;
                    case 2:
                        sex = '女';
                        break;
                }
                return sex;
            },
            intype(str){
                let tp = ['怀孕','普通疾病','外伤','重/伤病','财务/证件遗失','提前脱离团队','无法顺利出/入境'];
                let typename = '';
                if(str === -1){
                    typename = '其他';
                }else{
                    typename = tp[str];
                }
                return typename;
            }
        },
        methods:{
            showMore(){
                this.$refs.more.style.height='auto';
                this.$refs.moreIcon.style.display = 'none';
            }
        }
    }
</script>
<style lang="scss" scoped>
    .user-box{
        .user-face{
            background:url("../../assets/images/picture_lines.png") #bc2826 no-repeat center bottom;
            background-size: 100%;
            height:5rem;
            .u-info{
                padding-top:1rem;
                padding-left:1rem;
            }
            strong{
                color:#fff;
                font-weight:500;
                font-size:0.8rem;

            }
            .user-face-icon{
                background: url("../../assets/images/icon_head.png") no-repeat center center;
                width:1.5rem;
                height:1.5rem;
                display: inline-block;
                margin:0 0.267rem;
                vertical-align: middle;
                background-size: 100%;
            }
        }
        ul{
            li{

                line-height: 1.3rem;
                .phone-icon{
                    background: url("../../assets/images/icon_phone.png") no-repeat center center;
                    width:0.6rem;
                    height:0.6rem;
                    display: inline-block;
                    vertical-align: middle;
                    margin-left:0.3rem;
                    background-size: 100%;
                }
                span{
                    position: absolute;
                    padding-left:0.6rem;
                em{
                    font-style:normal;
                }
                /*
                    em{
                        word-spacing: 0.7rem;
                        letter-spacing: 0.7rem;
                        font-style:normal;
                        &.word3{
                             word-spacing: 0.1rem;
                             letter-spacing: 0.1rem;
                         }
                        &.word4{
                             word-spacing: 0;
                             letter-spacing: 0rem;
                         }
                        &.word6{
                             word-spacing: 0;
                             letter-spacing: 0rem;
                         }
                    }
                    */
                }
                strong{
                    margin-left:3rem;
                    display: block;
                    font-weight: 500;
                    padding-left:0.2rem;
                    padding-right:0.6rem;
                    border-bottom:1px solid #ccc;
                 }
            }
        }
    }
    .incident-detail-box{
        .title-box{
            background-color: #bc2826;
            color:#fff;
            padding:0.4rem;
            h3{
                border-bottom:none;
                font-size:0.55rem;
                padding:0;
                margin:0;
            }
            p{
                font-size:0.4rem;
            }
        }
        dl{
            &:nth-child(3),&:nth-child(4){
                padding-top:0.4rem;
                background: #eee;

            }
            .user-info-icon{
                background: url("../../assets/images/icon_title01.png") no-repeat center center;
                width:0.6667rem;
                height:0.6667rem;
                display: inline-block;
                margin:0 0.267rem;
                vertical-align: middle;
                background-size: 100%;
            }
            .incident-detail-icon{
                background: url("../../assets/images/icon_title02.png") no-repeat center center;
                width:0.6667rem;
                height:0.6667rem;
                display: inline-block;
                margin:0 0.267rem;
                vertical-align: middle;
                background-size: 100%;
            }
            .other-icon{
                background: url("../../assets/images/icon_title03.png") no-repeat center center;
                width:0.6667rem;
                height:0.6667rem;
                display: inline-block;
                margin:0 0.267rem;
                vertical-align: middle;
                background-size: 100%;
            }
            .arrow-down-icon{
                background: url("../../assets/images/icon_arrow_down.png") no-repeat center center;
                height:0.3rem;
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                width:100%;
                margin-bottom:0.4rem;
                cursor:pointer;
            }
            dt{
                border-top:1px solid #ccc;
                border-bottom:1px solid #ccc;
                background: #fff;
                strong{
                    font-weight:500;
                }
             }
            dd{
                background: #fff;
                &:last-child{
                     border-bottom:1px solid #ccc;
                    strong{
                        border:none;
                    }
                 }
                &.desc{
                    line-height: 0.8rem;
                    strong{
                        padding-bottom:0.2rem;
                        overflow: hidden;
                        max-height: 8rem;
                    }
                 }
                span{
                    position: absolute;
                    padding-left:0.6rem;
                    word-spacing: 0.7rem;
                    &.word3{
                        word-spacing: 0.1rem;
                    }
                }
                strong{
                    margin-left:3rem;
                    display: block;
                    font-weight: 500;
                    padding-left:0.2rem;
                    padding-right:0.6rem;
                    border-bottom:1px solid #ccc;

                }
            }
            dt,dd{
                line-height: 1.3rem;
            }
        }
    }



</style>