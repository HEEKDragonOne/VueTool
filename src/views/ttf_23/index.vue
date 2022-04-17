<template>
  <section>
    <h2>图片落叶飘舞</h2>
    <div class="set">
      <div><img src="./ttf.jpg" alt=""></div>
      <div><img src="./ttf2.jpg" alt=""></div>
      <div><img src="./ttf3.jpg" alt=""></div>
      <div><img src="./ttf4.jpg" alt=""></div>
      <div><img src="./ttf.png" alt=""></div>
      <div><img src="./ttf2.jpg" alt=""></div>
      <div><img src="./ttf3.jpg" alt=""></div>
      <div><img src="./ttf4.jpg" alt=""></div>
    </div>
    <div class="set set2">
      <div><img src="./ttf.png" alt=""></div>
      <div><img src="./ttf2.jpg" alt=""></div>
      <div><img src="./ttf3.jpg" alt=""></div>
      <div><img src="./ttf4.jpg" alt=""></div>
      <div><img src="./ttf.png" alt=""></div>
      <div><img src="./ttf2.jpg" alt=""></div>
      <div><img src="./ttf3.jpg" alt=""></div>
      <div><img src="./ttf4.jpg" alt=""></div>
    </div>
    <div class="set set3">
      <div><img src="./ttf.png" alt=""></div>
      <div><img src="./ttf2.jpg" alt=""></div>
      <div><img src="./ttf3.jpg" alt=""></div>
      <div><img src="./ttf4.jpg" alt=""></div>
      <div><img src="./ttf.png" alt=""></div>
      <div><img src="./ttf2.jpg" alt=""></div>
      <div><img src="./ttf3.jpg" alt=""></div>
      <div><img src="./ttf4.jpg" alt=""></div>
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
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: radial-gradient(#333, #000);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
section h2{
  color: #fff;
  font-size: 8em;
  text-transform: uppercase;
}
section .set{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  pointer-events: none;
}
section .set div{
  position: absolute;
  display: block;
}
section .set div:nth-child(1){
  left: 20%;
  animation: animate 15s linear infinite;
  animation-delay: -7s;
}
section .set div:nth-child(2){
  left: 50%;
  animation: animate 20s linear infinite;
  animation-delay: -5s;
}
section .set div:nth-child(3){
  left: 70%;
  animation: animate 20s linear infinite;
  animation-delay: 0s;
}
section .set div:nth-child(4){
  left: 0%;
  animation: animate 15s linear infinite;
  animation-delay: -5s;
}
section .set div:nth-child(5){
  left: 85%;
  animation: animate 18s linear infinite;
  animation-delay: -10s;
}
section .set div:nth-child(6){
  left: 0%;
  animation: animate 12s linear infinite;
}
section .set div:nth-child(7){
  left: 15%;
  animation: animate 14s linear infinite;
}
section .set div:nth-child(8){
  left: 60%;
  animation: animate 15s linear infinite;
}

@keyframes animate{
  0%{
    opacity: 0;
    top: -10%;
    transform: translateX(20px) rotate(0deg);
  }
  10%{
    opacity: 1;
  }
  20%{
    transform: translateX(-20px) rotate(45deg);
  }
  40%{
    transform: translateX(-20px) rotate(90deg);
  }
  60%{
    transform: translateX(20px) rotate(180deg);
  }
  80%{
    transform: translateX(-20px) rotate(180deg);
  }
  100%{
    top: 110%;
    transform: translateX(-20px) rotate(225deg);
  }
}
.set2{
  transform: scale(2) rotateY(180deg);
  filter: blur(2px);
}
.set3{
  transform: scale(0.8) rotateY(180deg);
  filter: blur(4px);
}
</style>