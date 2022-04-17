<template>
  <section>
    <div class="loader" style="margin-right: 200px;">
      <span style="--i:1"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>
      <span style="--i:6;"></span>
      <span style="--i:7;"></span>
      <span style="--i:8;"></span>
      <span style="--i:9;"></span>
      <span style="--i:10;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:13;"></span>
      <span style="--i:14;"></span>
      <span style="--i:15;"></span>
      <span style="--i:16;"></span>
      <span style="--i:17;"></span>
      <span style="--i:18;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
    </div>
    <div class="loader">
      <span style="--i:1"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>
      <span style="--i:6;"></span>
      <span style="--i:7;"></span>
      <span style="--i:8;"></span>
      <span style="--i:9;"></span>
      <span style="--i:10;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:13;"></span>
      <span style="--i:14;"></span>
      <span style="--i:15;"></span>
      <span style="--i:16;"></span>
      <span style="--i:17;"></span>
      <span style="--i:18;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
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
section{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #042104;
  animation: animateBg 10s linear infinite;
}
@keyframes animateBg {
  0%{
    filter: hue-rotate(0deg);
  }
  100%{
    filter: hue-rotate(360deg);
  }
}
section .loader{
  position: relative;
  width: 120px;
  height: 120px;
}
section .loader span{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--i)));
}
section .loader span::before{
  content: '';
  position: absolute;
  top:0;
  left: 0;
  width: 15px;
  height: 15px;
  background: #00ff0a;
  border-radius: 50%;
  box-shadow: 0 0 10px #00ff0a,
  0 0 20px #00ff0a,
  0 0 40px #00ff0a,
  0 0 80px #00ff0a,
  0 0 100px #00ff0a;
  animation: animate 2s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes animate {
  0%{
    transform: scale(1);
  }
  80%, 100%{
    transform: scale(0);
  }
}
</style>