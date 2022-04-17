<template>
  <div>
    移动鼠标到左侧边处，可看见隐藏的文字
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Contact</a></li>
      <div class="cursor"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  methods:{
    show(){
      const cursor = document.querySelector('.cursor')
      document.addEventListener('mousemove', e => {
        cursor.style.left = e.pageX + 'px'
        cursor.style.top = e.pageY + 'px'
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
  box-sizing: border-boxa ;
}
body{
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
ul {
  position: relative;
  display: flex;
  flex-direction: column;
}
ul li{
  list-style: none;
}
ul li a{
  position: relative;
  display: inline-block;
  margin: 10px 0;
  font-size: 4em;
  color: #fff;
  text-decoration: none;
  transition: 0.2s;
}
.cursor{
  position: fixed;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  transition: 0.1s;
  pointer-events: none;
  mix-blend-mode: difference;
}
ul li:hover ~ .cursor {
  transform: scale(6)
}
</style>