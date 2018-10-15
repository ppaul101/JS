var canvas = document.getElementById("myCanvas")

if (canvas == null)
{
  alert("no such canvas")
}

// tool to paint on the canvas
var ctx = canvas.getContext("2d")


var x = canvas.width/2 - 100
var y = canvas.height - 300
var dy = -30

var startY = y




window.onload = draw

function draw()
{
  // clear previous frame - illusion of movement
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  drawDoodle()

  // reverse direction after it travels normal height
  // if (y < canvas.height/2 || y >= startY)
  // {
  //   dy = -dy
  // }

  y+=dy

}
setInterval(draw, 10)


function drawDoodle()
{
  ctx.beginPath()
  var img = new Image();
  img.src = "doodle.png";
  img.onload = function()
  {
    // x, y, scale
    ctx.drawImage(img, x, y, 175, 175);
  }
}
