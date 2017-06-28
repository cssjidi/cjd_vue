import Vue from 'vue';
import VueRouter from 'vue-router';

const Main = r => require.ensure([],()=>r(require('./pages/main.vue')),'index')

const Login = r => require.ensure([],()=>r(require('./pages/login/index')),'login')

const Examine= r => require.ensure([],()=>r(require('./pages/examine/index')),'examine')
const ExamineIndex = r => require.ensure([],()=>r(require('./pages/examine/children/index')),'examine')
const ExamineList = r => require.ensure([],()=>r(require('./pages/examine/children/list')),'examine')
const ExamineDetail = r => require.ensure([],()=>r(require('./pages/examine/children/detail')),'examine')

const Test = r => require.ensure([],()=>r(require('./pages/Test.vue')),'test')



Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        component:Main,
        redirect:'/test',
        children:[
            {
                path:'/test',
                component:Test,
                name:'test'
            },
            {
                path:'/login',
                component:Login,
                name:'login'
            },
            {
                path:'/examine',
                component:Examine,
                name:'examine',
                children:[
                    {
                        path:'list',
                        component:ExamineList,
                        name:'examineList',
                    },
                    {
                        path:'detail',
                        component:ExamineDetail,
                        name:'examineDetail',
                    },
                    {
                        path:'index',
                        component:ExamineIndex,
                        name:'examineIndex',
                    }
                ]
            }
        ]
    },
]
// routes.beforeEach((to, from, next) => {
//     this.$store.dispatch('setContext',{
//         view:'router',
//         id:'1243'
//     })
// })
const router = new VueRouter({
    routes:routes
})

export default router;
