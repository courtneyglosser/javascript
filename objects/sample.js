

// This is the simplest class definition:
var MyObject = {};

// Then you can add properties and member functions later:
MyObject.prop = "this property";
MyObject.getProp = function () {return this.prop; };


// Then call member function later.
console.log (MyObject.getProp());

// You can create inheritable objects by starting with a constructor function:
function Person() {
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
    this.legs = 2;
}

// Then you can inherit with the "new" keyword:
var pirate = new Person();
var normal = new Person();

// and specialize as necessary:
pirate.eyes = 1;
pirate.legs = 1;

console.log("Pirate has: " + pirate.eyes);
console.log("While normal person has: " + normal.eyes);
