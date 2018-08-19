// want to gen random loc of ship (occupies 3 spaces)
// board posns from 0 to 6
// furthes posn of leftmost edge of ship = 4
// want random num between 0 and 4 inclusive

var randomLoc = Math.floor(Math.random() * 5)

var location1 = randomLoc
var location2 = location1 + 1
var location3 = location2 + 1

var hitLocation1 = false
var hitLocation2 = false
var hitLocation3 = false

var guess
var numGuesses = 0
var numhits = 0
var isSunk = false


// rename variables (command shift g)

while (!isSunk)
{
  // get a guess

  guess = prompt("Enter your guess (0 - 6):")

  // check if guess is valid
  // what if they eneter a non-int?
  if (guess < 0 || guess > 6)
  {
    // invalid guess
    alert ("Please enter a valid guess")

  }

  else
  {
    // valid guess

    numGuesses = numGuesses + 1

    if (guess == location1 && !hitLocation1 || guess == location2 && !hitLocation2 || guess == location3 && !hitLocation3)
    {
      // hit!
      numhits = numhits + 1

      alert ("Hit!")


      if (guess == location1)
      {
        hitLocation1 = true
      }
      if (guess == location2)
      {
        hitLocation2 = true
      }
      if (guess == location3)
      {
        hitLocation3 = true
      }


      if (numhits == 3)
      {
        isSunk = true

        alert ("Sunk!")

      }

    }

    else if (!(guess == location1 || guess == location2 || guess == location3))
    {
      alert ("Miss")
    }
    else
    {
      alert ("You've already hit a ship in that location")
    }

  }

}

// show stats
alert("Here are some stats: You took " + numGuesses + " guesses to sink the ship. Your accuracy is " + Math.Florr(3*100/numGuesses) + "%")
