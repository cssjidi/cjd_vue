<template>
  <section class="info-box">
    <div class="list">
      <ul>
        <li v-for="list in lists">
          <router-link class="link" :to="{ name: 'medicalldetail', params: { id: list.id }}">
            <div class="list-item">
              <span>
                  <b>[{{list.createDate|shortDate}}]</b>&nbsp;{{list.title}}
              </span>
              <strong>
                <icon name="angle-right" scale="1.5"></icon>
              </strong>
            </div>
          </router-link>
        </li>
        <li v-if="!lists">
          暂无通知
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
        msg:'xxx,您好'
      }
    },
    computed:{
      ...mapGetters({
        lists:'medicallFormList'
      })
    },
    filters:{
      shortDate(string){
        //const date = new Date(string)
        return string.replace(/\s.*/ig,'')
      }
    },
    created(){
      this.$store.dispatch('fetchMedicallinfo')
      this.$store.dispatch('changeHeaderTitle',{title:'体检通知',path:'/medicall/info.index'})
    }
  }
</script>
<style lang="scss" scoped>
  .user-info{
    text-align: center;
    margin: 10px auto 20px;
  /*
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
  */
  }
  .list{
  ul{
    border-bottom:1px solid #d9d9d9;
  li{
    display: flex;
    align-items: center;
    border-bottom:1px solid #ccc;
    font-size:0.6rem;
    padding:15px 0;
    margin-left:15px;
    text-align:left;
    padding-right: 0.8rem;
    position:relative;
  &:last-child {
     border-bottom:none;
   }
  a.link{
    width: 100%;
    height: 100%;
    display: block;
  }
  .list-item{
    width: 100%;
    height:100%;
  }
  span{
    flex:1;
    b{
      font-weight: 500;
      font-size:0.6rem;
    }
  }
  strong{
    position: absolute;
    right:10px;
    top:50%;
    transform: translateY(-50%);
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
