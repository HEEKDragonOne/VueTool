<template>
  <div class="container">
    <div class="loader"><span></span></div>
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
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #102626;
}
.container{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-reflect: below 1px linear-gradient(#0001, #0004);
}
.container .loader{
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #0d2323;
  animation: animate 2s linear infinite;
}
@keyframes animate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.container .loader::before{
  content: '';
  position: absolute;
  top:0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4));
  background-size: 100px 180px;
  background-repeat: no-repeat;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
.container .loader::after{
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #00fff9;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 10px #00fff9,
  0 0 20px #00fff9,
  0 0 30px #00fff9,
  0 0 40px #00fff9,
  0 0 50px #00fff9,
  0 0 60px #00fff9,
  0 0 70px #00fff9,
  0 0 80px #00fff9,
  0 0 90px #00fff9,
  0 0 100px #00fff9;
}
.container .loader span{
  position: absolute;
  top:20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #102626;
  border-radius: 50%;
}
</style>