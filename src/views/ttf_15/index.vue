<template>
  <main>
    <div class="cover"></div>
  </main>
</template>

<script>
export default {
  name: "index",
  methods:{
    show(){
      let cover = document.querySelector('.cover');
      let scale = 20;

      let bian = setInterval(function(){

        scale = scale - 0.05;

        cover.style.cssText = `transform: scale(${scale});`

        if(scale<=1)
        {
          clearInterval(bian);
        }

      },20)
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
main{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
main video{
  width: 100%;
}
.cover{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  transform: scale(20);
  mix-blend-mode: multiply;
}
.cover::before{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 300px;
  transform: translate(-50%,-50%) skew(45deg);
  background-color: #fff;
}
.cover::after{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 300px;
  transform: translate(-50%,-50%) skew(-45deg);
  background-color: #fff;
}
</style>