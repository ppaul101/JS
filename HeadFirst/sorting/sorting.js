// want to sort the products based on their different properties
// make use of first class functions in the '.sort' method of the array

var products = [{name: "Grapefruit", calories: 170, colour: "red", sold: 8200},
                {name: "Orange", calories: 160, colour: "orange", sold: 12101},
                {name: "Cola", calories: 210, colour: "caramel", sold: 25412},
                {name: "Diet Cola", calories: 0, colour: "caramel", sold: 43922},
                {name: "Water", calories: 0, colour: "colourless", sold: 62123}
              ]




function compareSold(colaA, colaB)
{

  // for ascending order:
  // return a number > 0 if colaA>colaB
  // return 0 is colaA===colaB
  // return a number < 0 if colaA<colaB

  // comparing the sold property
  return colaA.sold - colaB.sold

}


console.log(products);

products.sort(compareSold)

console.log(products)



function compareCalories(colaA, colaB)
{
  return colaA.calories - colaB.calories
}

products.sort(compareCalories)

console.log(products);
