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

