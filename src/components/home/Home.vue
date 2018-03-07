<template>
  <div class="homeTem">
    <section class="entrance">
      <section class="abstract">
        <h2>welcome to polo</h2>
        <p>
          some info some info some info some info
          some info some info
          some info some info
          some info some info
        </p>
        <el-button class="startPlay" type="success" @click="toPlay" round>START PLAY</el-button>
      </section>
      <div>
        <div class="addShadow" v-for="(it,index) in [0,1,2,3,4,5,6,5,7]" :key="index">
          <img class="signatureimg" :src="polo" @click="toDetail(it)" />
        </div>
      </div>
    </section>
    <section class="description">
      <h2>
        How to Play!
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
import polo from '../../assets/icon/pineapple.png'

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

<style scoped>
  .homeTem{
    padding: 3.2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }
  .entrance{
    width: 100%;
    display: flex;
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
    flex-direction: row;
    flex-wrap: wrap;
  }
  .entrance>div:nth-child(2)>div{
    margin: 7px;
    border: 1px solid #fff;
    width: 180px;
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
    margin-right: 18px;
  }
  .abstract>h2{
    margin-top: 100px;
    font-size: 36px;
    font-weight: 700;
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
    margin-top: 40px;
  }
  .description{
    color: #fff;
    margin-top: 20px;
    background: #30C03F;;
    height: 500px;
    /*text-align: center;*/
  }
  .description>h2{
    text-align: center;
    margin-top: 100px;
    font-size: 36px;
    font-weight: 700;
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
