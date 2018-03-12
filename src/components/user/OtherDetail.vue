<template>
  <section class="homeTem">
    <section class="invateFriend">
      <section class="personInfo">
        <div class="circleDiv">
          <img :src="logo"/>
        </div>
        <div class="infoDetail">
          <div>
            <span class="pname">柯杰</span>
            <!--<i class="icon-bianji iconfont" />-->
          </div>
          <div class="infoCeri gray-font">
            <!--<i class="iconfont icon-anquanrenzheng" />-->
            <span>围棋五段</span>
          </div>
          <!--<div class="infoTeam gray-font">-->
          <!--<i class="iconfont icon-kulian" /><span>尚未加入团队</span>-->
          <!--</div>-->
        </div>
      </section>
      <section>
        <el-button class="inviteBtn" type="primary" icon="el-icon-share">
          邀请好友获取奖励
        </el-button>
      </section>
    </section>
    <section>
      <section class="navCls">
        <el-tabs v-model="activeIndex" @tab-click="handleClick">
          <el-tab-pane :key="index" v-for="(it,index) in navs" :label="it.name"
                       :name="index+''"></el-tab-pane>
        </el-tabs>
      </section>
      <section class="marketcontent">
        <div v-for="(it,index) in dataList" :key="index" >
          <div @click="toDetail(index)" style="display: inline-block;">
            <el-card class="box-card cardCls">
              <section class="cardBody">
                <div>
                  <img style="width: 100%;" :src="bolo" />
                </div>
                <div class="ownerCls">
                  <span v-if="it.people.length>1" v-for="(p,inx) in it.people">{{p.name}}</span>
                  <div v-else-if="it.people.length==1" class="signer">
                    <div style="width: 60px;" class="circleDiv">
                      <img :src="logo"/>
                    </div>
                    <div>
                      <div>{{p.name}}</div>
                      <div v-if="p.info">{{p.info}}</div>
                    </div>
                    <div></div>
                    <div class="priceDiv">
                      <span class="price">{{it.price}}ETH</span>
                    </div>
                  </div>
                </div>
              </section>
            </el-card>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
  import logo from '../../assets/icon/timg.jpg'
  import bolo from '../../assets/icon/img.png'
  export default {
    name: 'OtherDetail',
    data () {
      return {
        bolo,
        activeIndex: 0,
        navs: [
          {name: '粉丝专属章', par: {flag: 1}},
          {name: '他拥有的章', par: {flag: 2}},
          {name: '他发起的菠萝', par: {flag: 3}},
          {name: '他认证的菠萝', par: {flag: 4}}
        ],
        dataList:[
          {content:'不错，真不错，天生幼稚',price:0.02,
            people:[{name:'柯洁',header:'',info:'明星玩家'}]},
          {content:'不错，真不错，天生幼稚',price:0.02,
            people:[{name:'柯洁',header:'',info:'明星玩家'}]},
          {content:'不错，真不错，天生幼稚',price:0.02,
            people:[{name:'柯洁',header:'',info:'明星玩家'}]},
          {content:'不错，真不错，天生幼稚',price:0.02,
            people:[{name:'柯洁',header:'',info:'明星玩家'}]},
          {content:'不错，真不错，天生幼稚',price:0.02,
            people:[{name:'柯洁',header:'',info:'明星玩家'}]}],
        logo
      }
    },
    methods:{
      toDetail (id) {
        console.log('------->>click',id)
        this.$router.push({
          name: 'MySDetail',
          params: { id }})
      },
      handleClick (par) {
        console.log('------------par', this.activeIndex)
        // marketService.getList(Object.assign(this.params, par)).then(res => {
        //
        // })
      },
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/css/basestyle";
  @import "../../assets/css/sass-base";

  .homeTem{
    padding: 1.2rem 0 0 0;
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
      box-shadow: 0 2px 12px 0 $base_yellow;
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
  .navCls{
    margin: 38px;
  }
  .navCls .el-tabs__item {
    color: #585858;
  }

  .el-tabs__item.is-active {
    color: $base_black;
  }
</style>
