<template>
  <section class="udhomeTem">
    <section class="invateFriend">
      <section class="personInfo">
        <div class="circleDiv">
          <img :src="'data:image/png;base64,'+userInfo.avatar"/>
        </div>
        <div class="infoDetail">
          <div>
            <span class="pname">{{userInfo.nickname}}</span>
            <!--<i class="icon-bianji iconfont" />-->
          </div>
          <div class="infoCeri gray-font">
            <!--<i class="iconfont icon-anquanrenzheng" />-->
            <span>{{userInfo.mark}}</span>
          </div>
          <!--<div class="infoTeam gray-font">-->
            <!--<i class="iconfont icon-kulian" /><span>尚未加入团队</span>-->
          <!--</div>-->
        </div>
      </section>
      <section>
        <!--<el-button class="inviteBtn" type="primary" icon="el-icon-share">-->
          <!--邀请好友-->
        <!--</el-button>-->
      </section>
    </section>
    <section>
      <div class="mytitle">我的菠萝们</div>
      <section class="marketcontent">
        <div v-for="(it,index) in dataList" :key="index" >
          <div @click="toDetail(it.id)" style="display: inline-block;">
            <el-card class="box-card cardCls">
              <section class="cardBody">
                <div>
                  <img style="width: 100%;" :src="it.cover" />
                </div>
                <div class="ownerCls">
                  <span v-if="it.people.length>1" v-for="(p,inx) in it.people">{{p.name}}</span>
                  <div v-else-if="it.people.length==1" class="signer">
                    <div style="width: 60px;" class="circleDiv">
                      <img :src="'data:image/png;base64,'+userInfo.avatar"/>
                    </div>
                    <div>
                      <div>{{p.name}}</div>
                      <div v-if="p.info">{{p.info}}</div>
                    </div>
                    <div></div>
                    <!--<div class="priceDiv">-->
                      <!--<span class="price">{{it.price}}ETH</span>-->
                    <!--</div>-->
                  </div>
                </div>
              </section>
            </el-card>
          </div>
        </div>
      </section>
      <div class="noBolo" v-if="dataList.length==0" >
        还没有菠萝，快去市场购买属于你的菠萝吧！
      </div>
    </section>
  </section>
</template>

<script>
import userService from '../../service/userev'
import boloService from '../../service/bolosev'
import {isArray} from "../common/Util"

export default {
  name: 'userDetail',
  data () {
    return {
      dataList:[],
      userInfo: {
        nickname: '',
        avatar: '',
        is_verify: '',
        share_code: '',
        mark: ''
      },
      params: {
        wallet:'',
        index: 0,
        num: 10,
        t_type : 'mine'
      },
      timeInt: 0
    }
  },
  created(){
    this.setWallet();
    userService.user_info({wallet:this.params.wallet}).then(res=>{
      if (res.code==0)
        this.userInfo = res.data
      else
        this.$router.push('./Register')
    })
    boloService.query_pine_apple(this.params).then(res=>{
      if (isArray(res.data))
        this.dataList = res.data;

    })
    this.checkWallet()
  },
  methods:{
    checkWallet(){
      this.timeInt = setInterval(() => {
        this.wallet = web3.eth.defaultAccount
        if (!this.wallet)
          this.$router.push('/Login')
      }, 500)
    },
    setWallet() {
      try {
        this.params.wallet = web3.eth.defaultAccount
        if (!this.params.wallet)
          throw new Error('钱包需要解锁')
      } catch (e) {
        this.$router.push('/Login');
      }
    },
    toDetail (id) {
      console.log('------->>click',id)
      this.$router.push({
        name: 'MySDetail',
        params: { id }})
    }
  },
  beforeDestroy() {
    console.log('--------------离开之前销毁定时器')
    clearInterval(this.timeInt)
  }
}
</script>

<style lang="scss" scoped>

  @import "../../assets/css/basestyle";
  @import "../../assets/css/sass-base";

  .udhomeTem{
    padding: 0 1.2rem;
    display: flex;
    flex-direction: column;
  }
  .invateFriend{
    padding: 0 6rem;
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    flex-direction: column;
    align-items:center;/*指定垂直居中*/
    /*justify-content: center;*/
    /*margin-bottom: 1.2rem;*/
  }
  .invateFriend .circleDiv{
    height: 90px;
    width: 90px;
  }
  .invateFriend>section:last-child{
    line-height: 52px;
    .inviteBtn{
      color: $base_black;
      border-radius: 0px;
    }
    /*margin-right: 50px;*/
  }
  .personInfo{
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: column;
    align-items:center;/*指定垂直居中*/
    justify-content: center;
  }
  .infoDetail{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
  .infoDetail>div:first-child{
    margin-bottom: 10px;
  }
  .infoDetail .pname{
    font-weight: 700;
    font-size: 18px;
    color: #343434;
  }
  .pname+i{
    margin-left: 10px;
    cursor: pointer;
  }
  .infoCeri{
    font-size: 14px;
    margin-bottom: 5px;
  }
  .infoCeri>i{
    font-size: 20px;
    margin-right: 8px;
  }
  .infoTeam{
    font-size: 14px;
  }
  .infoTeam>i{
    font-size: 20px;
    margin-right: 8px;
  }
  .marketcontent{
    margin-left: 3.2rem;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .marketcontent>div{
    flex-grow: 1;
    /*flex-basis: 0%;*/
    /*margin-right: 7px;*/
    margin-bottom: 20px;
  }
  .cardCls {
    width: 330px;
    height: 280px;
    cursor: pointer;
    >.el-card__body{
      padding: 15px 15px 20px 15px;
    }
    &:hover {
      box-shadow: 0 2px 12px 0 $base_black;
    }
    .cardBody {
      height: 240px;
      display: flex;
      flex-direction: column;
      >:nth-child(1) {
        flex: 1;
      }
      > .ownerCls {
        > .signer {
          margin-top: 5px;
          height: 64px;
          display: flex;
          .circleDiv {
            height: 60px;
            width: 60px;
            background: $base_black;
            margin-right: 20px;
          }
          >div:nth-child(2)
          {
            display:flex;/*Flex布局*/
            flex-direction: column;
            display: -webkit-flex; /* Safari */
            /*align-items:center;!*指定垂直居中*!*/
            justify-content: center;
            line-height: 25px;
            >div:first-child{
              font-weight: bold;
            }
            >div:nth-child(2){
              font-size: 14px;
              color: $base_gray;
            }
          }
          >div:nth-child(3)
          {
            flex: 1;
          }
        }
      }
      .priceDiv{
        line-height: 64px;
        .price {
          border: 1px solid $base_black;
          padding: 3px 15px;
          font-size: 12px;
        }
      }
    }
  }
  .mytitle{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 0 0 10px 20px;
    border-bottom: 1px solid #ccc;
  }
  .noBolo{
    width: 100%;
    text-align: center;
    height: 500px;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 500;
    color: $base_gray;
  }
</style>
