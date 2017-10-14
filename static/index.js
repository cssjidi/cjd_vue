//定义依赖组件，并为之命名
define(['text!com.csair.ehome.app.health/index.html', 'com.csair.base/urlConfig',
    'butterflysoc/components/socview', 'butterflysoc/components/session',
    'com.csair.base/androidXwalkHelper'
  ],
  function(listViewTemplate, UrlConfig, SocView, Session, androidXwalkHelper) {
    var IndexView = SocView.extend({
      id: 'uniform-main',
      events: {
      },
      type: 'portal',
      newView: null,
      events: {
        // 注册您的页面事件
        "click #getAccountMessage": "getAccountMessageAction",
        "click #getInformation": "getInformationAction",
        "click #getContactBase64": "getContactBase64Action",
        "click #getContact": "getContactAction",
        "click #getContacts": "getContactsAction",
        "click #textsend": "textsendAction",
        "click #getPosition": "getPositionAction",
        "click #goQRCode": "goQRCodeAction",
        "click #createQRCode": "createQRCodeAction",
        "click #goTestPage": "goTestPageAction",
        "click #goBAIDU": "goBAIDUAction"
      },
      bindings: {},
      list_iScroll: null,
      render: function() {
        //initial android xwalk webkit process
        androidXwalkHelper.initialAndroidWebviewXwalk();

        SocView.prototype.render.call(this);

        return this;
      },
      onShow: function() {
        // newView.show({});
        //页面初始化完成后执行，业务逻辑写在此。
      },

      getAccountMessageAction:function(){
        cordova.exec(function(data) {
          alert(data);
        }, function(err) {}, "CubeLogin", "getAccountMessage", []);
      },
      getInformationAction:function(){
        cordova.exec(function(data) {
          alert("cordova:"+data.username+"--"+data.password+"--"+data.deviceId);
        }, function(err) {}, "Information", "getInformation", []);
      },

      getContactBase64Action:function(){
        // alert("getContactsAction");
        cordova.exec(function(data) {
          alert(data);
          data = $.parseJSON(data);
          $("#logoimgsrcBase64").attr("src","data:image/jpg;base64,"+data.base64Img);
        }, function(err) {}, "GetContacts", "getContactBase64Img",[]);
      },

      getContactAction:function(){
        // alert("getContactsAction");
        cordova.exec(function(data) {
          alert(data);
          data = $.parseJSON(data);
          $("#logoimgsrc").attr("src",data.logolocalurl);
        }, function(err) {}, "GetContacts", "getContact",[]);
      },
      getContactsAction:function(){
        // alert("getContactsAction");
        cordova.exec(function(data) {
          alert(data);
        }, function(err) {}, "GetContacts", "getContacts",[]);
      },
      textsendAction:function(){
        // alert("getContactsAction");
        alert($("#textsendmsg").val()+"  "+$("#textsendtouser").val());
        cordova.exec(function(data) {
          alert(data);
        }, function(err) {}, "GetContacts", "sendTxtMsg",[$("#textsendmsg").val(),$("#textsendtouser").val()]);
      },

      getPositionAction:function(){
        cordova.exec(function(data) {
          alert(data);
        }, function(err) {}, "GetPosition", "getPosition",["23.374848","113.301812"]);
      },

      goQRCodeAction:function(){
        cordova.exec(function(data) {
          $("#qrcoderesultspan").html(data);
          $("#qrcoderesult").show();
        }, function(err) {}, "BarcodeScanner", "scan", ["main"]);
      },
      createQRCodeAction:function(){
        cordova.exec(function(data) {
          // alert(data);
          data = $.parseJSON(data);
          $("#qrcoderesultimg").attr("src","data:image/jpg;base64,"+data.base64Img);
          $("#qrcodeimgresult").show();
        }, function(err) {}, "BarcodeScanner", "createQRCode", ["http://www.baidu.com"]);
      },
      goTestPageAction:function(){
        window.butterfly.NavigatorReducer("com.csair.qrcode/testpage");
      },
      goBAIDUAction:function(){
        window.location.href="http://www.baidu.com";
      }
    });
    return IndexView;
  });
