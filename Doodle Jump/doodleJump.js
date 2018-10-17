var canvas = document.getElementById("myCanvas")

if (canvas == null)
{
  alert("no such canvas")
}

// tool to paint on the canvas
var ctx = canvas.getContext("2d")
ctx.fillStyle = "#110D8F";
ctx.rect(0,0,canvas.width, canvas.height)
ctx.fill()


// loading images
var background = new Image()
background.src = "background.png"
var doodle = new Image();
doodle.src = "doodle.png";
var platform = new Image()
platform.src = "platform.png"


// doodle initial position
var x = (canvas.width - 220)/2
var y = canvas.height - 300
var dy = -10
var initialSpeed = dy
var doodle_dx = 8


// for platform
var platformHeight = 40
var platformWidth = 140
var platformX = (canvas.width - platformWidth)/2
var platformY = canvas.height - platformHeight



// for keyboard entry
var rightPressed = false
var leftPressed = false

function draw()
{
  // clear previous frame - illusion of movement
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  drawDoodle()
  drawPlatform()


  // reverse direction after it travels normal height
  if (y < canvas.height/1.4)
  {
    // slow down and come back down
    dy += 0.4

  }

  if (y >= platformY - platformHeight*4.2 && x <= platformX + platformWidth/2 && x>= platformX - platformWidth)
  {
    // bounce up
    dy = initialSpeed
  }
  if (y > canvas.height - 170)
  {
    // to ensure btm of doodle is touching ground
    alert("game over")
    // restart game
    document.location.reload()
  }


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

function drawPlatform()
{
  ctx.beginPath()
  ctx.drawImage(platform, platformX, platformY, platformWidth, platformHeight)
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
