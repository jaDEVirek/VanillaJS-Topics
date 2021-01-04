"use strict"

//in global scoping, they are same
var varA = "Test1";
let varB = "Test2";
console.log(varA);
console.log(varB);


function testingVariables() {
      var varA = 30;
      if (true) {
            var varA = 50;
            console.log("Var Inner", varA);
      }
      console.log("Var Outer", varA);
}
// output: 50 and 50 
testingVariables();

function testingLetLevel() {
      let varA = 30;
      if (true) {
            let varA = 50;
            console.log("Let Inner", varA);
      }
      console.log("Let Outer", varA);
}
// output: 50 and 30
testingLetLevel();

for (var index = 0; index < 10; index += 5) {
      console.log("index", index);
}
// if we just use let "index", there was an error: that index is not defined ! 
// but with var- there is other scope 
console.log(index); // return 10 ! be careful 


//Take a look at CONST - setting once, does not change the reference ! But if, it's an array for example, then we can modify - array values, but not reference. \

const array = [];
array.push("Pushed Once");
array.push("Pushed Twice");
// output scope.js:46 (2) ["Pushed Once", "Pushed Twice"] !
console.log(array);
// we can't assign again !
// array = "Pushed Third"  --> this return an error "Assignment" 