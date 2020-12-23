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
                  console.log(users);
                  console.log(parsed)
            }
      }
      xhr.send();
}