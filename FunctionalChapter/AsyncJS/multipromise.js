//Promise all example
// we don't want to call "." and then whole time 

const promise1 = Promise.resolve("I'm resolved !!");
const promise2 = 10 + 89;
const promise3 = new Promise((res, reject) => {
      setTimeout(res, 2000, "TimeOut Resolver ");
});

Promise.all(promise1, promise2, promise3).then((values) => {
      console.log(values);
});

//Async + await 
// be sure you import  callback.js script before on index.html file 
async function init() {
      await addMembership({
            gameName: "AsyncGame", price: "55euro", duration: "none", permanent: true
      });
      getMembershipInfo();
}
init();

//fetching with async 
async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/');
      const data = await res.json();
      console.log(data);
}
fetchUsers();