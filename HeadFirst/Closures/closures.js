window.onload = function()
{
  // anonymouse function

  var numberOfClicks = 0
  var div = document.getElementById("message")
  var message = "You clicked me "

  var button = document.getElementById("clickme")
  button.onclick = function()
  {
    // closure - contains 3 free vars: numberOfClicks, div, message
    // don't have to be initialised every time the fn runs :)
    // instead, free variables will be part of the environment of the fn
    // which is part of the closure

    numberOfClicks++
    div.innerHTML = message + numberOfClicks + " times!"
  }

}
