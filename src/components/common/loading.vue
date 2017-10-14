<template>
  <div class="v-loading">
    <div class="overlay"></div>
    <div class="layermbox layermbox2">
      <div class="layermchild">
        <div class="layermcont"><i></i><i class="laymloadtwo"></i><i></i></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .v-loading { position: fixed; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%; z-index: 999; }
  .overlay { position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: block; background-color: rgba(0,0,0,.1); }
  .layermbox { position: relative; z-index: 19891014; top: 50%; margin-top: -15px; text-align: center; }
  .layermchild { display: inline-block; position: relative; }
  .layermchild { text-align: left; background-color: #fff; font-size: 14px; border-radius: 3px; box-shadow: 0 0 8px rgba(0,0,0,.1); pointer-events: auto; -webkit-overflow-scrolling: touch; -webkit-animation-fill-mode: both; animation-fill-mode: both; -webkit-animation-duration: .18s; animation-duration: .18s; }
  .layermbox0 .layermchild { max-width: 90%; min-width: 150px; }
  .layermbox1 .layermchild { border: none; border-radius: 0; }
  .layermbox2 .layermchild { width: auto; max-width: 260px; min-width: 40px; border: none; background: 0 0; box-shadow: none; color: #fff; }
  .layermcont { padding: 20px 15px; line-height: 22px; text-align: center; }
  .layermbox1 .layermcont { padding: 0; text-align: left; }
  .layermbox2 .layermcont { text-align: center; padding: 0; line-height: 0; }
  .layermbox2 .layermcont i { width: 25px; height: 25px; margin-left: 8px; display: inline-block; background-color: #fff; border-radius: 100%; -webkit-animation: bouncedelay 1.4s infinite ease-in-out; animation: bouncedelay 1.4s infinite ease-in-out; -webkit-animation-fill-mode: both; animation-fill-mode: both; }

  @-webkit-keyframes bouncedelay {
    0%,100%,80% { transform: scale(0); -webkit-transform: scale(0); }
    40% { transform: scale(1); -webkit-transform: scale(1); }
  }

  @keyframes bouncedelay {
    0%,100%,80% { transform: scale(0); -webkit-transform: scale(0); }
    40% { transform: scale(1); -webkit-transform: scale(1); }
  }

  .layermbox2 .layermcont i:first-child { margin-left: 0; -webkit-animation-delay: -.32s; animation-delay: -.32s; }
  .layermbox2 .layermcont i.laymloadtwo { -webkit-animation-delay: -.16s; animation-delay: -.16s; }
  .layermbox2 .layermcont > div { line-height: 22px; padding-top: 7px; margin-bottom: 20px; font-size: 14px; }
</style>
