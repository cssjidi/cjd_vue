<template>
    <div class="examine">
        <div class="user-info">
            <em class="fa fa-user"></em>
            <p class="desc">{{msg}}</p>
        </div>
        <div class="list">
            <ul>
                <li>
                    <span>
                        <i class="fa fa-info-circle"></i>
                        体检通知
                    </span>
                    <em class="fa fa-angle-right"></em>
                </li>
                <li>
                    <span>
                        <i class="fa fa-search"></i>
                        体检查询</span>
                    <em class="fa fa-angle-right"></em>
                </li>
                <li>
                    <span>
                        <i class="fa fa-question-circle-o"></i>
                        帮助</span>
                    <em class="fa fa-angle-right"></em>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import fontAwesome from 'font-awesome-loader'
    export default{
        data(){
            return{
                msg:'xxx,您好'
            }
        }
    }
</script>
<style lang="scss">
    .user-info{
        text-align: center;
        margin: 10px auto 20px;
        em{
            width: 2rem;
            height: 2rem;
            line-height: 2rem;
            border-radius: 50%;
            background-color: #00B5AD;
            color:#fff;
            font-size:1.3rem;
            border:13px solid #ccc;
        }
    }
    .list{
        ul{
            border-top:1px solid #d9d9d9;
            border-bottom:1px solid #d9d9d9;
            li{
                display: flex;
                align-items: center;
                border-bottom:1px solid #ccc;
                font-size:0.6rem;
                padding:12px 0;
                margin-left:15px;
                &:last-child {
                    border-bottom:none;
                 }
                span{
                    flex:1
                }
                em{
                    position: absolute;
                    right:10px;
                    margin-top:2px;
                }
                i{
                    color:#666;
                    font-size:0.65rem;
                    margin-right:5px;
                }
            }
        }
    }
</style>