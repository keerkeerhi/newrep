<template>
  <section class="mshomeTem">
    <div class="backCls">
      <section class="backClsBlob" @click="goPrev()">
        <i class="icon-icon- iconfont" />
        <span>返回</span>
      </section>
      <!--<section class="backClsBlob">-->
      <!--</section>-->
      <section></section>
    </div>
    <section class="cardSec cardCard">
      <div class="cardBord">
        <div class="cardContent flexCenter">
          <img :src="boloInfo.pine_apple" />
        </div>
        <div class="cardPadd">
          <section>
            <div><span>创建人：</span><span>{{boloInfo.c_user}}</span></div>
            <div><span>创建价格：</span><span>{{boloInfo.c_price}}ETH</span></div>
            <div><span>创建时间：</span><span>{{boloInfo.c_time}}</span></div>
            <div><span>菠萝章类型：</span><span>{{boloInfo.p_type}}</span></div>
          </section>
          <section>
            说明：<span>{{boloInfo.info}}</span>
          </section>
        </div>
      </div>
    </section>
    <section class="cardSec">
      <div class="cardBord identDiv">
        <header class="littleTitle">
          <span>认证信息</span>
        </header>
        <section>
          <ul class="identiCls">
            <li @click="toOther(boloInfo.wallet)" v-for="it in identification">
              <div class="circleDiv pimg">
                <img :src="'data:image/png;base64,'+boloInfo.avatar" />
              </div>
              <div class="famousPerson">
                <div>{{boloInfo.nickname}}</div>
                <div>{{boloInfo.mark}}</div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
  import boloService from '../../service/bolosev'

  export default {
    name: 'signatrueDetail',
    data() {
      return {
        stype: 0,
        identification: [{}],
        pid: '',
        boloInfo: {
          p_type: '',
          nickname: '',
          avatar: '',
          mark: '',
          c_type: '',
          pine_apple: '',
          c_time: '',
          wallet: '',
          price: '',
          status: '', //菠萝状态，sale表示在售，lock表示锁定，sold表示已售，collect表示收藏
          start_time: '2018-01-22 10:10:52',
          end_time: '2018-01-22 10:11:22',
          start_price: '',
          end_price: '',
          info: '',
          c_user: '',
          abi: '',
          contract: '',
        }
      }
    },
    created() {
      this.pid = this.$route.params.id;
      boloService.pine_apple_detail({pid: this.pid}).then(res => {
        if (res.code == 0) {
          this.boloInfo = res.data
        }
        else
          this.$message({
            message: '菠萝找不到了！',
            type: 'warning'
          });
      })
    },
    methods: {
      goPrev(){
        window.history.go(-1);
      },
      toOther(cid)
      {
        let id  = cid.toLowerCase();
        this.$router.push({
          name: 'OtherDetail',
          params: { id }})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/basestyle';
  @import "../../assets/css/sass-base";
  .mshomeTem {
    padding: 1.2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }

  .flexCenter {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }

  .cardBord {
    /*border: 1px solid #CCCCCC;*/
    box-shadow: 0 0 4px rgba(0,0,0,.3);
  }
  .identDiv{
    >header{
      height: 50px;
      line-height: 50px;
      background: $base_black;
      color: #fff;
      >:first-child {
        margin: 0 20px;
      }
    }
    >section:nth-child(2){
      padding: 0 20px;
    }
  }

  .cardSec {
    padding: 0 3.2rem;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .cardContent {
    font-family: STKaiti;
    font-size: 60px;
    height: 220px;
    padding: 20px;
    >img{
      width: 100%;
      height: 100%;
    }
  }

  .cardPadd {
    padding: 10px 20px 45px 20px;
    font-weight: bold;
    font-size: 16px;
    >section:first-child{
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      margin-bottom: 25px;
      >div{
        flex: 1;
        >span:first-child{
          margin-right: 10px;
        }
      }
    }
  }

  .cerInfo {
    padding: 15px;
  }

  .buySec {
    height: 44px;
    line-height: 44px;
  }
  .buySec>.payBtn{
    width: 200px;
    border-radius: 0px;
    color: $base_black;
    float: right;
    margin-right: 25px;
    font-weight: 700;
  }
  .auction > footer{
    margin-bottom: 20px;
  }
  .auction > footer > span {
    font-size: 12px;
    color: #6B6B6B;
    margin-left: 20px;
  }

  .auction > header {
    display: flex;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #fff;
    background: $base_black;
  }

  .auction > header :first-child {
    margin: 0 20px;
  }

  .auction > header > :nth-child(3) {
    flex: 1;
  }
  .auction > header > :last-child{
    margin-right: 20px;
  }

  .chartSec {
    height: 200px;
  }

  .identiCls {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .identiCls > li {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 270px;
    height: 120px;
    max-width: 270px;
    cursor: pointer;
  }

  .identiCls .famousPerson {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }

  .famousPerson > div:first-child {
    color: #343434;
    font-weight: 700;
    font-size: 16px;
  }

  .famousPerson > div:last-child {
    font-size: 12px;
    color: #6B6B6B;
    margin-top: 15px;
  }

  .pimg {
    position: relative;
    top: 20px;
    margin-right: 15px;
    height: 64px;
    width: 64px;
  }

  .backCls{
    margin-left: 3.2rem;
    height: 48px;
    line-height: 48px;
    display: flex;
    flex-direction: row;
  }
  .backClsBlob{
    cursor: pointer;
  }
  .backClsBlob>i{
    font-size: 40px;
  }
  .backClsBlob>span{
    position: relative;
    top: -5px;
    margin-left: 10px;
    font-size: 16px;
  }
</style>
