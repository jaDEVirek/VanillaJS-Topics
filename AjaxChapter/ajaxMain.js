document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementsByClassName('btn-info')[0];
      var e2 = document.getElementsByClassName('btn-warning')[0];
      el.addEventListener('click', loadText);
      e2.addEventListener('click', loadExternalApi);
}
)

function loadText() {
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'user.json', true);
      xhr.onload = function () {
            if (xhr.status == 200) {
                  var users = this.responseText;
                  var dataUsers = JSON.parse(this.responseText);
                  //   console.log(users[0].name);
                  // Object.entries(users).forEach(function ([key, value]) {
                  //       console.log('key: ' + key + ' values: ' + value);
                  // });
                  let outPut = '';
                  for (let index in dataUsers) {
                        outPut += "<ul>" +
                              '<li> Age:  ' + dataUsers[index].age + '</li>' +
                              '<li> Name:  ' + dataUsers[index].name + '</li>' +
                              '<li> email:  ' + dataUsers[index].email + '</li>' +
                              '</ul>';
                  }
                  document.querySelector("div.col-1").innerHTML = outPut;
            }
      }
      xhr.send();
}

function loadExternalApi() {
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users', true);
      xhr.onload = function () {
            if (xhr.status == 200) {
                  var resp = JSON.parse(this.responseText);
                  let outPut = '';
                  for (let index in resp) {
                        outPut += "<ul>" +
                              '<img src="' + resp[index].avatar_url + '" width="70" height="70">' +
                              +'<ul>' +
                              '<li> ID:  ' + resp[index].id + '</li>' +
                              '<li> Login:  ' + resp[index].login + '</li>' +
                              '</ul>' + '</div >';
                  }
                  console.log("action");
                  document.querySelector("div.inner-cl2").innerHTML = outPut;
            }
      }
      xhr.send();

}

