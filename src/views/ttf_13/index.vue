<template>
  <h3>火</h3>
  <canvas></canvas>
</template>

<script>
export default {
  name: "index",
  methods:{
    show(){

      var canvasWidth = 600;
      var maxParticles = 200;
      var canvas;

      (function flameOfLove() {

        var width = window.innerWidth;
        var height = window.innerHeight;
        var particles = [];

        canvas = document.querySelector('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasWidth;
        var context = canvas.getContext('2d');

        function init() {
          loop();
        }

        function addParticle() {
          var particle = new Particle(context);
          particle.init(canvasWidth/2 - 30, canvasWidth/1.5);
          particles.push(particle);
        }

        function updateParticles() {

          if( particles.length < maxParticles ) {
            addParticle(context);
          }

          // Update
          for( var i = 0; i < particles.length; i++ ) {
            particles[i].update();
          }

          // Remove dead particles
          for( var i = particles.length - 1; i >= 0; i-- ) {
            if( particles[i].lifeSpan <= 0 ) {
              particles.splice(i, 1);
            }
          }
        }

        function clearCanvas() {
          context.globalCompositeOperation = "source-over";
          context.fillStyle = "rgba( 10, 2, 2, 1 )";
          context.fillRect( 0, 0, canvasWidth, canvasWidth );
        }

        function loop() {

          if( particles.length < maxParticles){
            addParticle(context);
          }

          requestAnimationFrame(loop);
          clearCanvas();

          updateParticles();
        }

        function Particle() {

          this.lifeSpan = 100; //ms
          this.radius = 120;
          this.alpha = 0.6;

          // Init, and set properties
          this.init = function(x, y) {

            this.velocity = {
              x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 1.2),
              y: (-2 + (Math.random() * -3))
            };

            this.position = {x: x, y: y};
            this.update();
          };

          this.update = function() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            // Update velocities
            this.velocity.x += (Math.random() < 0.5 ? -1 : 1) * 2 / 75;
            this.velocity.y -= Math.random() / 600;
            this.lifeSpan--;

            if( this.lifeSpan < 50 ) {
              this.alpha -= 0.01;
            }

            if( this.lifeSpan < 0) {
              this.lifeSpan = 0;
            }

            this.draw();
          }

          this.draw = function() {
            context.globalCompositeOperation = "overlay";
            context.fillStyle = 'rgba(255, 230, 200,' + this.alpha + ')';
            context.font = this.radius * this.lifeSpan / 100 + 'px Arial';
            context.fillText('♥', this.position.x, this.position.y);
          }

          this.die = function() {}
        }

        init();
      })();
    }
  },
  mounted() {
    this.show()
  }
}
</script>

<style scoped>
html, body {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  background: rgb(10, 2, 2);
}

canvas {
  width: 600px;
  height: 600px;

  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -300px;

  background: #111;
}
</style>
