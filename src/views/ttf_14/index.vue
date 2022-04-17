<template>
  <canvas class="the-canvas"></canvas>
</template>

<script>
export default {
  name: "index",
  methods:{
    show(){
      var canvas = document.querySelector('.the-canvas');
      var context = canvas.getContext('2d');
      var ratio = window.devicePixelRatio || 1;

      var totalLineHeight = 680;
      var totalLines = 4;
      var totalDiff = totalLineHeight / totalLines;
      var fontHeight = 60 * ratio - 50; // Small centering

      var smallestWidth = 280; // width of smallest line;
      var offsetX = 12;
      var offsetY = 6;
      var iterations;
      var verticalAlign, line1Diff, line2Diff, line3Diff, line4Diff, iterations, iteration, animationFrame;

      var startRGB = [255, 255, 255];
      var endRGB   = [220, 165, 163];
      var fullColorSet = [];

      init();

      function init() {

        // Cancel any already running animations
        cancelAnimationFrame(animationFrame);

        // Set the canvas width and height
        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;

        // Set the canvas font properties
        context.font = '180px Montserrat';
        context.textAlign = 'center';
        context.fillStyle = '#fff';
        context.strokeStyle = "#F0A5A3";
        context.lineWidth = "3";
        context.textBaseline = "middle";

        // Centering of the text
        verticalAlign = (window.innerHeight / 2  * ratio) - totalLineHeight / 2;
        line1Diff = totalLineHeight + fontHeight - totalDiff;
        line2Diff = totalLineHeight + fontHeight - totalDiff * 2;
        line3Diff = totalLineHeight + fontHeight - totalDiff * 3;
        line4Diff = totalLineHeight + fontHeight - totalDiff * 4;

        // How many iterations will we go through?
        iterations = Math.floor(((window.innerWidth * ratio / 2) - (smallestWidth * ratio / 2)) / offsetX + 5);
        prepareColorSets(iterations);

        iteration = 0;

        animationFrame = requestAnimationFrame(draw);
      }

// Draw loop
      function draw() {

        context.clearRect(0, 0, canvas.width, canvas.height);

        for( var i = iterations - 1; i > 0; i-- ) {
          context.fillStyle = 'rgb(' + fullColorSet[i][0] + ',' + fullColorSet[i][1] + ',' + fullColorSet[i][2] + ')';
          var x = window.innerWidth / 2 * ratio - i * offsetX;
          var y = verticalAlign + i * offsetY + (Math.sin(i + iteration) * 2);
          drawText( x, y );
        }

        iteration += 0.1;
        animationFrame = requestAnimationFrame(draw);
      }

// Draw the single lines of text.
      function drawText(x, y) {

        context.fillText("THE ONE", x, y + line4Diff);
        context.strokeText("THE ONE", x, y + line4Diff);

        context.fillText("YOU ARE", x, y + line3Diff);
        context.strokeText("YOU ARE", x, y + line3Diff);

        context.fillText("LOOKING FOR", x, y + line2Diff);
        context.strokeText("LOOKING FOR", x, y + line2Diff);

        context.fillText("IS YOU", x, y + line1Diff);
        context.strokeText("IS YOU", x, y + line1Diff);
      }

// We do this so we don't have to calculate these EVERY loop.
      function prepareColorSets(iterations) {
        fullColorSet = [];
        for( var i = 0; i < iterations; i++ ) {
          fullColorSet.push(colourGradientor(1 - i / iterations, startRGB, endRGB));
        }
      }

// THNX - http://stackoverflow.com/questions/14482226/how-can-i-get-the-color-halfway-between-two-colors
      function colourGradientor(p, rgb_beginning, rgb_end){

        var w = p * 2 - 1;
        var w1 = (w + 1) / 2.0;
        var w2 = 1 - w1;
        var rgb = [parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
          parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
          parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)];
        return rgb;
      };

      window.onresize = init;
    }
  },
  mounted() {
    this.show()
  }
}
</script>

<style scoped>
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w0aXx-p7K4KLjztg.woff) format('woff');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w9aXx-p7K4KLjztg.woff) format('woff');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w2aXx-p7K4KLjztg.woff) format('woff');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w3aXx-p7K4KLjztg.woff) format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXx-p7K4KLg.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


html, body {
  margin: 0px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}

canvas {
  width: 100%;
  height: 100%;
  background: #F3BE4E;
}


</style>
