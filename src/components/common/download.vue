<template>
  <div class="c-download">
    <a v-bind:download="files.filename" v-bind:href="files.link">
      <span>{{files.filename}}</span>
      <strong>
        <icon name="download"></icon>
      </strong>
    </a>
  </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    props:['file'],
    computed:{
      files(){
        return {
          filename:this.file.filename,
          link:this.file.link
        }
      }
    },
    updated(){
      console.log(1234)
      this.filename = this.filefilename
      this.link = this.filelink
    }
  }
</script>
<style scoped lang="scss">
  .c-download{
    min-height: 20px;
    position: relative;
    width:100%;
  a{
    display: block;
  }
  span{
    padding:10px 0 5px;
    text-overflow: ellipsis;
    display: block;
    width:90%;
    height: 25px;
  }
  strong{
    position: absolute;
    right:10px;
    color:#0b97c4;
    bottom:1px;
  }
  }
</style>
