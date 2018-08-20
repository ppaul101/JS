var fiat = {

  model: "500",
  year: 1957,
  colour: "Blue",
  passengers: 2,
  convertible: false,
  started: false,

  // defining a method
  start: function()
  {
    // 'this' refers to properties in THIS very object
    this.started = true
  }

  stop: function()
  {
    this.started = false
  }

  drive: function()
  {
    if (this.started)
    {
      alert("Zoom!")
    }
    else
    {
      alert("You may want to start the car first!")
    }

  }

}
