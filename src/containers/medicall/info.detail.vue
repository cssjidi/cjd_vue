<template>
  <section class="medicall-detail">
    <div class="adsafd">
      <h1>{{info.title}}</h1>
      <div class="info">
        <span>发布人：{{info.nickName}}</span>
        <span>发布时间：{{info.createDate}}</span>
      </div>
      <div class="content">
        {{info.content}}
      </div>
      <div class="accessory">
        <div class="list" v-for="list in accessory" v-on:click="downloadFile({id:list.fileId,type:'medicalInform',filename:list.fileName})">
              <span>
                {{list.fileName}}
              </span>
        </div>
      </div>
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
    filters:{
      file(type){
        const fileType = type.replace('.','')
        switch (fileType){
          case 'xls':
            return '<icon name="file-excel-o"></icon>'
            break
          case 'doc':
            return '<icon name="file-word-o"></icon>'
            break
          case 'jpg':
            return '<icon name="file-image-o"></icon>'
            break
          case 'jpeg':
            return '<icon name="file-image-o"></icon>'
            break
          case 'png':
            return '<icon name="file-image-o"></icon>'
            break
          case 'gif':
            return '<icon name="file-image-o"></icon>'
            break
          case 'bmp':
            return '<icon name="file-image-o"></icon>'
            break
          case 'pdf':
            return '<icon name="file-pdf-o"></icon>'
            break
          case 'txt':
            return '<icon name="file-text-o"></icon>'
            break
          default :
            return ''
            break
        }
      }
    },
    created(){
      this.$store.dispatch('fetchMedicalldetail',this.$route.params.id)
      this.$store.dispatch('fetchAccessory',this.$route.params.id)
      this.$store.dispatch('changeHeaderTitle',{title:'通知详情',path:'/medicall/info.list'})
    },
    computed:{
      ...mapGetters({
        info:'medicaldetail',
        accessory:'noticeFiles',
      })
    },
    methods:{
      downloadFile(file){
        this.$store.dispatch('downloadFile',{file})
      }
    }
  }
</script>
<style lang="scss">
  .medicall-detail{
  padding:0.5rem;
    h1{
      font-size:1rem;
      margin:0.2rem 0 0.3rem;
    }
    .info{
      display:flex;
      align-content:center;
      justify-content:center;
      align-items:space-around;
      span{
        flex:1;
        &:last-child{
          flex:2;
          text-align:right;
         }
      }
    }
    .content{
      margin:0.3rem 0;
    }
    .accessory{
      margin:0.5rem 0;
      line-height: 0.8rem;
    }
  }
</style>
