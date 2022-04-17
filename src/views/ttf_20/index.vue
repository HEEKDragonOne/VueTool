<template>
  <section>
    <div class="wave">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="content">
      <h2>波浪动画特效</h2>
    </div>
  </section>
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
  font-family: 'Poppins', sans-serif;
}
section{
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
section .wave{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4973ff;
}

section .wave span{
  position: absolute;
  width: 325vh;
  height: 325vh;
  top:0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #000;
}
section .wave span:nth-child(1) {
  animation: animate 5s linear infinite;
  border-radius: 45%;
  background: rgba(20,20, 20, 1);
}
section .wave span:nth-child(2) {
  animation: animate 10s linear infinite;
  border-radius: 40%;
  background: rgba(20, 20, 20, 0.5);
}
section .wave span:nth-child(3) {
  animation: animate 15s linear infinite;
  border-radius: 42.5%;
  background: rgba(20 20, 20, 0.5);
}

@keyframes animate{
  0%{
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100%{
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

section .content{
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 3em;
}
</style>