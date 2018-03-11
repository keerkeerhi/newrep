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
    <section class="cardSec">
      <div class="cardContent cardBord flexCenter">
        <span>不错，真不错，天生幼稚</span>
      </div>
    </section>
    <section class="cardSec">
      <div class="cardInfo cardPadd cardBord">
        <span>菠萝创造者：</span><span>sky</span>
        <span>入手价格：</span><span>20000AIGO</span>
        <span>入手价格：</span><span>2018-03-08 12:32:22</span>
        <span>菠萝类型：</span><span>限量可交易</span>
        <section>
          说明：<p>
          infoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfo
          infoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfo
          infoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfo
          infoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfo
          infoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfo
          infoinfosomeinfoinfoinfosomeinfoinfoinfosomeinfo
        </p>
        </section>
      </div>
    </section>
    <section v-show="stype" class="cardSec">
      <div class="cerInfo cardBord buySec">
        <span>价格：20,000 AIGO</span>
        <el-button style="float: right;" type="primary">支付并拥有</el-button>
      </div>
    </section>
    <section v-show="!stype" class="cardSec">
      <section class="cerInfo cardBord auction">
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
          <el-button style="float: right;" type="primary">付款购买</el-button>
        </footer>
      </section>
    </section>
    <section class="cardSec">
      <div class="cerInfo cardBord">
        <header class="littleTitle">认证信息</header>
        <section>
          <ul class="identiCls">
            <li v-for="it in identification">
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

  export default {
    name: 'signatrueDetail',
    data() {
      return {
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
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/basestyle.css';

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
    border: 1px solid #CCCCCC;
  }

  .cardPadd {
    padding: 15px;
  }

  .cardSec {
    padding: 0 3.2rem;
    margin-bottom: 20px;
  }

  .cardInfo > span:nth-child(2n) {
    margin-right: 40px;
  }

  .cardContent {
    font-family: STKaiti;
    font-size: 60px;
    height: 300px;
  }

  .cardInfo {
    height: 250px;
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

  .auction > footer > span {
    font-size: 12px;
    color: #6B6B6B;
  }

  .auction > header {
    display: flex;
    height: 50px;
    font-size: 16px;
    color: #343434;
  }

  .auction > header :first-child {
    margin-right: 20px;
  }

  .auction > header > :nth-child(3) {
    flex: 1;
  }

  .chartSec {
    height: 200px;
  }

  .identiCls {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .identiCls > li {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 300px;
    height: 150px;
  }

  .identiCls .famousPerson {
    display: flex;
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
    margin-top: 20px;
  }

  .pimg {
    position: relative;
    top: 20px;
    margin-right: 15px;
    height: 115px;
    width: 115px;
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
