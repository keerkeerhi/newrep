<template>
  <svg width="85" height="85"
       :style="{background:backImg(),backgroundSize:'100%'}"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <!-- 圆弧 M 50 120 A 60 60 180 1 0 22 95-->
      <path id="wordPath" d="M 26 69 A 30 30 180 0 0 72 50" />
    </defs>
    <!--<text font-size="20">-->
      <!--杨凯文-->
    <!--</text>-->
    <text font-family="Verdana" font-size="10">
      <textPath xlink:href="#wordPath">
        {{data.dateTime}}
      </textPath>
    </text>
  </svg>
</template>

<script>
    export default {
        name: "initial-bolo",
        props: ['width','height','data','img'],
        methods: {
          backImg(){
            return 'url(\"' + this.img + '\") no-repeat center 100%';
          }
        }
    }
</script>

<style scoped>
  svg{
    /*transform: rotate(30deg);*/
  }
</style>
