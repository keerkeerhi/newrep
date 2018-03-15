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
          <img class="signatureimg" :src="it.cover" />
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

export default {
  name: 'home',
  data () {
    return {
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
  .signatureimg{
    max-width: 100%;
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
