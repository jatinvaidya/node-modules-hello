//@ts-check

// functions
let adder = (a, b) => a + b;
let subtracter = (a, b) => a - b;
let multiplier = (a, b) => a * b;
let divider = (a, b) => a / b;
let usage = () => 'Please use one of the available operations';

// string
let greeting = 'Hello, Jatin!';

// object
let personObject = {
    first: 'Jatin',
    last: 'Vaidya'
};

// class
class Person {
    constructor(name) {
        this.name = name
    }

    hello() {
        return 'Hello, I am ' + this.name + '.'
    }
}


module.exports = usage; // like default in ES6
module.exports.adder = adder;
module.exports.differ = subtracter;
module.exports.multiplier = multiplier;
module.exports.divider = divider;

module.exports.greeting = greeting;
module.exports.person = personObject;
module.exports.Person = Person;
