<template>
  <section class="rootDiv">
    <section id="header" class="addShadow">
      <div>
        <router-link tag="img" to="/" class="logo" :src="pineapple"/>
      </div>
      <div>
        <ul class="navUl clearfloat">
          <router-link :to="it.url" v-for="(it,index) in navs" :key="index" tag="li">
            {{it.name}}
          </router-link>
        </ul>
        <!--<el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" >-->
          <!--<el-menu-item index="Login">beginning</el-menu-item>-->
          <!--<el-menu-item index="Market">Market</el-menu-item>-->
        <!--</el-menu>-->
      </div>
      <div class="mineInfo" >
        <router-link class="minetitle" tag="span" to="/UserDetail" >
          我的
        </router-link>
      </div>
    </section>
    <div id="app">
      <router-view />
    </div>
    <section class="footer">
      <span>使用条款</span>
      <span>隐私策略</span>
    </section>
  </section>
</template>

<script>
import pineapple from './assets/icon/bolo.png'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: -1,
      navs: [{ name: '首页', url: '/Home' },
        {name: '市场', url: '/Market'}],
      pineapple
    }
  },
  methods: {
    clickNav (url) {
      this.$router.push(url)
    }
  },
  created () {
  }
}
</script>

<style lang="scss" >
  @import "assets/css/style";
  @import "assets/font/iconfont.css";
  @import "assets/css/sass-base";

  #app {
    font-family: 微软雅黑;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $base_black;
    height: 90%;
    margin-top: 48px;
  }

  .clearfloat:after{
    display:block;
    clear:both;content:"";
    visibility:hidden;
    height:0
  }
  .rootDiv{
    background: #fff;
  }
  #header{
    display: flex;
    flex-direction: row;
    line-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    z-index: 99997;
    color: #A7A7A7;
    background: $base_black;
  }
  #header .logo{
    margin: 4px 0 0 3.2rem;
    height: 40px;
    cursor: pointer;
  }
  #header>div{
    flex: 1;
    height: 48px;
    line-height: 48px;
  }
  #header>div:nth-child(2){
    text-align: center;
  }
  .addShadow{
    box-shadow: 0 0 4px rgba(0,0,0,.2);
  }
  .navUl{
    display: inline-block;
  }
  .navUl>li{
    float: left;
    width: 100px;
    text-align: center;
    height: 46px;
    line-height: 46px;
    cursor: pointer;
  }
  .navUl .router-link-active,.minetitle.router-link-active{
    color: $base_yellow;
    border-bottom: 2px solid $base_yellow;
  }
  .mineInfo{
    text-align: right;
  }
  .mineInfo>.minetitle{
    float: right;
    height: 46px;
    margin-right: 3.2rem;
    cursor: pointer;
  }
  .minetitle>.iconfont{
    font-size: 35px;
  }
  .footer{
    color: #444;
    height: 48px;
    line-height: 48px;
    text-align: center;
  }
  .footer>span{
    cursor: pointer;
  }
  .footer>span:first-child{
    margin-right: 20px;
  }
</style>
