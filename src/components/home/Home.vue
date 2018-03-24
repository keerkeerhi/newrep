<template>
  <div class="hhomeTem">
    <section class="entrance">
      <section class="abstract">
        <div style="line-height: 110px;">
          <div class="bigFont">可收藏</div>
          <div class="bigFont">可交易</div>
          <div class="bigFont">可投资</div>
        </div>
        <div class="smallFont">
          名人数字签章，不可篡改的IP典藏
        </div>
        <el-button class="startPlay" type="primary" @click="toPlay" >现在加入</el-button>
      </section>
      <div>
        <div class="glo addShadow" @click="toDetail(it.id)" v-for="(it,index) in dataList" :key="index">
          <div class="signatureimg" style="position: relative;">
            <!--<img :src="it.cover" />-->
            <section class="boloContent">
              <header>
                <!--{{it.nickname}}-->
                <span>{{it.nickname}}</span>
                <span>登录菠萝</span>
              </header>
              <section>
                {{it.c_time}}
              </section>
            </section>
            <initial-bolo class="boloFont boloImg" :img="initialBolo" width="145" height="145"
                          :data="it" />
          </div>
        </div>
      </div>
    </section>
    <!--<section class="description">-->
      <!--&lt;!&ndash;<h2>&ndash;&gt;-->
        <!--&lt;!&ndash;如何拥有自己的菠萝？&ndash;&gt;-->
      <!--&lt;!&ndash;</h2>&ndash;&gt;-->
      <!--&lt;!&ndash;<p>&ndash;&gt;-->

      <!--&lt;!&ndash;</p>&ndash;&gt;-->
    <!--</section>-->
  </div>
</template>

<script>
import marketService from '../../service/bolosev'
import {isArray} from "../common/Util"
import InitialBolo from '../common/InitialBolo'
import initialBolo from '../../assets/icon/initialBolo.png'

export default {
  name: 'home',
  components: {InitialBolo},
  data () {
    return {
      initialBolo,
      dataList: []
    }
  },
  created(){
    // 只支持hot
    marketService.query_market({t_type:'all'}).then(res => {
      if (isArray(res.data))
        this.dataList = res.data
    })
  },
  methods: {
    toPlay () {
      this.$router.push('/Login')
    },
    toDetail (id) {
      console.log('111')
      this.$router.push({
        name: 'SignatureDetail',
        params: { id }})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/sass-base';
  @import "../../assets/css/basestyle";
  .hhomeTem{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .entrance{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
  }

  .entrance>section:first-child{
    flex: 1;
    margin-left: 3.2rem;
  }
  .entrance>div:nth-child(2){
    margin-right: 3.2rem;
    flex: 2;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .entrance>div:nth-child(2)>div{
    width: 273px;
    height: 170px;
    padding: 10px;
    margin: 7px;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .entrance>div:nth-child(2)>div:hover{
    /*border: 1px solid rgba(255,224,0,.8);*/
    box-shadow: 0 2px 12px 0 $base_black;
  }
  .abstract{
    margin-top: 53px;
    text-align: center;
    margin-right: 18px;
    letter-spacing: 10px;
    .bigFont{
      font-size: 6em;
      font-weight: 700;
    }
    .smallFont{
      margin-top: 20px;
      letter-spacing: 3px;
      font-size: 2em;
      font-weight: 500;
      color: $base_gray;
    }
  }
  .abstract>h2{
    margin-top: 100px;
    font-size: 36px;
    font-weight: 500;
  }
  .abstract>p{
    margin-top: 20px;
    text-indent: 2em;
    color: #181818;
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7em
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
  .signatureimg{
    height: 100%;
    background: $base_yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >.boloContent{
      width: 175px;
      height: 60px;
      >header{
        @extend .boloFont;
        font-weight: 500;
        >span:first-child{
          font-size: 25px;
          margin-right: 10px;
        }
        >span:nth-child(2){
          font-size: 18px;
        }
      }
      >section{
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        margin-top: 30px;
        text-align: center;
        color: $base_yellow;
        background: $base_black;
      }
    }
    >.boloImg{
      transform: scale(0.8,0.8);
      position: absolute;
      background: $base_yellow;
      border-radius: 50%;
      width: 90px;
      height: 90px;
      bottom: 0px;
      right: 0px;
    }
  }
  .description{
    height: 300px;
    color: $base_yellow;
    margin: 20px 0;
    background: #fff;
    height: 500px;
    /*text-align: center;*/
  }
  .description>h2{
    text-align: center;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
  }
  .description>p{
    margin: 20px;
    text-indent: 4em;
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7em
  }
</style>
