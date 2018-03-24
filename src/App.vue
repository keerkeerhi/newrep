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
      <div class="mineInfo">
        <router-link class="minetitle" tag="span" to="/UserDetail">
          我的
        </router-link>
      </div>
    </section>
    <div id="app">
      <router-view :style="{minHeight:cMinH}"/>
    </div>
    <section class="footer">
      <section>
        <img :src="pineapple" />
        <div>
          bolodappsup@gmail.com
        </div>
      </section>
      <section></section>
      <section>
        <a class="twitter" href="https://twitter.com/BoloDApp" target="_blank">
          <div></div>
          <span>twitter</span>
        </a>
        <a class="telegram" href="https://t.me/Bolo_Official_CN" target="_blank">
          <div></div>
          <span>telegram</span>
        </a>
      </section>
      <section>
        <img :src="qrcode" />
      </section>
    </section>
  </section>
</template>

<script>
  import pineapple from './assets/icon/bolo.png'
  import './App.scss'
  import qrcode from './assets/icon/qrcode.png'

  export default {
    name: 'App',
    data() {
      return {
        qrcode,
        activeIndex: -1,
        navs: [{name: '首页', url: '/Home'},
          {name: '市场', url: '/Market'}],
        pineapple,
        cMinH: 'auto'
      }
    },
    methods: {
      clickNav(url) {
        this.$router.push(url)
      }
    },
    created() {
      this.cMinH = document.documentElement.clientHeight - 198 + 'px'

      // window.onresize = ()=>{
      //   this.cMinH = document.documentElement.clientHeight - 198 + 'px'
      // }
    },
    mounted(){
      // if (web3 && web3.eth.defaultAccount)
      //   this.$store.setWallet(web3.eth.defaultAccount)
    }
  }
</script>
