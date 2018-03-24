<template>
  <section class="LhomeTem">
    <section v-if="isinstalled" class="installCls2">
      <h2>Your MetaMask Is Locked</h2>
      <p>
        只需打开MetaMask并按照说明进行解锁即可。
      </p>
    </section>
    <section v-else class="installCls">
      <h2>Would you like to play?</h2>
      <p>
        您将需要一个安全的地方来储存您的菠萝！像MetaMask这样的安全钱包即是完美之地。同时您也可以通过钱包进入游戏（无需另设密码）。
      </p>
      <el-button v-if="!clicked" class="startPlay" type="primary" @click="installMeta">安装MetaMask</el-button>
      <el-button v-else class="startPlay" type="primary" @click="installedM">安装完毕</el-button>
    </section>
  </section>
</template>

<script>
  import userService from '../../service/userev'

  export default {
    name: 'login',
    data() {
      return {
        isinstalled: false,
        clicked: false,
        timeInt: 0,
        wallet: ''
      }
    },
    created() {
      if (typeof web3 == 'undefined')
        this.isinstalled = false;
      else {
        this.isinstalled = true;
        if (web3.eth.defaultAccount) {
          userService.user_info({wallet: web3.eth.defaultAccount}).then(res => {
            if (res.code == 0)
              this.$router.push('./UserDetail')
            else
              this.$router.push('./Register')
          })
        }
        else {
          this.timeInt = setInterval(() => {
            this.wallet = web3.eth.defaultAccount
            if (this.wallet)
              this.$router.push('/UserDetail')
          }, 500)
        }
      }
      // this.isinstalled = false;
    },
    methods: {
      installedM() {
        this.$router.go('/Login');
        // this.$router.push({
        //   path:this.$route.fullPath, // 获取当前连接，重新跳转
        //   query:{
        //     _time:new Date().getTime()/1000  // 时间戳，刷新当前router
        //   }
        // })
      },
      installMeta() {
        this.clicked = true;
        var UA = navigator.userAgent.toLowerCase();
        try {
          let name = !-[1,] ? 'ie' :
            (UA.indexOf("firefox") > 0) ? 'firefox' :
              (UA.indexOf("chrome") > 0) ? 'chrome' :
                window.opera ? 'opera' :
                  window.openDatabase ? 'safari' :
                    'unkonw';
          if (name == 'chrome')
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en");
          if (name == 'fireFox')
            window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/");
        } catch (e) {
        }
        ;
      },
      installedMeta() {
        this.$router.push('/UserDetail')
      }
    },
    beforeDestroy() {
      console.log('--------------离开之前销毁定时器')
      clearInterval(this.timeInt)
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/sass-base";

  .LhomeTem {
    display: flex;
    flex-direction: column;
    >section:first-child{
      margin-top: 200px;
    }
  }

  .installCls {
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    align-items: center;
  }

  .installCls > h2 {
    font-size: 3.8rem;
    font-weight: 500;
    color: #2a2825;
    margin-bottom: 1.2rem;
  }

  .installCls > p {
    width: 700px;
    font-size: 25px;
    line-height: 1.4;
    color: #82817d;
    margin-bottom: 1.2rem;
  }

  .installCls :nth-child(3) {
    color: $base_black;
    border-radius: 0px;
    margin-bottom: 150px;
  }

  .installCls2 {
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    align-items: center;
    position: absolute;
    /*top: calc(50% - 132px);*/
    left: calc(50% - 332.5px);
  }

  .installCls2 > h2 {
    font-size: 3.8rem;
    font-weight: 500;
    color: #2a2825;
    margin-bottom: 1.2rem;
  }

  .installCls2 > p {
    font-size: 25px;
    line-height: 1.4;
    color: #82817d;
    margin-bottom: 1.2rem;
    margin-bottom: 150px;
  }
  .startPlay{
    width: 220px;
    height: 60px;
    color: $base_black;
    font-weight: 600;
    border-radius: 1px;
    margin-top: 38px;
    font-size: 22px;
  }

</style>
