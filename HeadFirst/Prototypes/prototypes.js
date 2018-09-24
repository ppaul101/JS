// see Constructors.js first
// problem with dog Constructor is that each instance of the Dog object has
// their own version of the bark method that is identical to all other Dog instances
// this is a waste of memory!

// use Dog prototype that each Dog instance inherits from
// instance of object will first look inside object Constructor for properties/methods before it
// looks at the prototype

// start off as before, by defining a Dog constructor (similar to a fn that returns 'this')

function Dog(name, breed, size)
{
  this.name = name
  this.breed = breed
  this.size = size

  // fn automatically returns 'this'
}

// now all instances of Dog object have a species property that is initialised to "Canine"
// unless overriden by specific instances of the object
Dog.prototype.species = "Canine"


// all dogs can now bark
Dog.prototype.bark = function bark() {

  if (this.size > 10)
  {
    console.log(this.name + " says Woof!");
  }
  else {
    console.log(this.name + " says yip");
  }

}

// all dogs can now walk
Dog.prototype.walk = function walk() {

  console.log(this.name + " is walking");
}



var grace = new Dog("Grace", "Mixed", 8)
grace.bark()
grace.walk()

// now all dogs can sniff
Dog.prototype.sniff = function()
{
  console.log(this.name + " is sniffing");
}

grace.sniff()


console.log("----------");
var spot = new Dog("Spot", "Beagle", 6)
spot.walk()
spot.bark()

// we want spot to be able to woof, even though he is small
// this is a method override
spot.bark = function()
{
  console.log("Spot says Woof!");
}

spot.bark()


console.log("-------");
Dog.prototype.sitting = false

Dog.prototype.sit = function()
{
  if (this.sitting)
  {
    console.log(this.name + " is already sitting");
  }
  else {
    this.sitting = true
    console.log(this.name + " is now sitting");
  }
}


console.log(spot.hasOwnProperty("sitting"))

spot.sit()

// overriden property now added to instance Spot
console.log(spot.hasOwnProperty("sitting"))



console.log("--------")

// want to create ShowDog prototype that inherits from Dog prototype
// ShowDog prototype is an instance of the Dog prototype
// ShowDog prototype extends the Dog prototype

// as before, start off by defining a ShowDog constructor
function ShowDog(name, breed, weight, colour)
{
  // assing name, breed, weight as in the dog constructor
  Dog.call(this, name, breed, weight)

  this.colour = colour

}

// this is what is different:
ShowDog.prototype = new Dog()
ShowDog.prototype.constructor = ShowDog
// ---

ShowDog.prototype.bait = function()
{
  console.log(this.name + " is now baiting")
}

ShowDog.prototype.gait = function()
{
  console.log(this.name + " is now gaiting")
}

ShowDog.prototype.groom = function()
{
  console.log(this.name + " is now being groomed")
}


var scotty = new ShowDog("Scotty", "Mixed", 9, "Black")

console.log("Scotty's constructor is " + scotty.constructor.name)




if(scotty instanceof Dog)
{
  console.log("scotty is an instance of Dog")
}

if(scotty instanceof ShowDog)
{
  console.log("Scotty is an instance of ShowDog")
}
