import env from './env';
console.log(env.baseUrl);
export default{
    //通讯录分类目录
    addressBookIndex:env.baseUrl+'mobile/actp/addressBook/category{/id}',
    //通讯录目录
    addressBookCategory:env.baseUrl+'mobile/actp/addressBook/catalogue/',
    //通讯录目录列表 projectId type 0：车号，1：岗位，2：姓名 organizePy  text
    addressBookList:env.baseUrl+'mobile/actp/addressBook/list',
    //通讯录个人详情
    addressBookDetail:env.baseUrl+'mobile/actp/addressBook{/id}',

    //生日名单目录列表
    birthdayIndex:env.baseUrl+'mobile/actp/birthday/catalogue{/id}',
    //生日名单列表
    birthdayList:env.baseUrl+'mobile/actp/birthday/list',
    //生日名单个人详情
    birthdayDetail:env.baseUrl+'mobile/actp/birthday{/id}',

    //特殊餐饮目录列表
    specialIndex:env.baseUrl+'mobile/actp/special/catalogue{/id}',
    //特殊餐饮列表
    specialList:env.baseUrl+'mobile/actp/special/list',
    //特殊餐饮个人详情
    specialDetail:env.baseUrl+'mobile/actp/special{/id}',

    //车号搜索
    carSearch:env.baseUrl + 'mobile/actp/separateCar/search?projectId={id}&type={type}&keyword={text}',
    //https://macts-test.infinitus.com.cn/mobile/actp/separateCar/search?projectId=1&type=1&keyword=j
    //头部统计信息
    carSearchInfo:env.baseUrl + 'mobile/actp/separateCar/statistics{/id}{/carno}',
    //https://macts-test.infinitus.com.cn/mobile/actp/separateCar/statistics/1/car1.json
    //列表
    carList:env.baseUrl + 'mobile/actp/separateCar/employee/list{/id}{/carno}',
    //https://macts-test.infinitus.com.cn/mobile/actp/separateCar/employee/list/1/car1.json
    //个人详情
    carDetail:env.baseUrl + 'mobile/actp/separateCar/employee{/id}',
    //https://macts-test.infinitus.com.cn/mobile/actp/separateCar/employee/3.json

    //事件汇报
    reportList:env.baseUrl + 'mobile/actp/incident/list{/id}',
    reportSave:env.baseUrl + 'mobile/actp/incident/save',
    reportDetail:env.baseUrl + 'mobile/actp/incident/report/{/id}',
    reporterInfo:env.baseUrl +'mobile/actp/user/info'
}
