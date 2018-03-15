import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 入口
// const Index = r => require.ensure([], () => r(require('../components/Index')), 'Index')

// 首页
const Home = r => require.ensure([], () => r(require('../components/home/Home')), 'Home')
// 登录
const Login = r => require.ensure([], () => r(require('../components/login/Login')), 'Login')
// 市场
const Market = r => require.ensure([], () => r(require('../components/market/Market')), 'Market')
// 菠萝详情
const SignatureDetail = r => require.ensure([], () => r(require('../components/signature/SignatureDetail')), 'SignatureDetail')
// 用户详情
const UserDetail = r => require.ensure([], () => r(require('../components/user/UserDetail')), 'UserDetail')
// 其他用户详情
const OtherDetail = r => require.ensure([], () => r(require('../components/user/OtherDetail')), 'OtherDetail')
// 用户注册页
const Register = r => require.ensure([], () => r(require('../components/register/Register')), 'Register')
// 我的菠萝详情
const MySDetail = r => require.ensure([], () => r(require('../components/signature/MySDetail')), 'MySDetail')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Market',
      name: 'Market',
      component: Market
    },
    {
      path: '/SignatureDetail/:id',
      name: 'SignatureDetail',
      component: SignatureDetail
    },
    {
      path: '/UserDetail',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/OtherDetail/:id',
      name: 'OtherDetail',
      component: OtherDetail
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/MySDetail/:id',
      name: 'MySDetail',
      component: MySDetail
    }
  ]
})
