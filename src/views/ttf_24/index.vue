<template>
  <section>
    <h2>毛玻璃特效</h2>
    <div class="glass"></div>
  </section>
</template>

<script>
export default {
  name: "index",
  methods:{
    show(){
      document.addEventListener('mousemove', function (e) {
        const glass = document.querySelector('.glass')
        glass.style.left = e.offsetX + 'px'
        glass.style.top = e.offsetY + 'px'
      })
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(ttf.jpg);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
}
section h2 {
  font-size: 5em;
  color: #fff;
  pointer-events: none;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
section .glass{
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 300px;
  height: 200px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  background: transparent;
  backdrop-filter: blur(10px);
  transition: 0.2s;
}
</style>