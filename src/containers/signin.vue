<template>
  <div class="login-bg">
    <div class="login-box">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 16 16">
          <path d="m8,0c-4.418,0-8,3.582-8,8 0,4.418 3.582,8 8,8s8-3.582 8-8c0-4.418-3.582-8-8-8zm0,14c-3.313,0-6-2.687-6-6s2.687-6 6-6 6,2.687 6,6-2.687,6-6,6z"/>
          <path d="M10.5,10H9V8.731c0.598-0.346,1-0.992,1-1.729V4.998C10,3.895,9.112,3,8,3C6.896,3,6,3.898,6,4.998v2.004   C6,7.743,6.4,8.39,7,8.734V10H5.5c-0.9,0-1.396,0.405-1.485,1.217C4.889,12.343,6.28,13,8,13s3.111-0.657,3.985-1.783   C11.896,10.405,11.4,10,10.5,10z"/>
        </svg>
      </div>
      <div class="form-group">
        <em><icon name="user" scale="1.5"></icon></em>
        <input type="email" class="form-control" v-model="email" name="email" placeholder="邮箱"/>
      </div>
      <div class="form-group">
        <em><icon name="lock" scale="1.5"></icon></em>
        <input type="password" class="form-control" v-model="password" name="password" placeholder="密码"/>
      </div>
      <div class="error" v-if="ssoError">
        {{ssoError}}
      </div>
      <div class="submit">
        <button type="button" class="btn btn-block" v-on:click="login()">登陆</button>
      </div>
      <input type="hidden" v-model="isSignin">
    </div>
  </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import ctx from '../store/modules/context'
    export default {
        data() {
          return{
            password: '123456',
            email: '4@3.com'
          }
        },
        computed:{
          ...mapGetters({
            ssoError:'ssoError',
            isSignin:'isSignin',
          }),
        },
        created(){
          if(this.isSignin){
            this.redirect()
          }
          //this.$store.dispatch('loadRsaKey')
        },
        updated(){
          if(this.isSignin){
              this.redirect()
          }
        },
        methods:{
          login(){
              this.$store.dispatch('signin', {
                params: {
                  username: this.username,
                  password: this.password,
                  email: this.email,
                }
              })
          },
          redirect(){
            this.$router.push({
              path: 'account/me'
            });
          }
        }
    }
</script>
<style lang="scss" scoped>
  body,html{
    background: #1a69a4;
  }
  .form-control{
    border:1px solid #ccc;
    height: 1.42rem;
    padding-left:0.3rem;
    box-sizing: border-box;
  }
  .error{
    color:#f00;
    margin-top:-0.5rem;
    margin-bottom:0.4rem;
  }
  .is-disabled{
    opacity:0.7;
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
  svg{
    width:3.5rem;
    height:3.5rem;
    fill:#666;
  }
  em{
    font-size:2rem;
    padding:0 0.7rem;
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
    margin:25px auto;
    border:1px solid #ccc;
    position: relative;
    border-radius: 5px;
  em{
    position: absolute;
    font-size:0.8rem;
    top:0.3rem;
    left:0.3rem;
    color: #999;
    padding:0rem;
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
