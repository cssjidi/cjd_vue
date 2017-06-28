export default{
    filters:{
        time(str){
            let reg = str.match(/(.*)T(.*).000Z$/);
            let time = reg[1]+' '+reg[2];
            return time;
        },
        birthday(str){
            let reg = str.match(/(.*)T(.*).000Z$/);
            let time = reg[1];
            return time;
        },
        type(str){
            console.log(str);
            let type;
            switch (str){
                case 0:
                    type = '普通事件';
                    break;
                case 1:
                    type = '紧急事件';
                    break;
            }
            return type;
        }
    }
}