//normal ES5 function
function square(x) {
  return x * x;
}
console.log(square(3));

//same but arrow function ES6
const squareArrow = (x) => {
  return x * x;
}

//one line with one splicit return
const squareArroww = (x) => x * x;

console.log(squareArroww(4));

//CHALLENGE
const getFirstName = (fullName) => {
  return fullName.split(' ')[0]
}
console.log(getFirstName('Angel Rod'))

//same function but shorthand
const getFirstNamee = (fullName) => fullName.split(' ')[0];
console.log(getFirstNamee('Alberto Rdz'))

//-------------------------------------------------------


//argument objects - no longer bound with arrow functions
const add = (a, b) => {
  //console.log(arguments) //this is no longer available in ES6
  return a + b;
}
console.log(add(55, 1, 1001))


//this keyword
const user = {
  name: 'Angel',
  cities : ['Oakland', 'Tijuana'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
user.printPlacesLived();

// Challenge
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
};