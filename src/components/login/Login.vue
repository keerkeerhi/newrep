<template>
  <section class="homeTem">
    <section v-if="isinstalled" class="installCls2" >
      <h2>Your MetaMask Is Locked</h2>
      <p>
        只需打开MetaMask并按照说明进行解锁即可。
      </p>
    </section>
    <section v-else class="installCls" >
      <h2>Would you like to play?</h2>
      <p>
        您将需要一个安全的地方来储存您可爱的谜恋猫！像MetaMask这样的安全钱包即是完美之地。同时您也可以通过钱包进入游戏（无需另设密码）。
      </p>
      <el-button @click="installMeta" type="success" round>安装MetaMask</el-button>
    </section>
  </section>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      isinstalled:false,
    }
  },
  mounted(){
    if (typeof web3 == 'undefined')
      this.isinstalled = false;
    else
      this.isinstalled = true;
    // this.isinstalled = false;
  },
  methods: {
    installMeta(){
      window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en");
    }
  }
}
</script>

<style scoped>
  .homeTem{
    padding: 3.2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }
  .installCls{
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    align-items: center;
  }
  .installCls>h2{
    font-size: 3.8rem;
    font-weight: 500;
    color: #2a2825;
    margin-bottom: 1.2rem;
  }
  .installCls>p{
    width: 700px;
    font-size: 25px;
    line-height: 1.4;
    color: #82817d;
    margin-bottom: 1.2rem;
  }
  .installCls :nth-child(3)
  {
    margin-bottom: 150px;
  }
  .installCls2{
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    align-items: center;
  }
  .installCls2>h2{
    font-size: 3.8rem;
    font-weight: 500;
    color: #2a2825;
    margin-bottom: 1.2rem;
  }
  .installCls2>p{
    font-size: 25px;
    line-height: 1.4;
    color: #82817d;
    margin-bottom: 1.2rem;
    margin-bottom: 150px;
  }
</style>
