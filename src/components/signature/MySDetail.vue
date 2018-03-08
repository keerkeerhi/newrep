<template>
  <section class="homeTem">
    <section class="cardSec">
      <div class="cardContent cardBord flexCenter" >
        <span>不错，真不错，天生幼稚</span>
      </div>
    </section>
    <section class="cardSec">
      <div class="cardInfo cardPadd cardBord" >
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
    <section></section>
    <section class="cardSec">
      <div class="cerInfo cardBord" >
        <span class="littleTitle">认证信息</span>
        <section>
          <ul class="identiCls">
            <li v-for="it in identification">
              <div class="circleDiv">
                <img :src="logo" />
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
  export default {
    name: 'MySDetail',
    data () {
      return {
        stype: 0,
        logo,
        identification:[{},{},{},{},{},{},{}]
      }
    },
    created(){
      console.log('--------------菠萝详情')
    }
  }
</script>

<style scoped>
  .homeTem{
    padding: 3.2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }
  .flexCenter{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  .cardBord{
    border: 1px solid #CCCCCC;
  }
  .cardPadd{
    padding: 15px;
  }
  .cardSec{
    padding: 0 3.2rem;
    margin-bottom: 20px;
  }
  .cardInfo>span:nth-child(2n){
    margin-right: 40px;
  }
  .cardContent{
    font-family: STKaiti;
    font-size: 60px;
    height: 300px;
  }
  .cardInfo{
    height: 250px;
    font-size: 14px;
    line-height: 2;
  }
  .cerInfo{
    padding: 15px;
  }
  .identiCls{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .identiCls>li{
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 330px;
    height: 150px;
  }
  .identiCls .famousPerson{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .famousPerson>div:first-child{
    color: #343434;
    font-weight: 700;
    font-size: 16px;
  }
  .famousPerson>div:last-child{
    font-size: 12px;
    color: #6B6B6B;
    margin-top: 20px;
  }
  .circleDiv{
    position: relative;
    top: 20px;
    margin-right: 15px;
    display: inline-block;
    overflow: hidden;
    height: 115px;
    width: 115px;
    border-radius: 50%;
  }
  .circleDiv>img{
    width: 100%;
    height: auto;
  }
</style>
