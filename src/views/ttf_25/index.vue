<template>
  <div class="container">
    <div class="loader">
      <div class="ball"></div>
    </div>
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
  background: #1c1f2f;
}
.container{
  position: relative;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0001);
}

.container .loader{
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border:20px solid  transparent;
  border-bottom: 20px solid #06c8f0;
  border-right: 20px solid #06c8f0;
  transform: rotate(45deg);
  animation: animate 4s ease-in-out infinite;
}
@keyframes animate{
  0%{
    transform: rotate(0deg)
  }
  50%{
    transform: rotate(90deg)
  }
  100%{
    transform: rotate(0deg)
  }
}
.container .loader .ball{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: animateBall 4s ease-in-out infinite;
}
@keyframes animateBall{
  0%{
    transform: rotate(0deg)
  }
  50%{
    transform: rotate(180deg)
  }
  100%{
    transform: rotate(0deg)
  }
}
.container .loader .ball::before{
  content: '';
  position: absolute;
  bottom: 50%;
  right: 15px;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  transform:translateY(-50%);
}
</style>