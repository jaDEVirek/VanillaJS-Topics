document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementsByClassName('btn-info')[0];
      el.addEventListener('click', loadText);
}
)

function loadText() {
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'user.json', true);
      xhr.onload = function () {
            if (xhr.status == 200) {
                  var users = this.responseText;
                  var parsed = JSON.parse(this.responseText);
                  var parsed2 = JSON.parse(users);
                  //   console.log(users[0].name);
                  // Object.entries(users).forEach(function ([key, value]) {
                  //       console.log('key: ' + key + ' values: ' + value);
                  // });
                  console.log(users.substring(1, 41))
                  console.log(parsed2[1].name)
            }
      }
      xhr.send();
}

