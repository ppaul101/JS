
game_array = [[0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]]

var currentScore = 0
var numberOfMoves = 0

window.onload = function()
{
  updateTable()

  document.onkeydown = function(evt)
  {
      // WASD or arrow keys
      if (evt.key === "w" || evt.keyCode == "38")
      {
        rotateArrayRight()

        findZeroes()
        combineAdjacentElements()
        findZeroes()

        rotateArrayRight()
        rotateArrayRight()
        rotateArrayRight()

        updateTable()
      }

      else if (evt.key === "a" || evt.keyCode == "37")
      {
        rotateArrayRight()
        rotateArrayRight()

        findZeroes()
        combineAdjacentElements()
        findZeroes()

        rotateArrayRight()
        rotateArrayRight()

        updateTable()
      }

      else if (evt.key === "s" || evt.keyCode == "40")
      {
        rotateArrayRight()
        rotateArrayRight()
        rotateArrayRight()

        findZeroes()
        combineAdjacentElements()
        findZeroes()

        rotateArrayRight()

        updateTable()
      }

      else if (evt.key === "d" || evt.keyCode == "39")
      {

        // no rotations necessary :)

        findZeroes()
        combineAdjacentElements()
        findZeroes()
        updateTable()

      }
  }

  document.getElementById("button").onclick = resetBoard

}


function findZeroes()
{
  for (var i = 0; i < game_array.length; i++)
  {
    for (var j = 0; j < game_array[0].length; j++)
    {
      if (game_array[i][j] === 0)
      {
        // finds any zeros in the array
        shiftZeroes(i, j)
      }
    }
  }
}


function shiftZeroes(row, col)
{
    // function to shift gaps (0 elements) in the array
    // helps find adjacent values that are the same
    // row, col is the row and column of a '0'

    // shift all values to the left of the 0, to the right

    var j = col - 1

    while (j >= 0 )
    {

      game_array[row][j + 1] = game_array[row][j]

      game_array[row][j] = 0

      j = j - 1

    }

}

function combineAdjacentElements()
{

  for (var i = 0; i < game_array.length; i++)
  {
    // final element in array
    var k = game_array.length - 1

    // don't want to reach element 0, due to k-1
    while (k > 0)
    {
      if (game_array[i][k] === game_array[i][k-1])
      {
        // matching elements!
        game_array[i][k] = game_array[i][k] * 2

        game_array[i][k-1] = 0
      }

      k = k - 1
    }
  }
}



function rotateArrayRight()
{
  // creating copy of original
  var original_array = new Array(game_array.length)

  for (var a = 0; a<game_array.length; a++)
  {
    original_array[a] = new Array(game_array.length)
  }

  for (var i = 0; i<game_array.length; i++)
  {
    for (var j = 0; j<game_array.length; j++)
    {
      original_array[i][j] = game_array[i][j]
    }
  }


  // now rotate game_array

  for (var i = 0; i < game_array.length; i++)
  {
    var x = 3

    for (var j = 0; j < game_array.length; j++)
    {
        game_array[i][j] = original_array[x][i]
        x--
    }

  }

}


function placeRandomTwo()
{
  // tally up number of 0s
  var numZeros = 0

  for (var i = 0; i<game_array.length; i++)
  {
    for (var j = 0; j<game_array[0].length; j++)
    {
      if (game_array[i][j] === 0)
      {
        numZeros++
      }
    }
  }

  // random position of the 0
  var randNum = Math.floor(Math.random() * numZeros)

  // place the 0
  var zeroIndex = 0

  for (var i = 0; i<game_array.length; i++)
  {
    for (var j = 0; j<game_array[0].length; j++)
    {
      if (game_array[i][j] === 0)
      {
        if (zeroIndex === randNum)
        {
          game_array[i][j] = 2
          return
        }

        zeroIndex++
      }
    }
  }

}


function updateTable()
{

  placeRandomTwo()

  printTable()

  // update currentScore
  for (var i = 0; i<game_array.length; i++)
  {
    for (var j = 0; j<game_array[0].length; j++)
    {
      if (game_array[i][j] > currentScore)
      {
        currentScore = game_array[i][j]

        if (currentScore >= 2048)
        {
          printTable()
          alert("Well done! You finished the game in " + numberOfMoves + " moves")
          resetBoard()
        }
      }
    }
  }

  var scoreElement = document.getElementById("score")
  scoreElement.innerHTML = "Your current score is: " + currentScore

  var movesElement = document.getElementById("moves")
  if (numberOfMoves === 0)
  {
    movesElement.innerHTML = "You have made no moves so far. Use the 'WASD' keys to move the numbers on the board."
  }
  else if (numberOfMoves === 1)
  {
    movesElement.innerHTML = "You have made " + numberOfMoves + " move"
  }
  else
  {
    movesElement.innerHTML = "You have made " + numberOfMoves + " moves"
  }

  numberOfMoves++

}

function printTable()
{
  var table = document.getElementById("table")

  for (var i = 0; i<table.rows.length; i++)
  {
    for (var j = 0; j<table.rows[i].cells.length; j++)
    {
      table.rows[i].cells[j].innerHTML = game_array[i][j]

      // make it easier to spot same elements

      switch (game_array[i][j]) {
        case 2: table.rows[i].cells[j].style.color =  "#ffb600"
                break;
        case 4: table.rows[i].cells[j].style.color =  "#ff9d00";
                break;
        case 8: table.rows[i].cells[j].style.color =  "#ff8300";
                break;
        case 16:table.rows[i].cells[j].style.color =  "#ff6600";
                break;
        case 32:table.rows[i].cells[j].style.color =  "#ff5900";
                break;
        case 64:table.rows[i].cells[j].style.color =  "#ff4c00";
                break;
        case 128:table.rows[i].cells[j].style.color =  "#ff3f00";
                break;
        case 256:table.rows[i].cells[j].style.color =  "#ff3b00";
                break;
        case 512:table.rows[i].cells[j].style.color =  "#ff2e00";
                break;
        case 1024:table.rows[i].cells[j].style.color =  "#ff1500";
                break;
        case 2048:table.rows[i].cells[j].style.color =  "#ff0000";
                break;
        default: table.rows[i].cells[j].style.color = "grey"

      }

    }
  }

}


function resetBoard()
{
  // restart board and counters
  game_array = [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]]

  currentScore = 0
  numberOfMoves = 0

  // place random 2
  updateTable()

}
