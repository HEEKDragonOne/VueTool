<template>
  <div class="home">
    <canvas id="canvas" />
    <!-- 换成自己的图片 -->
    <img :style="canvasStyle" src="./ttf.jpg" />
  </div>
</template>

<script>
import { init } from "./rain.js";
export default {
  name: "index",
  data() {
    return {
      canvasStyle: {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        left: "0",
        bottom: "0",
      },
      ctx: {},
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = document.querySelector("#canvas");
      this.ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(this.ctx);
    },
  },
}
</script>

<style scoped>

</style>