// default value if not set 
function greeting(greeting = "default Hello") {
      console.log(greeting);
}
greeting();

//spread
const numbs = [1, 2, 3, 4];
const words = ["Some", "test", "words"];

function tesIt(...args) {
      console.log("As for  each:", ...args);
      console.log("As once :", args);
}
// as one array 
tesIt(...words, ...numbs);
//as array of 2 values 
tesIt(null, numbs);
// Array of : one array as words, and numbs as values 
tesIt(words, ...numbs);
/**
 * Let's take a look at some data-structures
 *  Set, Maps - WeakSet and Weak Maps
 */

let givenSet = new Set();

givenSet.add("One");
givenSet.add(1);
givenSet.add(null);
givenSet.add({ name: 'Tom', age: 25 });
console.log(givenSet);
givenSet.delete(null);
console.log(givenSet);
givenSet.clear();
// other is ->  mySet.size for example to return length on actual set
// Map got individual keys , for pairs [key,value] 
let givenMap = new Map([['Name:', 'Tom'], [11, 'Key As age']]);
let given2Map = new Map([['Name:', 'Tom']]);

//map constructor need be iterable ! thats why we got [[K,V]]
// givenMap.set(['Name:', 'Tom'], [11, 'Key As age']);
console.log(givenMap)
console.log(given2Map)
given2Map.set("key", 150);
console.log("Afeter set value:", given2Map)

// hold only unique Reference object, and only objects 
let weakSet = new WeakSet();
let asRef = { name: "Reference" };
weakSet.add({ name: "Unique" });
weakSet.add({ name: "Unique" }); // these are difference object, but same values because the reference is not same 
weakSet.add(asRef);
weakSet.add(asRef); // cant add same object, bcs asRef got same reference 
console.log("Weak", weakSet);