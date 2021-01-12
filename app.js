
//@ts-check

const util = require('./util.js');

console.log(util.greeting);
console.log(util.person.first);
console.log(util());
console.log(util.adder(5, 8));
console.log(util.differ(5, 8));
console.log(util.multiplier(5, 8));
console.log(util.divider(5, 8));
console.log(new util.Person('Jatin').hello());

(function(arg) {
    console.info(`anonymous immediately executing function ${arg}`);
})('my-arg');