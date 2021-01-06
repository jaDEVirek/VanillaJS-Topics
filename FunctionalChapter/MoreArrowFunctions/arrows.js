// keyword this is important thing about arrow functions

/**
 *  First of all  arrow function doesn't  have  its own "this" object
  *
 */
let me = {
      name: "Ashutosh Verma",
      thisInArrow: (name) => {

            console.log("My name is " + name); // no 'this' binding here 
      },
      thisInRegular() {
            console.log("My name is " + this.name); // 'this' binding works here 
      }
};
me.thisInArrow();
me.thisInRegular();
