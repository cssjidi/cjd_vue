<template>
  <section class="info-box">
    <div class="list">
      <ul>
        <li v-for="(list,index) in lists">
          <div v-on:click="downloadFile({id:list.fileId,type:'medicalReport',filename:list.fileName});getIndex(index)">
            <span>
                {{list.reportYear}}年体检报告
            </span>
            <strong>
              <icon name="download" scale="1.3"></icon>
            </strong>

          </div>
        </li>
        <li v-if="!lists">
          暂无体检报告
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
        d_index:0
      }
    },
    computed:{
      ...mapGetters({
        lists:'medicallReportList',
        downloadLink:'downloadLink',
      })
    },
    created(){
      const userCode = this.$route.params.id
      this.$store.dispatch('fetchMedicallReport',userCode)
      this.$store.dispatch('changeHeaderTitle',{title:'体检报告',path:'/medicall/info.index'})
    },
    methods:{
      downloadFile(file){
        this.$store.dispatch('downloadFile',{file})
      },
      getIndex(index){
        this.d_index = index
      }
    }
  }
</script>
<style lang="scss" scoped>
  .user-info{
    text-align: center;
    margin: 10px auto 20px;
  }
  .list{
  ul{
    border-bottom:1px solid #d9d9d9;
  li{
    display: flex;
    align-items: center;
    border-bottom:1px solid #ccc;
    font-size:0.6rem;
    padding:12px 0;
    margin-left:15px;
    text-align:left;
    position:relative;
  &:last-child {
     border-bottom:none;
   }
   >div{
    width: 100%;
    }
  span{
    flex:1
  }
  strong{
    position: absolute;
    right:10px;
    top: 10px;
    color:#0b97c4;
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
