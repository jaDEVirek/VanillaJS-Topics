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
// Lambda functions
// this and arguments are lexical 
function Playlist(name) {
      this.name = name;
}

Playlist.prototype.play = function (songs) {
      return songs.map(function (song) {
            console.log(this);

            return `Playlist  ${this.name} - ${song.title}`;
      });
}
Playlist.prototype.oldThatPlay = function (songs) {
      var that = this;
      return songs.map(function (song) {
            console.log(that);
            return `Playlist  ${that.name} - ${song.title}`;
      });
}
Playlist.prototype.arrowThisPlay = function (songs) {
      return songs.map((song) => {
            console.log(this);
            return `Playlist  ${this.name} - ${song.title}`;
      });
}
Playlist.prototype.bindPlay = function (songs) {
      return songs.map(function (song) {
            console.log(this);
            return `Playlist  ${this.name} - ${song.title}`;
      }.bind(this));
}
let myPlaylist = new Playlist("Europe");
console.log(myPlaylist.play([{ title: 'Carrie' }, { title: 'Final countdown' }]));
console.log(myPlaylist.oldThatPlay([{ title: 'Carrie' }, { title: 'Final countdown' }]));
console.log(myPlaylist.arrowThisPlay([{ title: 'Carrie' }, { title: 'Final countdown' }]));
console.log(myPlaylist.bindPlay([{ title: 'Carrie' }, { title: 'Final countdown' }])); 