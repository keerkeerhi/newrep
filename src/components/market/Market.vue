<template>
  <section class="homeTem">
    <div id="searchContent">
      <input type="text" name="input" class="input">
      <button type="reset" class="search" @click="searchHandle"></button>
    </div>
    <section>
      <el-tabs v-model="activeIndex" @tab-click="handleClick">
        <el-tab-pane :key="index" v-for="(it,index) in navs" :label="it.name"
                     :name="index+''"></el-tab-pane>
      </el-tabs>
    </section>
    <section></section>
    <section style="display: none;"></section>
    <section class="marketcontent">
      <ul class="signListCls">
        <li></li>
      </ul>
    </section>
  </section>
</template>
<script>
// import marketService from '../../service/marketsev'

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

      }
    }
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
      $('#searchContent>.search').toggleClass('close')
      $('#searchContent>.input').toggleClass('square')
      if ($('#searchContent>.search').hasClass('close')) {
        $('#searchContent>input').focus()
      } else {
        $('#searchContent>input').blur()
      }
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
  }
  .signListCls{

  }
  /*-------------------------------------搜索框开始-------------------------------*/
  #searchContent {
    position: fixed;
    height: 40px;
    width: 300px;
    top: calc(60px + 3.2rem);
    right: 0;
    /*transform: translate(-50%, -50%);*/
  }

  #searchContent>input {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 2px solid #409EFF;
    border-radius: 50%;
    background: none;
    color: #409EFF;
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
    right: 0;
    height: 40px;
    width: 40px;
    padding: 0;
    border-radius: 100%;
    outline: 0;
    border: 0;
    color: #409EFF;
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
    background-color: #409EFF;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-top: 20px;
    margin-left: 13px;
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
    background-color: #409EFF;
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
    background-color: #409EFF;
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
    height: 40px;
    border: 2px solid #409EFF;
    border-radius: 20px;
    background: none;
    color: #409EFF;
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
