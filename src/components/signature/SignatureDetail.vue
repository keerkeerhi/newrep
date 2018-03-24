<template>
  <section class="siHomeTem">
    <div class="backCls">
      <section class="backClsBlob" @click="goPrev()">
        <i class="icon-fanhui iconfont"/>
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
        <hr v-show="this.boloInfo.start_price==this.boloInfo.end_price" style="margin: 0 20px;"/>
        <section v-show="this.boloInfo.start_price==this.boloInfo.end_price">
          <div class="cerInfo buySec">
            <span>价格：<span class="priceCls">{{boloInfo.price}} ETH</span></span>
            <el-button class="payBtn" type="primary">支付并拥有</el-button>
          </div>
        </section>
      </div>
    </section>
    <section v-show="this.boloInfo.start_price!=this.boloInfo.end_price" class="cardSec ">
      <section class="cardBord auction">
        <header>
            <span>
              起拍价格：{{boloInfo.start_price}}ETH
            </span>
          <span>
              当前价格：{{boloInfo.price}}ETH
            </span>
          <span></span>
          <span>
              剩余时间：{{this.remainTime}}
          </span>
        </header>
        <section class="chartSec">
          <svg width="1200" height="300" xmlns="http://www.w3.org/2000/svg">
            <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
            <g>
              <title>价格图示</title>
              <rect fill="#ffffff" id="canvas_background" height="302" width="762" y="-1" x="-1"/>
              <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
              </g>
            </g>
            <g>
              <title>当前价格{{boloInfo.price}}ETH</title>
              <!-- 左y轴 -->
              <line v-if="this.boloInfo.start_price>this.boloInfo.end_price" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_8"
                    y2="276" x2="13.5" y1="14" x1="13.5" stroke-width="1.5" stroke="#000" fill="none"/>
              <!-- x轴 -->
              <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_9" y2="276" x2="1186.5" y1="276"
                    x1="13.5" stroke-width="1.5" stroke="#000" fill="none"/>
              <!-- 右y轴 -->
              <line v-if="this.boloInfo.start_price<this.boloInfo.end_price" stroke-linecap="undefined" stroke-linejoin="undefined"
                    id="svg_10" y2="14" x2="1186.5" y1="276" x1="1186.5" stroke-width="1.5" stroke="#000" fill="none"/>
              <!-- 从左到右下降 -->
              <line v-if="this.boloInfo.start_price>this.boloInfo.end_price" stroke-linecap="undefined" stroke-linejoin="undefined"
                    id="svg_14" y2="276" x2="1186.5" y1="14" x1="13.5" stroke-width="1.5" stroke="#000" fill="none"/>
              <!-- 从左到右上升 -->
              <line v-if="this.boloInfo.start_price<this.boloInfo.end_price" stroke-linecap="undefined" stroke-linejoin="undefined"
                    id="svg_15" y2="13.5" x2="1186.5" y1="276" x1="12.5" stroke-width="1.5" stroke="#000" fill="none"/>
              <!-- 圆圈 -->
              <ellipse ry="7.5" rx="6" id="svg_18" :cy="map.cy" :cx="map.cx" stroke-opacity="null" stroke-width="1.5"
                       stroke="#000" fill="#ffe000"/>
            </g>
          </svg>
          <section class="timeDiv">
            <span>开始时间：{{boloInfo.start_time}}</span>
            <span>结束时间：{{boloInfo.end_time}}</span>
          </section>
        </section>
        <footer class="buySec">
          <span>菠萝会随着时间越来越低，但是等待也可能会被其他人先买走哦！</span>
          <el-button class="payBtn" type="primary" @click="paySign()">立即购买</el-button>
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
            <li @click="toOther(boloInfo.wallet)" v-for="it in identification">
              <div class="circleDiv pimg">
                <img :src="boloInfo.avatar" @error="setDefaultImg"/>
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
  import {translatSecond, DatetoSecond} from "../common/Util"
  import {getBC, bidBolo} from "../common/web3Util"
  import defaultpp from '../../assets/icon/defaultpp.jpg'

  export default {
    name: 'signatrueDetail',
    data() {
      return {
        defaultpp,
        stype: 0,
        identification: [{}],
        map: {
          xPercent: 0.1,
          beginMoney: 20,
          endMoney: 10,
          price: 2,
          cy: 10,
          cx: 10
        },
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
          start_time: '',
          end_time: '',
          start_price: '',
          end_price: '',
          info: '',
          c_user: '',
          abi: '',
          contract: '',
        },
        remainTime: '',
        number: 0,
        interV: 0,
        wallet: '',
        transCode: ''
      }
    },
    created() {
      this.pid = this.$route.params.id;
      boloService.pine_apple_detail({pid: this.pid}).then(res => {
        if (res.code == 0) {
          this.boloInfo = res.data
          // this.boloInfo.start_time = '2018-01-22 10:10:52';
          // this.boloInfo.end_time = '2018-3-14 15:40:22';
          this.startTime();
        }
        else
          this.$message({
            message: '菠萝找不到了！',
            type: 'warning'
          });
      })
    },
    mounted() {
      console.log('--------------菠萝详情')
    },
    methods: {
      setDefaultImg(e){
        e.target.src=defaultpp;
      },
      getCurrentPrice() {
        let {start_price, start_time, end_time, end_price} = this.boloInfo;
        // if (start_price==end_price)
        //   return start_price;
        return start_price +
          (
            (end_price - start_price) /
            (DatetoSecond(end_time) - DatetoSecond(start_time))
          ) * (DatetoSecond(new Date()) - DatetoSecond(start_time))
      },
      setWallet() {
        try {
          this.wallet = web3.eth.defaultAccount
          if (!this.wallet)
            throw new Error('钱包需要解锁')
        } catch (e) {
          this.$router.push('/Login');
        }
      },
      paySign() {
        this.setWallet()
        let abi = JSON.parse(this.boloInfo.abi.substr(1,this.boloInfo.abi.length-2));
        // 获取合约主体
        let bc = web3.eth.contract(abi).at(this.boloInfo.contract)
        console.log('------>ok',this.boloInfo)
        //getBC(this.boloInfo.abi, this.boloInfo.contract)
        // 计算当前价格
        let sale_amount = (this.getCurrentPrice() + 0.001).toFixed(6)
        let really_amount = web3.toWei(sale_amount, "ether")
        console.log('----------->>>',sale_amount)
        // 开始交易
        bidBolo(bc, this.boloInfo.token, really_amount, this.wallet, (transCode) => {
          this.transCode = transCode
          let formdata = new FormData();
          formdata.append('pid',this.pid);
          formdata.append('wallet',this.wallet);
          formdata.append('tx',this.transCode);
          walletService.sale_record(formdata).then(res => {
            if (res.code == 0) {
              this.$message({
                message: '写入记录！',
                type: 'success'
              });
            }
          })
        }, () => {
          this.$message({
            message: '交易取消！',
            type: 'warning'
          });
        }, (contractAddress) => {
          this.$message({
            message: '交易成功！',
            type: 'success'
          });
        })
      },
      startTime() {
        let st = Math.floor(Date.parse(this.boloInfo.start_time) / 1000)
        let ct = Math.floor(Date.now() / 1000)
        let et = Math.floor(Date.parse(this.boloInfo.end_time) / 1000)
        let total = et - st;
        this.number = et-ct;
        this.interV = setInterval(() => {
          console.log('--------->>',total,this.number)
          this.number--;
          if (this.number >= 0) {
            this.map.xPercent = (total - this.number) / total
            // console.log('------->>>', this.map.xPercent)
            this.calcPercent()
            this.remainTime = translatSecond(this.number)
          }
          else
            clearInterval(this.interV)
        }, 1000)
      },
      calcPercent() {
        let mp = this.map;
        // console.log('======>',mp.xPercent)
        if (this.boloInfo.start_price < this.boloInfo.end_price) {
          mp.cy = 276 - 262 * mp.xPercent;
          mp.cx = 13.5 + 1173 * mp.xPercent;
        }
        else {
          mp.cy = 14 + 262 * mp.xPercent;
          mp.cx = 13.5 + 1173 * mp.xPercent;
        }
      },
      goPrev() {
        window.history.go(-1);
      },
      toOther(id) {
        this.$router.push({
          name: 'OtherDetail',
          params: {id}
        })
      }
    },
    beforeDestroy() {
      console.log('--------------离开之前销毁定时器')
      clearInterval(this.interV)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/basestyle';
  @import "../../assets/css/sass-base";

  .siHomeTem {
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
    box-shadow: 0 0 4px rgba(0, 0, 0, .3);
  }

  .identDiv {
    margin-bottom: 35px;
    > header {
      height: 50px;
      line-height: 50px;
      background: $base_black;
      color: #fff;
      > :first-child {
        margin: 0 20px;
      }
    }
    > section:nth-child(2) {
      padding: 0 20px;
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
    > img {
      width: 100%;
      height: 100%;
    }
  }

  .cerInfo {
    padding: 15px;
    .priceCls {
      margin-left: 20px;
      font-weight: 700;
      font-size: 20px;
    }
  }

  .buySec {
    height: 44px;
    line-height: 44px;
  }

  .buySec > .payBtn {
    width: 200px;
    border-radius: 0px;
    color: $base_black;
    float: right;
    margin-right: 25px;
    font-weight: 700;
  }

  .auction > footer {
    margin: 20px;
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

  .auction > header > :last-child {
    margin-right: 20px;
  }

  .chartSec {
    height: 400px;
    text-align: center;
    > svg {
      margin-top: 50px;
    }
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

  .backCls {
    margin-top: 1.2rem;
    margin-left: 3.2rem;
    height: 48px;
    line-height: 48px;
    display: flex;
    flex-direction: row;
  }

  .backClsBlob {
    cursor: pointer;
  }

  .backClsBlob > i {
    font-size: 20px;
  }

  .backClsBlob > span {
    position: relative;
    top: -5px;
    margin-left: 10px;
    font-size: 16px;
  }
  .timeDiv{
    margin: 15px 0;
    display: inline-block;
    width: 1400px;
    font-weight: bold;
    font-size: 16px;
    >span:first-child{
      float: left;
    }
    >span:nth-child(2){
      float: right;
    }
  }
</style>
