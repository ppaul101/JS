// constructors used to create objects with the same basic structure
// object constructors and functions are closely related

// capital by convention
function Dog(name, breed, weight)
{
  this.name = name
  this.breed = breed
  this.weight = weight

  this.bark = function()
  {
    if (this.weight > 10)
    {
      console.log(this.name + " says woof!")
    }
    else
    {
      console.log(this.name + " says yip")
    }
  }

  // constructor automatically returns 'this'
  // 'this' is a pointer to a new instance of Dog object

}

// don't foget 'new' keyword
var grace = new Dog("grace", "mixed", 8)

grace.bark()

console.log(grace)

// checking object instances
if (grace instanceof Dog)
{
  console.log("Grace is indeed a dog");
}


// can add/delete properties/methods for grace instance
// will only affect grace instance of the Dog constructor

grace.colour = "white"

console.log(grace.colour);


delete grace.breed

console.log(grace);




// a MUCH nicer way of dealing with object constructors is by passing in an object literal
// improves code readibility and programmer less likely to miss a property when initialising a new instance of the object constructor

function Cat(param)
{
  this.name = param.name

  this.breed = param.breed

  this.weight = param.weight


  // methods remain unchanged as they reference properties of the constructor itself, rather than their parameters'

  this.meow = function()
  {
    // this.weight here - no change from before
    if (this.weight > 10)
    {
      console.log(this.name + " says MEOW!");
    }
    else
    {
      console.log(this.name + " says meoooow");
    }
  }

}

// defining an object literal that contains Toby's properties
// this will be passed into the Cat object constructor
var tobyParams =
{
  name: "toby",

  // notice different order to that of the closure
  weight: 7,

  breed: "purebreed"

}


var toby = new Cat(tobyParams)

toby.meow()
console.log(toby);
