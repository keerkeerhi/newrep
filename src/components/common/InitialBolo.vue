<template>
  <section>
    <svg width="85" height="85"
         :style="{background:backImg(),backgroundSize:'100%'}"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <!-- 圆弧 M 50 120 A 60 60 180 1 0 22 95-->
        <path id="titlePath" d="M 26 56 L 60 39" />
        <path id="wordPath" d="M 26 69 A 30 30 180 0 0 72 50" />
      </defs>
      <!--<text font-size="20">-->
      <!--杨凯文-->
      <!--</text>-->
      <text letter-spacing="1" font-size="14">
        <textPath xlink:href="#titlePath">
          {{data.nickname}}
          <!--王晓宇-->
        </textPath>
      </text>
      <text letter-spacing="2" font-size="10">
        <textPath xlink:href="#wordPath">
          {{data.c_time.replace(/-/g,'.')}}
        </textPath>
      </text>
    </svg>
  </section>
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
  section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  svg{
    /*transform: rotate(30deg);*/
  }
</style>
