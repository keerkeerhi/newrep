<template>
  <div class="homeTem">
    <section class="entrance">
      <section class="abstract">
        <h2>Welcome to Bolo</h2>
        <p>
          some info some info some info some info
          some info some info
          some info some info
          some info some info
        </p>
        <el-button class="startPlay" type="primary" @click="toPlay" >现在加入</el-button>
      </section>
      <div>
        <div class="addShadow" v-for="(it,index) in [0,1,2,3,4,5,6,5,7]" :key="index">
          <img class="signatureimg" :src="polo" @click="toDetail(it)" />
        </div>
      </div>
    </section>
    <section class="description">
      <h2>
        如何拥有自己的菠萝？
      </h2>
      <p>
        some info some info some info some info
        some info some info
        some info some info
        some info some infosome info some info some info some info
        some info some info
        some info some info
        some info some info
        some info some info some info some info
        some info some info
        some info some info
        some info some infosome info some info some info some info
        some info some info
        some info some info
        some info some info
      </p>
    </section>
  </div>
</template>

<script>
import homeicon from '../../assets/icon/mattjohn-homepage.png'
import polo from '../../assets/icon/img.png'

export default {
  name: 'home',
  data () {
    return {
      homeicon,
      polo
    }
  },
  methods: {
    toPlay () {
      this.$router.push('/Login')
    },
    toDetail (id) {
      this.$router.push({
        name: 'SignatureDetail',
        params: { id }})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/sass-base';

  .homeTem{
    padding: 3.2rem 0 0 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
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
    border: 1px solid rgba(48,192,63,.8);
    box-shadow: 0 0 4px rgba(48,192,63,.2);
  }
  .signatureimg{
    max-width: 100%;
  }
  .abstract{
    text-align: center;
    margin-right: 18px;
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
    width: 200px;
    color: $base_black;
    font-weight: 600;
    border-radius: 1px;
    margin-top: 40px;
  }
  .description{
    color: $base_yellow;
    margin: 20px 0;
    background: $base_black;;
    /*height: 500px;*/
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
