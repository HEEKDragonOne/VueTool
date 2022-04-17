<template>
  <div>
    <a href="#">Button</a>
    <a href="#">Button</a>
    <a href="#">Button</a>
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
  font-family: '微软雅黑', sans-serif;
  box-sizing: border-box;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  min-height: 100vh;
}

a{
  position: relative;
  padding: 10px 30px;
  margin: 0 45px;
  color: #21ebff;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
}
a:hover{
  background: #21ebff;
  color: #111;
  box-shadow: 0 0 50px #21ebff;
  transition-delay: 0.5s;
}

a:nth-child(1){
  filter: hue-rotate(115deg);
}
a:nth-child(3){
  filter: hue-rotate(270deg);
}

a::before{
  content: '';
  position: absolute;
  top:0;
  left: 0;
  width: 10px;
  height: 10px;
  border-top:2px solid #21ebff;
  border-left:2px solid #21ebff;
  transition: 0.5s;
  transition-delay: 0.5s;
}
a:hover::before{
  width: 100%;
  height: 100%;
  transition-delay: 0s;
}
a::after{
  content: '';
  position: absolute;
  right:0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-bottom:2px solid #21ebff;
  border-right:2px solid #21ebff;
  transition: 0.5s;
  transition-delay: 0.5s;
}

a:hover::after{
  width: 100%;
  height: 100%;
  transition-delay: 0s;
}
</style>