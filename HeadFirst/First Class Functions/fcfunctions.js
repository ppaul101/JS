// airplane catering


var passengers = [{name: "Jane", paid: true, ticket: "coach"},
                  {name: "Dr. Evil", paid: true, ticket: "firstclass"},
                  {name: "Sue", paid: false, ticket: "firstclass"},
                  {name: "John", paid: true, ticket: "premium"}]


function serveCustomer(passenger)
{
  // paramater is a single passenger

  // assign getDrinkOrderFunction to the returned function (from createDrinkOrder)
  var getDrinkOrderFunction = createDrinkOrder(passenger)

  // no longer need to identify passenger's ticket every time
  getDrinkOrderFunction()

  // serve dinner

  getDrinkOrderFunction()

  // watch film

  getDrinkOrderFunction()

}


function createDrinkOrder(passenger)
{

  // want to avoid recomputing passenger's ticket when reserving drinks
  // return a fn that will offer the correct options based on the ticket

  var orderFunction


  if (passenger.ticket === "firstclass")
  {
    orderFunction = function()
    {
      alert("Would you like a cocktail or wine?")
    }

  }

  else if (passenger.ticket === "premium")
  {
    orderFunction = function()
    {
      alert("Would you like wine, cola or water?")
    }
  }

  else
  {
    orderFunction = function()
    {
      alert("Your choice is a cola or water")
    }
  }

  // return the fn
  return orderFunction

}




// run for the passengers

function servePassengers(passengers)
{
  for (var i = 0; i<passengers.length; i++)
  {
    serveCustomer(passengers[i])
  }
}

servePassengers(passengers)
