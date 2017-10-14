<template>
  <section class="info-box">
    <div class="user-info">
      <em><icon name="user-circle" scale="4"></icon></em>
      <p class="desc">{{userInfo.userName}}，您好</p>
    </div>
    <div class="list">
      <ul>
        <li>
          <router-link :to="'info.list/'" class="link">
              <span>
                <em><icon name="info-circle" scale="1.1"></icon></em>
                浏览记录
              </span>
              <strong>
                <icon name="angle-right" scale="1.5"></icon>
              </strong>
          </router-link>
        </li>
        <li>
          <router-link :to="'info.list/'" class="link">
              <span>
                <em><icon name="info-circle" scale="1.1"></icon></em>
                修改密码
              </span>
              <strong>
                <icon name="angle-right" scale="1.5"></icon>
              </strong>
          </router-link>
        </li>
        <li>
          <router-link :to="'report.list/'+userInfo.userCode" class="link">
            <span>
               <em><icon name="search" scale="1.1"></icon></em>
               账户余额
            </span>
            <strong>
              <icon name="angle-right" scale="1.5"></icon>
            </strong>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'helpIndex'}" class="link">
             <span>
                 <em><icon name="question-circle-o" scale="1.1"></icon></em>
                 转账记录
             </span>
            <strong>
              <icon name="angle-right" scale="1.5"></icon>
            </strong>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    data(){
      return{
      }
    },
    computed:{
      ...mapGetters({
        userInfo:'userInfo',
      })
    },
    beforeCreate(){

    },
    created(){
      this.$store.dispatch('fetchUser')
      this.$store.dispatch('changeHeaderTitle',{title:'用户中心',path:'/post/index'})
    },
  }
</script>
<style lang="scss" scoped>
  svg{
    fill: #1a69a4;
  }
  .user-info{
    text-align: center;
    margin: 10px auto 20px;

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
    text-align:left;
  &:last-child {
     border-bottom:none;
   }
   .link{
     display:block;
     width: 100%;
     height: 100%;
   }
  span{
    flex:1;
    em{
      vertical-align: middle;
      svg{
        fill: #1a69a4;
      }
    }
  }
  strong{
    position: absolute;
    right:10px;
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
