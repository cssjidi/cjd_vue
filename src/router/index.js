import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import ctx from '../store/modules/context'
import Main from '../containers/main.vue'


//const Main = r => require.ensure([],()=>r(require('../containers/main.vue')),'Medicall')

const Signin = r => require.ensure([],()=>r(require('../containers/signin.vue')),'Medicall')
//
const NotFoundComponent = r => require.ensure([],()=>r(require('../containers/404.vue')),'notFound')

const Post = r => require.ensure([],()=>r(require('../containers/post/post.vue')),'Post')

const PostIndex = r => require.ensure([],()=>r(require('../containers/post/index.vue')),'Post')

const PostDetail = r => require.ensure([],()=>r(require('../containers/post/detail.vue')),'Post')

const PostImage = r => require.ensure([],()=>r(require('../containers/post/image.vue')),'Image')

const AccountIndex = r => require.ensure([],()=>r(require('../containers/account/index.vue')),'Account')
const AccountMe = r => require.ensure([],()=>r(require('../containers/account/me.vue')),'Account')

const Found = r => require.ensure([],()=>r(require('../containers/found/found.vue')),'Found')
const FoundIndex = r => require.ensure([],()=>r(require('../containers/found/index.vue')),'Found')


const Test = r => require.ensure([],()=>r(require('../containers/test.vue')),'Test')

//
// const Medicall = r => require.ensure([],()=>r(require('../containers/medicall/medicall.vue')),'Medicall')
// const MedicallInfoIndex = r => require.ensure([],()=>r(require('../containers/medicall/info.index.vue')),'Medicall')
// const MedicallInfoList = r => require.ensure([],()=>r(require('../containers/medicall/info.list.vue')),'Medicall')
// const MedicallInfoDetail = r => require.ensure([],()=>r(require('../containers/medicall/info.detail.vue')),'Medicall')
// const MedicallReportList = r => require.ensure([],()=>r(require('../containers/medicall/report.list.vue')),'Medicall')
//
// const Help = r => require.ensure([],()=>r(require('../containers/help/help.vue')),'help')
// const HelpIndex = r => require.ensure([],()=>r(require('../containers/help/index.vue')),'help')

Vue.use(Router)

const router = new Router({
  //mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent },
    {
      path:'/',
      component:Main,
      redirect:'/post/index',
      //redirect:'/signin',
      children:[
      {
          path: '/test',
          component: Test,
          name: 'test',
        },
        {
          path: '/signin',
          component: Signin,
          name: 'signin',
        },
        {
          path: '/post',
          component: Post,
          name: 'Post',
          children:[
            {
              path:'/post/index',
              component:PostIndex,
              name:'PostIndex',
            },
            {
              path:'/post/detail',
              component:PostDetail,
              name:'PostDetail',
            },
            {
              path:'/post/:postId/image',
              component:PostImage,
              name:'PostImage',
            }
          ]
        },
        {
          path: '/account',
          component: AccountIndex,
          name: 'Post',
          meta: { auth: true},
          children:[
            {
              path:'/account/me',
              component:AccountMe,
              name:'AccountMe',
              meta: { auth: true},
            },
          ]
        },
        {
          path: '/found',
          component: Found,
          name: 'Found',
          children:[
            {
              path:'/found/index',
              component:FoundIndex,
              name:'FoundIndex',
            },
          ]
        },
        /*
        {
          path:'/medicall',
          component:Medicall,
          name:'medicall',
          meta: { auth: true },
          children:[
            {
              path:'info.list',
              component:MedicallInfoList,
              name:'medicallinfolist',
              meta: { auth: true,title:'体检通知' },
            },
            {
              path:'info.index',
              component:MedicallInfoIndex,
              name:'medicallinfoindex',
              meta: { auth: true,title:'个人中心' },
            },
            {
              path:'info.detail/:id',
              component:MedicallInfoDetail,
              name:'medicalldetail',
              meta: { auth: true,title:'通知详情' },
            },
            {
              path:'report.list/:id',
              component:MedicallReportList,
              name:'medicallreportlist',
              meta: { auth: true,title:'体检报告' },
            },
          ]
        },
        {
          path:'/help',
          component:Help,
          name:'help',
          meta: { auth: true,title:'帮助' },
          children:[
            {
              path:'index',
              name:'helpIndex',
              component:HelpIndex,
              meta: { auth: true,title:'帮助' },
            }
          ]
        }
        */
      ]
    },
  ]
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(record=>record.meta.auth)){
      if (!ctx.state.USER_SIGNIN) {
        next({
          path: '/signin',
        })
      } else {
        next()
      }
  }else{
    next()
  }
})


export default router
