<template>
  <section class="homeTem">
    <section class="invateFriend">
      <el-button type="primary" round icon="el-icon-share">
        邀请好友奖励
      </el-button>
    </section>
    <section>
      <div class="mytitle">我的菠萝们</div>
      <section class="marketcontent">
        <div v-for="(it,index) in dataList"
             :style="{visibility: it.hidden?'hidden':'visible'}"
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
          people:[{name:'柯洁',header:'',info:'明星玩家'}]},{hidden:1},{hidden:1},{hidden:1}]
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
  .homeTem{
    padding: 3.2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }
  .invateFriend{
    text-align: center;
    margin-bottom: 1.2rem;
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
  .mytitle{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 20px;
    padding: 0 0 10px 20px;
    border-bottom: 1px solid #ccc;
  }
</style>
