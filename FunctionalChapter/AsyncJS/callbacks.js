const gameMemberships = [
      {
            gameName: "Runescape",
            price: "35euro",
            duration: "30days",
            permanent: false
      }, {
            gameName: "World of Warcraft",
            price: "30euro",
            duration: "14days",
            permanent: false,
      }, {
            gameName: "Diablo 3",
            price: "50euro",
            duration: "none",
            permanent: true
      }
];

function getMembershipInfo() {
      setTimeout(() => {
            let outPut = '';
            gameMemberships.forEach((game, index) => {
                  outPut += `<li>${game.gameName}</li><li>${game.price}</li><li>${game.duration}</li>` +
                        `<hr>`;
            });
            document.body.innerHTML = outPut;
      }, 1000);
}

function addMembership(pmGame, callback) {
      setTimeout(() => {
            gameMemberships.push(pmGame);
            callback();
      }, 2000);
}
// you can just hide this function call 
getMembershipInfo();
// to show result we need add just callback function 
addMembership({
      gameName: "Age of Empire", price: "25euro", duration: "50euro", permanent: false
}, getMembershipInfo);
