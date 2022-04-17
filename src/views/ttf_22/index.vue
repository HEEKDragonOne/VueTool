<template>
  <div style="margin-top: 55px">
    <h2 contenteditable="true">Text</h2>
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
  font-family: arial;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #07252d;
}
h2{
  position: relative;
  font-size: 6em;
  letter-spacing: 15px;
  color: #0e3742;
  text-transform: uppercase;
  text-align: center;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
  line-height: 0.7em;
  outline: none;
  animation: animate 5s linear infinite;
}
@keyframes animate{
  0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%{
    color: #0e3742;
  }
  18.1%,20.1%,50.1%,60%,65.1%,80%,90.1%,100%{
    color: #fff;
    text-shadow: 0 0 10px #03bcf4,
    0 0 20px #03bcf4,
    0 0 40px #03bcf4,
    0 0 80px #03bcf4,
    0 0 160px #03bcf4;
  }
}
</style>