<template>
  <div class="container">
    <div class="main">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  @import "scss/media.scss";
  @import "scss/reset.scss";
  @import "scss/form.scss";
  @import "scss/common.scss";
  @import "scss/icon.scss";
  body{
    background-color: #fff;
  }
  .container{
    width: 100%;
    margin:0 auto;
    height: 100%;
    background-color: #fff;
  }
  .nav{
    position: absolute;
    width: 100%;
    left: 40px;
    bottom:-50px;
  }
  .nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav ul li{
    width: 108px;
    height: 48px;
    line-height: 48px;
    border:1px solid #dadada;
    text-align: center;
    float:left;
  }
  .nav ul li a{
    text-decoration: none;
  }
</style>
