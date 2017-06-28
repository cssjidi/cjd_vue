import api from 'src/config/apiUrl';
// import Vue from 'vue';
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
export default{
    //通讯录
    addressBook(vm){
        let resource = vm.$resource(api.addressBookUrl)
        //let resource = this.$resource('http://localhost/web/mobile/actp/addressBook/catalogue/1');
        //var rep;
        //var promise = new Promise();
        resource.get({id:1}).then((response)=>{
            let rep = response.body.returnObject;
            let obj ={
                id: rep.id,
                projectId: rep.projectId,
                category: rep.category,
                organize: rep.organize,
                organizePy: rep.organizePy,
                position: rep.position,
                carNumber: rep.carNumber,
                username: rep.username,
                phone: rep.phone,
                outsidePhone:rep.outsidePhone
            }
            Promose.resolve(obj);
            //promise.resolved(obj);
        });
        return promise;
        // //let resource = vm.$resource;

    }
}