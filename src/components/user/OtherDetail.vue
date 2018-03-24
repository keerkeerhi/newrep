<template>
  <section class="odhomeTem">
    <section class="invateFriend">
      <section class="personInfo">
        <div class="circleDiv">
          <img :src="userInfo.avatar" @error="setDefaultImg"/>
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
          <!--邀请好友获取奖励-->
        <!--</el-button>-->
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
                <div class="ownerCls">
                  <!--<span v-if="it.people.length>1" v-for="(p,inx) in it.people">{{p.name}}</span>-->
                  <div class="signer">
                    <el-button class="startPlay" @click.stop >领取</el-button>
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
  import userService from '../../service/userev'
  import boloService from '../../service/bolosev'
  import {isArray} from "../common/Util"
  import InitialBolo from '../common/InitialBolo'
  import initialBolo from '../../assets/icon/initialBolo.png'
  import defaultpp from '../../assets/icon/defaultpp.jpg'

  export default {
    name: 'OtherDetail',
    components: {InitialBolo},
    data () {
      return {
        defaultpp,
        initialBolo,
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
        activeIndex: 0,
        navs: [
          // {name: '粉丝专属章', par: {flag: 1}},
          {name: '他拥有的章', par: 'mine'},
          // {name: '他发起的菠萝', par: {flag: 3}},
          {name: '他认证的菠萝', par: 'auth'}
        ],
      }
    },
    created(){
      this.params.wallet = this.$route.params.id.toLowerCase();
      userService.user_info({wallet:this.params.wallet}).then(res=>{
        if (res.data)
        {
          this.userInfo = res.data
        }
      })
      this.getBolo()
    },
    methods:{
      setDefaultImg(e){
        e.target.src=defaultpp;
      },
      toDetail (id) {
        console.log('------->>click',id)
        this.$router.push({
          name: 'MySDetail',
          params: { id }})
      },
      handleClick (par) {
        console.log('------------par', this.activeIndex)
        this.getBolo()
        // marketService.getList(Object.assign(this.params, par)).then(res => {
        //
        // })
      },
      getBolo(){
        this.params['t_type'] = this.navs[this.activeIndex].par
        boloService.query_pine_apple(this.params).then(res=>{
          if (isArray(res.data))
          {
            this.dataList = res.data;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/css/basestyle";
  @import "../../assets/css/sass-base";

  .odhomeTem{
    padding: 0 1.2rem;
    display: flex;
    flex-direction: column;
  }
  .invateFriend{
    margin-top: 3.2rem;
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
    max-width: 363px;
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
      >.signatureimg {
        flex: 1;
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
      > .ownerCls {
        > .signer {
          margin-top: 5px;
          height: 64px;
          line-height: 64px;
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
  .startPlay{
    width: 180px;
    height: 40px;
    display: inline-block;
    margin-top: 11.5px;
    /*line-height: 35px;*/
    background: $base_black;
    color: $base_yellow;
    font-weight: 600;
    margin: 18px auto 10px;
    /* border-radius: 1px;
     margin-top: 40px;*/
  }
  .startPlay:hover{
    background: #757575;
  }
</style>
