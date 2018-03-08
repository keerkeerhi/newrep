<template>
  <section class="homeTem">
    <div id="searchContent">
      <input type="text" v-model="searchContent" name="input" class="input">
      <button type="reset" class="search" @click="searchHandle"></button>
    </div>
    <section>
      <el-tabs v-model="activeIndex" @tab-click="handleClick">
        <el-tab-pane :key="index" v-for="(it,index) in navs" :label="it.name"
                     :name="index+''"></el-tab-pane>
      </el-tabs>
    </section>
    <section class="sbanner">
      <el-checkbox-group
        v-model="checkedCities1">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
      <div>
        <el-select class="sortSelect" clearable v-model="sortValue" placeholder="排序">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </section>
    <section style="display: none;"></section>
    <section class="marketcontent">
      <div v-for="(it,index) in dataList"
           :style="{visibility: it.hidden?'hidden':'visible'}"
           @click="toDetail(index)" :key="index" >
        <el-card class="box-card cardCls" >
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
</template>
<script>
// import marketService from '../../service/marketsev'
const cityOptions = ['认证', '个人认证', '团队认证', '联合认证'];
export default {
  name: 'market',
  data () {
    return {
      activeIndex: 0,
      navs: [
        {name: '热门菠萝', par: {flag: 1}},
        {name: '最新菠萝', par: {flag: 2}},
        {name: '名人菠萝', par: {flag: 3}},
        {name: '所有菠萝', par: {flag: 4}}
      ],
      params: {

      },
      checkedCities1: [],
      cities: cityOptions,
      options: [{
        value: '选项1',
        label: '价格从高到低'
      }, {
        value: '选项2',
        label: '价格从低到高'
      }, {
        value: '选项3',
        label: '转手次数从多到少'
      }, {
        value: '选项4',
        label: '转手次数从少到多'
      }],
      sortValue: '',
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
          people:[{name:'柯洁',header:'',info:'明星玩家'}]},{hidden:1},{hidden:1},{hidden:1}],
      searchContent:''
    }
  },
  created(){
    console.log('in......')
  },
  methods: {
    handleClick (par) {
      console.log('------------par', this.activeIndex)
      // marketService.getList(Object.assign(this.params, par)).then(res => {
      //
      // })
    },
    searchHandle () {
      console.log('--------->', $)
      this.searchContent = '';
      $('#searchContent>.search').toggleClass('close')
      $('#searchContent>.input').toggleClass('square')
      if ($('#searchContent>.search').hasClass('close')) {
        $('#searchContent>input').focus()
      } else {
        $('#searchContent>input').blur()
      }
    },
    toDetail (id) {
      console.log('------->>click',id)
      this.$router.push({
        name: 'SignatureDetail',
        params: { id }})
    }
  }
}
</script>

<style scoped>
  @import '../../assets/css/basestyle.css';

  .homeTem{
    padding: 3.2rem 0 0 0;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-x: hidden;
  }
  .homeTem:first-child{
    margin: 0 3.2rem;
  }
  .clearfloat:after{
    display:block;
    clear:both;content:"";
    visibility:hidden;
    height:0
  }
  .marketcontent{
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .marketcontent>div{
    flex: 1;
    min-width: 310px;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .cardCls{
    width: 300px;
    height: 220px;
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
  .sbanner{
    display: flex;
    flex-direction: row;
    align-items: end;
  }
  .sbanner :first-child{
    flex: 1;
  }
  .sbanner :nth-child(2){
    flex: 1;
    text-align: right;
  }
  .signListCls{

  }
  .signer>div:nth-child(2){
    color:#708090;font-size: 8px;
    margin-top: 10px;
  }
  /*-------------------------------------搜索框开始-------------------------------*/
  #searchContent {
    position: absolute;
    height: 40px;
    width: 300px;
    top: 40px;
    right: -240px;
    z-index: 10000;
    /*transform: translate(-50%, -50%);*/
  }

  #searchContent>input {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    border: 4px solid #30C03F;
    border-radius: 50%;
    background: none;
    color: #343434;
    font-size: 16px;
    font-weight: 400;
    font-family: Roboto;
    outline: 0;
    -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
    transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
    -webkit-transform: translate(-100%, -50%);
    -ms-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
  }

  #searchContent>.search {
    background: none;
    position: absolute;
    top: 0px;
    left: 0;
    height: 50px;
    width: 50px;
    padding: 0;
    border-radius: 100%;
    outline: 0;
    border: 0;
    color: inherit;
    cursor: pointer;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    -webkit-transform: translate(-100%, -50%);
    -ms-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
  }

  #searchContent>.search:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: yellow;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-top: 26px;
    margin-left: 17px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  #searchContent>.close {
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }

  #searchContent>.close:before {
    content: "";
    position: absolute;
    width: 27px;
    height: 4px;
    margin-top: -1px;
    margin-left: -13px;
    background-color: yellow;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  #searchContent>.close:after {
    content: "";
    position: absolute;
    width: 27px;
    height: 4px;
    background-color: #30C03F;
    margin-top: -1px;
    margin-left: -13px;
    cursor: pointer;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #searchContent>.square {
    box-sizing: border-box;
    padding: 0 40px 0 10px;
    width: 300px;
    height: 50px;
    border: 4px solid #30C03F;
    border-radius: 20px;
    background: none;
    color: #343434;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    outline: 0;
    -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
    transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
    -webkit-transition-delay: 0.4s, 0s, 0.4s;
    transition-delay: 0.4s, 0s, 0.4s;
    -webkit-transform: translate(-100%, -50%);
    -ms-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
  }
  /*-------------------------------------搜索框结束-------------------------------*/
</style>
