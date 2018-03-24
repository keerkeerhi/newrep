import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

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

const router = new Router({
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
      meta: {requiresAuth: true},
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
      meta: {requiresAuth: true},
      component: Register
    },
    {
      path: '/MySDetail/:id',
      name: 'MySDetail',
      component: MySDetail
    }
  ]
})


let interval = 0;
// 持续验证钱包状态
const checkWallet = (path) => {
  interval = setInterval(() => {
    console.log('interval')
    let currentWallet = web3.eth.defaultAccount
    console.log('--->', currentWallet, store.state.wallet)
    // 如果用户logout
    if (!currentWallet) {
      router.push('/Login')
    }
    else if (currentWallet != store.state.wallet) {
      store.commit('setWallet', currentWallet)
      router.go(path);
    }
  }, 850)
}

// 验证钱包状态
const setWallet = (path) => {
  let wallet = null;
  try {
    wallet = web3.eth.defaultAccount
    if (!wallet)
      throw new Error('钱包需要解锁')
    else
    {
      store.commit("setWallet",wallet)
      checkWallet(path)
    }
  } catch (e) {
    router.push('/Login');
  } finally {
    return wallet;
  }
}

// 登录验证
router.beforeEach((to, from, next) => {
  clearInterval(interval)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log('----->>>', to)
    if (setWallet(to.path))
      next()
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
