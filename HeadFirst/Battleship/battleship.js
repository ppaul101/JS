// view: displays messages to the user
var view =
{
  displayMessage: function (msg)
  {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;

  },

  // location corresponds to the cell ID
  displayHit: function(location)
  {
    var cell = document.getElementById(location)

    // set class of the cell to 'hit'
    cell.setAttribute("class", "hit")
  },

  displayMiss:function(location)
  {
    var cell = document.getElementById(location)

    cell.setAttribute("class", "miss")

  }

}





// model: game state and game logic
var model =
{
  boardSize:7,
  numShips:3,
  shipLength: 3,
  shipsSunk: 0,

  // array of ship objects
  // hits array will be updated to "hit" when hit
  ships : [{locations: [0, 0, 0], hits: ["", "", ""]},
           {locations: [0, 0, 0], hits: ["", "", ""]},
           {locations: [0, 0, 0], hits: ["", "", ""]}],

  // method to fire on a ship
  // and find out if shot is hit/miss
  fire: function(guess)
  {
    // guess in the form "00"

    for (var i = 0; i<this.numShips; i++)
    {
      // examining one ship at a time
      var ship = this.ships[i]

      // finds index of the ship's location array
      // that matches the values of guess
      // if there is no match, index will be -1
      var index = ship.locations.indexOf(guess);

      if (index >= 0)
      {
        // we have a hit
        ship.hits[index] = "hit"

        view.displayHit(guess)
        view.displayMessage("HIT")

        if (this.isSunk(ship))
        {
          this.shipsSunk++
          view.displayMessage("You sunk my battleship!")
        }
        return true
      }
    }

    view.displayMiss(guess)
    view.displayMessage("You missed.")
    // none of the ships have been hit
    return false
  },

  // method to see if ship is sunk
  isSunk: function(ship)
  {
    for (var i = 0; i<this.shipLength; i++)
    {
      if (ship[i] != "hit")
      {
        // still alive/floating
        return false
      }
    }

    return true
  },



  // method to generate ships in random locations
  generateShipLocations: function()
  {
    var locations

    // for each ship
    for (var i = 0; i<this.numShips; i++)
    {
      do
      {
        // keep generating ships till there are no collisions
        locations = this.generateShip()
      } while(this.collision(locations));

      this.ships[i].locations = locations
    }
  },



  generateShip:function()
  {
    // creates array of locations for 1 ship
    // doesn't care about collisions

    // random for horizontal or vertical orientation of ship
    var direction = Math.floor(Math.random() * 2)

    var row, col

    if (direction === 1)
    {
      // generate a horizontal location
      // ensure there is enough room in the same row for the remaining
      // 2 blocks the ship will occupy

      row = Math.floor(Math.random() * this.boardSize)
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength))

    }
    else
    {
      // generate a vertical location
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength))
      col = Math.floor(Math.random() * this.boardSize)
    }

    var newShipLocations = []

    // for loop to append to array
    for (var i = 0; i<this.shipLength; i++)
    {
      if (direction === 1)
      {
        // col + i for the 3 ship locations
        newShipLocations.push(row + "" + (col + i))
      }
      else
      {
        newShipLocations.push((row + i) + "" + col)
      }
    }

    return newShipLocations

  },


  collision: function(locations)
  {
    for (var i = 0; i<this.numShips; i++)
    {
      // for each ship
      var ship = model.ships[i]

      for (var j = 0; j<locations.length; j++)
      {
        // check to see if any of the locations in this ship's array
        // are in any other ship's array
        if (ship.locations.indexOf(locations[j]) >= 0)
        {
          return true;
        }
      }
    }

    return false;
  }


}





// controller: processes guess and gives it to model
// keeps track of current num of guesses and when
// game is over

var controller =
{
  guesses: 0,

  processGuess: function(guess)
  {
    // guess in form "A0"
    var location = parseGuess(guess)

    // truey - non-empty string
    if (location)
    {
      this.guesses++
      var hit = model.fire(location)

      if (hit && model.shipsSunk == model.numShips)
      {
        // end game
        view.displayMessage("You sank all by battleships, in " + this.guesses + "guesses")
      }
    }
  }
}






function parseGuess(guess)
{

  var alphabet = ["A", "B", "C", "D", "E", "F", "G"]

  // check if guess is valid
  if(guess == null || guess.length !== 2)
  {
    alert("Oops, please enter a letter and number on the board")
  }

  else
  {
    // valid I/P
    // first character of guess
    firstChar = guess.charAt(0)
    // convert thr first char to a number
    var row = alphabet.indexOf(firstChar)

    var col = guess.charAt(1)

    if (isNaN(row) || isNaN(col))
    {
      alert("Oops, that isn't on the board")
    }
    else if (row < 0 || row >= model.boardSize || col < 0 || col>=model.boardSize)
    {
      // ensuring the numb is between 0 and 6
      alert ("Oops, that's off the board")
    }
    else
    {
      // row is an int
      // col is a string
      // relying on type conversion to return a string
      return row + col
    }

    return null

  }

}




function init()
{
  var fireButton = document.getElementById("fireButton")
  fireButton.onclick = handleFireButton

  // if return key on keyboard is pressed
  var guessInput = document.getElementById("guessInput")
  guessInput.onkeypress = handleKeyPress;

  // generate random locations for the ships
  model.generateShipLocations()
}



function handleFireButton()
{
  // get player's guess from the form
  // adding an event handler

  var guessInput = document.getElementById("guessInput")
  // get value from the form
  var guess = guessInput.value

  controller.processGuess(guess)

  // reset guess input form
  guessInput.value = ""

}



function handleKeyPress(e)
{
  var button = document.getElementById("fireButton")

  if (e.keyCode === 13)
  {
    button.click();
    return false
  }
}


window.onload = init
