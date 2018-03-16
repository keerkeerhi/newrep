<template>
  <section class="markTem">
    <!--<div id="searchContent">-->
      <!--<input type="text" v-model="params.t_filter" name="input" class="input">-->
      <!--<button type="reset" class="search" @click="searchHandle"></button>-->
    <!--</div>-->
    <section class="navCls">
      <el-tabs v-model="activeIndex" @tab-click="getBoloList('1')">
        <el-tab-pane :key="index" v-for="(it,index) in navs" :label="it.name"
                     :name="index+''"></el-tab-pane>
      </el-tabs>
    </section>
    <section class="sbanner">
      <!--<el-checkbox-group-->
        <!--v-model="checkedCities1">-->
        <!--<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>-->
      <!--</el-checkbox-group>-->
      <!--<div>-->
        <!--<el-select class="sortSelect" clearable v-model="sortValue" placeholder="排序">-->
          <!--<el-option-->
            <!--v-for="item in options"-->
            <!--:key="item.value"-->
            <!--:label="item.label"-->
            <!--:value="item.value">-->
          <!--</el-option>-->
        <!--</el-select>-->
      <!--</div>-->
    </section>
    <section v-if="activeIndex!=2" class="marketcontent">
      <div v-for="(it,index) in dataList"
           :key="index">
        <!--@click="toDetail(it.id)"-->
        <a :href="'/#/SignatureDetail/'+it.id"  style="display: inline-block;text-decoration: none;">
          <el-card class="box-card cardCls">
            <section class="cardBody">
              <div style="position: relative;">
                <!--<img :src="it.cover" />-->
                <span class="boloFont">卞相壹登录菠萝</span>
                <initial-bolo class="boloImg" :img="initialBolo" width="145" height="145"
                              :data="{dateTime:'2018.03.10'}" />
              </div>
              <div class="ownerCls">
                <!--<span v-if="it.people.length>1" v-for="(p,inx) in it.people">{{p.name}}</span>-->
                <div class="signer">
                  <div style="width: 60px;" class="circleDiv">
                    <img :src="'data:image/png;base64,'+it.avatar" />
                  </div>
                  <div>
                    <div>{{it.nickname}}</div>
                    <div v-if="it.mark">{{it.mark | cutWord(14) }}</div>
                  </div>
                  <div></div>
                  <div class="priceDiv">
                    <span class="price">{{it.price}}ETH</span>
                  </div>
                </div>
              </div>
            </section>
          </el-card>
        </a>
      </div>
    </section>
    <section v-if="activeIndex==2">
      <div class="famousCls" v-for="(it,index) in dataList2" :key="index">
        <section>
          <div class="circleDiv">
            <img :src="bolo[it.nickname]" />
          </div>
          <div>{{it.pname}}</div>
          <div>
            <el-button @click="toOther(it.id)" class="lookAll" type="primary" >查看所有</el-button>
          </div>
        </section>
        <ul>
          <li @click="toDetail(it.id)" v-for="(i,inx) in it.sList" :key="inx">
            <img :src="'data:image/png;base64,'+it.avatar" />
          </li>
        </ul>
      </div>
    </section>
    <div v-if="pageInfo.total>pageInfo.pageSize" class="block pageDiv">
      <el-pagination @current-change="pageChange"
                   layout="prev, pager, next"
                     :page-size="pageInfo.pageSize"
                   :current-page="pageInfo.index"
        :total="pageInfo.total">
      </el-pagination>
    </div>
  </section>
</template>
<script>
  import marketService from '../../service/bolosev'
  import './Market.scss'
  import InitialBolo from '../common/InitialBolo'
  import initialBolo from '../../assets/icon/initialBolo.png'

  const cityOptions = ['个人认证', '团队认证', '联合认证'];
  export default {
    name: 'market',
    components: {InitialBolo},
    data() {
      return {
        initialBolo,
        activeIndex: 0,
        types:['hot','new','famous','all'],
        navs: [
          // {name: '热门'},
          // {name: '最新'},
          // {name: '名人'},
          {name: '所有'}
        ],
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
        dataList: [],
        dataList2: [
          {
            pname: '菠萝官方',
            type: 0,
            id: 0,
            headerImg: '',
            sList: [{content: '柯洁'},{content: '柯洁'},{content:'kejie'}]
          },
          {
            pname: '周睿羊',
            type: 1,
            id: 1,
            headerImg: '',
            sList: [{content: '柯洁'},{content: '柯洁'},{content:'sss'}]
          }
        ],
        params:{
          t_type:'hot',
          index: 0,
          num: 10,
          t_filter: ''
        },
        pageInfo: {
          pageSize: 10,
          total: 0,
          index: 1
        }
      }
    },
    created() {
      this.getBoloList(this.activeIndex)
      // this.pageInfo.pageSize = 0
    },
    filters: {
      cutWord(value,max) {
        if (value.length>max)
          return value.substr(0,max)+'...';
        else
          return value;
      }
    },
    methods: {
      pageChange(currentPage){
        this.params.index = currentPage-1;
        this.getBoloList();
      },
      getBoloList(activeIndex) {
        if ((typeof activeIndex)!="undefined")
        {
          this.params.index = 0
          this.params.t_filter = ''
        }
        this.params.t_type = this.types[this.activeIndex]
        this.dataList = []

        // 只支持hot
        this.params.t_type = 'all'
        marketService.query_market(this.params).then(res => {
          if ('data' in res)
          {
            this.dataList = res.data
            this.pageInfo.total = res.pl;
          }
        })
      },
      searchHandle() {
        console.log('--------->', $)
        this.params.t_filter = '';
        $('#searchContent>.search').toggleClass('close')
        $('#searchContent>.input').toggleClass('square')
        if ($('#searchContent>.search').hasClass('close')) {
          $('#searchContent>input').focus()
        } else {
          $('#searchContent>input').blur()
        }
      },
      toDetail(id) {
        console.log('------->>click', id)
        this.$router.push({
          name: 'SignatureDetail',
          params: {id}
        })
      },
      toOther(id)
      {
        this.$router.push({
          name: 'OtherDetail',
          params: { id }})
      }
    }
  }
</script>
