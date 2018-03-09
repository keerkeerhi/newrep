<template>
  <section class="homeTem">
    <section class="invateFriend">
      <section class="personInfo">
        <div class="circleDiv">
          <img :src="logo"/>
        </div>
        <div class="infoDetail">
          <div>
            <span class="pname">周杰伦</span> <i class="icon-bianji iconfont" />
          </div>
          <div class="infoCeri gray-font">
            <i class="iconfont icon-anquanrenzheng" /><span>未认证</span>
          </div>
          <div class="infoTeam gray-font">
            <i class="iconfont icon-kulian" /><span>尚未加入团队</span>
          </div>
        </div>
      </section>
      <section></section>
      <section>
        <el-button type="primary" round icon="el-icon-share">
          邀请好友奖励
        </el-button>
      </section>
    </section>
    <section>
      <div class="mytitle">我的菠萝们</div>
      <section class="marketcontent">
        <div v-for="(it,index) in dataList"
             @click="toDetail(index)" :key="index" >
          <el-card class="box-card cardCls">
            <section class="cardBody">
              <div class="clearfloat">
                <span class="price">{{it.price}}ETH</span>
              </div>
              <div>{{it.content}}</div>
              <div>
                <span v-if="it.people.length>1" v-for="(p,inx) in it.people">{{p.name}}</span>
                <div v-else-if="it.people.length==1" class="signer">
                  <div>{{p.name}}</div>
                  <div>{{p.info}}</div>
                </div>
              </div>
            </section>
          </el-card>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import logo from '../../assets/icon/timg.jpg'
export default {
  name: 'userDetail',
  data () {
    return {
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
    }
  }
}
</script>

<style scoped>
  @import '../../assets/css/basestyle.css';

  .homeTem{
    padding: 1.2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }
  .invateFriend{
    padding: 0 6rem;
    display: flex;
    flex-direction: row;
    margin-bottom: 1.2rem;
  }
  .invateFriend .circleDiv{
    height: 115px;
    width: 115px;
  }
  .invateFriend>section:nth-child(2){
    flex: 1;
  }
  .invateFriend>section:last-child{
    line-height: 115px;
    margin-right: 50px;
  }
  .personInfo{
    display: flex;
    flex-direction: row;
  }
  .personInfo>.circleDiv{
    margin-right: 40px;
  }
  .infoDetail{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .infoDetail>div:first-child{
    margin-bottom: 20px;
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
  /*.marketcontent>div{*/
    /*flex: 1;*/
    /*min-width: 310px;*/
    /*min-height: 250px;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*cursor: pointer;*/
  /*}*/
  .cardCls{
    width: 300px;
    height: 220px;
    cursor: pointer;
  }
  .cardCls:hover{
    box-shadow: 0 2px 12px 0 rgba(48,192,63, 1);
  }
  .cardBody{
    height: 180px;
    display: flex;
    flex-direction: column;
  }
  .cardBody :nth-child(2)
  {
    flex: 1;
  }
  .cardBody .price{
    float: right;
    border: 1px solid #30C03F;
    border-radius: 10px;
    padding: 5px;
    font-size: 12px;
  }
  .mytitle{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 20px;
    padding: 0 0 10px 20px;
    border-bottom: 1px solid #ccc;
  }
</style>
