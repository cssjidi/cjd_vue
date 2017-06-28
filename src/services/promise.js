import Vue from 'vue';
import VueResource from 'vue-resource';
export default class ajax{
    constructor(){

    }
    get(){
        $http.get('https://api.tianapi.com/txapi/caipu/?key=1234').then(data=>{console.log(data)})
        //console.log(1234);
    }
}
