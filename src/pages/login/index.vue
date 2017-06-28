<template>
    <div class="login-bg">
        <div class="login-box">
            <div class="logo">
                <em class="fa fa-user"></em>
            </div>
            <div class="form-group">
                <em class="fa fa-user"></em>
                <input type="text" class="form-control" name="useranme" placeholder="用户名"/>
            </div>
            <div class="form-group">
                <em class="fa fa-lock"></em>
                <input type="password" class="form-control" name="password" placeholder="密码"/>
            </div>
            <div class="submit">
                <button type="button" class="btn btn-block" :click="login()">登陆</button>
            </div>
        </div>
    </div>
</template>
<script>
    import fontAwesome from 'font-awesome-loader';
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    export default{
        data(){
            return{
                msg:1234
            }
        },
        methods:{
            login(){
                console.log(123)
            }
        }
    }
</script>
<style lang="scss">
    body,html{
        background: #1a69a4;
    }
    .form-control{
        border:1px solid #ccc;
        height: 1.42rem;
        padding-left:0.3rem;
        box-sizing: border-box;
    }
    .btn{
        background-color: #2185D0;
        border-radius: none;
        border:none;
        border-radius: 5px;
    }
    .btn-block{
        width:100%;
    }
    .login-bg{

    }
    .login-box{
        padding:15px;
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        height:400px;
        .logo{
            text-align:center;
            em{
                font-size:2rem;
                padding:0.5rem;
                border:15px solid #ccc;
                background-color: #1a69a4;
                border-radius:50%;
                width:2rem;
                color:#fff;
                height:2rem;
                text-align:center;
            }
        }
        .form-group{
            margin:15px auto;
            border:1px solid #ccc;
            position: relative;
            border-radius: 5px;
            .fa{
                position: absolute;
                font-size:0.8rem;
                top:0.3rem;
                left:0.3rem;
                color: #999;
            }
            input{
                border:none;
                padding-left:1.1rem;
                font-size:0.6rem;
                border-radius: 5px;
                color:#333;
            }
        }
    }
</style>