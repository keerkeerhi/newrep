<template>
  <section class="homeTem">
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
          <img :src="cardimg" />
        </div>
        <div class="cardInfo cardPadd">
          <span>创建人：</span><span>sky</span>
          <span>创建价格：</span><span>0.20ETH</span>
          <span>创建时间：</span><span>2018-03-08 12:32:22</span>
          <span>菠萝章类型：</span><span>创世纪念章</span>
          <section>
            说明：<span>
            infoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfo
          </span>
          </section>
        </div>
      </div>
    </section>
    <section v-show="stype" class="cardSec">
      <div class="cerInfo cardBord buySec">
        <span>价格：20,000 AIGO</span>
        <el-button type="primary">支付并拥有</el-button>
      </div>
    </section>
    <section v-show="!stype" class="cardSec ">
      <section class="cardBord auction">
        <header>
            <span>
              起拍价格：0.001ETH
            </span>
          <span>
              当前价格：0.0039ETH
            </span>
          <span></span>
          <span>
              剩余时间：10:10:23
            </span>
        </header>
        <section id="chartSec" class="chartSec">

        </section>
        <footer class="buySec">
          <span>菠萝会随着时间越来越低，但是等待也可能会被其他人先买走哦！</span>
          <el-button class="payBtn" type="primary">立即购买</el-button>
        </footer>
      </section>
    </section>
    <section class="cardSec">
      <div class="cardBord identDiv">
        <header class="littleTitle">
          <span>认证信息</span>
        </header>
        <section>
          <ul class="identiCls">
            <li @click="toOther(it.userId)" v-for="it in identification">
              <div class="circleDiv pimg">
                <img :src="logo"/>
              </div>
              <div class="famousPerson">
                <div>柯洁</div>
                <div>高级玩家信息</div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
  import logo from '../../assets/icon/timg.jpg'
  import echarts from 'echarts'
  import cardimg from '../../assets/icon/card.png'

  export default {
    name: 'signatrueDetail',
    data() {
      return {
        cardimg,
        stype: 0,
        logo,
        identification: [{}, {}, {}, {}, {}, {}, {}]
      }
    },
    mounted() {
      let chartSec = document.getElementById('chartSec')
      let chartBody = echarts.init(chartSec)
      let option = {
        xAxis: {
          type: 'category',
          data: ['12', '13', '14', '15']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [10,9,8,7],
          type: 'line'
        }]
      };
      chartBody.setOption(option)
      console.log('--------------菠萝详情')
    },
    methods: {
      goPrev(){
        window.history.go(-1);
      },
      toOther(id)
      {
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
  .homeTem {
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

  .cardPadd {
    padding: 5px 15px 20px 15px;
  }

  .cardSec {
    padding: 0 3.2rem;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .cardInfo > span:nth-child(2n) {
    margin-right: 40px;
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

  .cardInfo {
    font-size: 14px;
    line-height: 2;
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
    cursor: pointer;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 270px;
    height: 120px;
    max-width: 270px;
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
