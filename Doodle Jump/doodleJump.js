var canvas = document.getElementById("myCanvas")

if (canvas == null)
{
  alert("no such canvas")
}

// tool to paint on the canvas
var ctx = canvas.getContext("2d")

// loading doodle img
var doodle = new Image();
doodle.src = "doodle.png";

// doodle initial position
var x = canvas.width/2
var y = canvas.height - 300
var dy = -10
var initialSpeed = dy
var doodle_dx = 8

// for keyboard entry
var rightPressed = false
var leftPressed = false


function draw()
{
  // clear previous frame - illusion of movement
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  drawDoodle()



  // reverse direction after it travels normal height
  if (y < canvas.height/1.4 )
  {
    // dy = -dy
    // dy *= 0.88
    // dy *= 0.98

    // slow down and come back down
    dy += 0.4

  }

  if (y>= canvas.height - 300)
  {
    // bounce up
    dy = initialSpeed
  }


  // if (count >= 14 && count <= 18)
  // {
  //   dy -= 0.8
  // }





  if (leftPressed && x>0)
  {
    x -= doodle_dx
  }

  else if (rightPressed && x + 175<canvas.width)
  {
    x += doodle_dx
  }

  y+=dy

}
setInterval(draw, 8)



function drawDoodle()
{
  ctx.beginPath()
  ctx.drawImage(doodle, x, y, 175, 175);
  ctx.closePath()
}




function keyDownHandler(e)
{

  if (e.keyCode == 39 || e.key == "d" || e.key == "D")
  {

    rightPressed = true
  }

  else if (e.keyCode === 37 || e.key == "a" || e.key == "A")
  {
    leftPressed = true
  }
}

function keyUpHandler(e)
{

  if (e.keyCode == 39 || e.key == "d" || e.key == "D")
  {
    rightPressed = false
  }

  else if (e.keyCode === 37 || e.key == "a"|| e.key == "A")
  {
    leftPressed = false
  }
}

// respond to keys being pressed/lifted
// false => events will be bubbled from child to parent
// ie actions will first occur on child, then parent objects
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
