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

function person() {
      //  let that = this;

      var age = 10;
      function logs() {
            console.log(this);
            console.log("bind");
      }
      logs()
      console.log(this);
}
person();

const filter(f, array){
      for (let i = 0; i < array.length; i++) {
            if (f(array[i])) {
                  filtered.push(array[i]);
            }
      }
}

const array = [1, 2, 3];
const filtered = (a => !!a, array);