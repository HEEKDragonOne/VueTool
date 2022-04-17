<template>
  <section>
    <h2>Hello</h2>
    <h2>How it is?</h2>
    <div class="circle"></div>
  </section>
</template>

<script>
export default {
  name: "index",
  methods:{
    show(){
      const pos =document.documentElement
      pos.addEventListener('mousemove', e => {
        pos.style.setProperty('--x', e.clientX + 'px')
        pos.style.setProperty('--y', e.clientY + 'px')
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
  width: 100%;
  height: 100vh;
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section h2{
  position: relative;
  font-size: 14em;
  color: #111;
  font-weight: 300;
  cursor: default;
  z-index: 1;
}
.circle{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ff2562;
  pointer-events: none;
  transition: 0.1s;
  clip-path: circle(50px at var(--x) var(--y));
}

section h2:hover ~ .circle{
  background: #64ff14;
  clip-path: circle(200px at var(--x) var(--y));
}
</style>