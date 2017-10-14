<template>
  <section class="help-box">
      <h3>帮助中心</h3>
  </section>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    created(){
      this.$store.dispatch('changeHeaderTitle',{title:'帮助中心',path:'/medicall/info.index'})
    }
  }
</script>
<style lang="scss" scoped>
  h3{
    text-align: center;
    margin:10px auto;
  }
</style>
