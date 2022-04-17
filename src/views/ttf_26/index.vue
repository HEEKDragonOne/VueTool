<template>
  <div class="box">
    <i class="iconfont icon-apple logo"></i>
  </div>
</template>

<script>
export default {
  name: "index",
  methods:{
    show(){

    }
  },
  mounted() {
    this.show()
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #000;
}
.iconfont.logo{
  position: relative;
  color: #fff;
  font-size: 5em;
  text-shadow: 0 0 50px #0f0,
  0 0 100px #0f0,
  0 0 150px #0f0,
  0 0 200px #0f0,
  0 0 250px #0f0;
  animation: animate 5s linear infinite;
}
@keyframes animate{
  0%{
    filter: hue-rotate(0deg);
  }
  100%{
    filter: hue-rotate(360deg);
  }
}


/* <link href="//at.alicdn.com/t/font_2159878_yjvny0fk3dr.css" rel="stylesheet"> */
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2159878_yjvny0fk3dr.eot?t=1604362376537'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2159878_yjvny0fk3dr.eot?t=1604362376537#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALgAAsAAAAABpAAAAKSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBHIEkATYCJAMICwYABCAFhG0HLxvJBcgOJQkSTYHJCQBAPHztx+/c3f2qSUTbdyyKVlGPkCA2htDFpmsmv3n9yxRcNV5zxUQ4H778VBu5dbdX0G/vRAMup/9fAQUyDyi3PWmsyWMCBpYGONaigAMpkNAbxi5wCYcJNBrgRG/fgaQsYKqwRgXi+hW6HJjmPIrC4vVCbc3CIt4zUp/ephO8C78f/6xEPUlNZhUdvhhdBcJ+vdhJuaF6rcgneIGAltcgYw5QiOO1kYMMBGMaaIwYGgH2lR/8eqkq3yz2ahDsr7Nym0EfFN6TyBXfam4CJe5cAOyMuoTUNPpo+l6zcrPxqb/7Pn/4PnDuzmfvZmzMn7Bzs3Rze2L21nv92Hf1ELzHtet27tHd86Fu6/1WGeHa/55IO4cwTZNNWjw+NZbu+KnNchgaioUDuiK/Ba8Lbt/rmR3h4QNq0eXnjbLGr8HLFmE+QYWL51Sfc1F2/H+/8aU7GZxqC/pf31TAz72Pb0JX9bmAfjag/izW4G+JejYUXWKZUlFFtbZkYdTIhEaNqGBHp7ex2p5bS4R6PTdoq9OfIqs3RhbGHGo0WUOtettoNCt2eZMumIEoDZjRChDazSNp9QFZu1OyMF5Ro9cXarVHRqOTYbFhk4m40hh5F5UTVAUr6iFbKUuUYyHmUX4GoquFcpyVhKwchFXWD91d3IrxWCQhPMcUtYb2IISCFJZFGAOOQ4IgQwXLHKokLgwhSoCrK1X3IpdKWQTm9sKQcgRSBapQD2JVkkkovz1hXvp8BoRWTVAOt5TU+HMgmIrtHnLnwq0HGauUepXcyzOqGjQPBEGBKJhMBMWAfohAIIOU+n4cpBLhghkRUgRwtVtRfZUu66vFDyhgFVi6FHaPrObMbUVAAAAAAA==') format('woff2'),
  url('//at.alicdn.com/t/font_2159878_yjvny0fk3dr.woff?t=1604362376537') format('woff'),
  url('//at.alicdn.com/t/font_2159878_yjvny0fk3dr.ttf?t=1604362376537') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2159878_yjvny0fk3dr.svg?t=1604362376537#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-apple:before {
  content: "\e7dc";
}

</style>