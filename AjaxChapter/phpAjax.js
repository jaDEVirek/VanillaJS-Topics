document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementsByClassName('btn-primary')[0];
      var el2 = document.getElementById('st-form');
      var el3 = document.getElementById('sd-form');
      el.addEventListener('click', loadPHPButton);
      el2.addEventListener('submit', validForms);
      el3.addEventListener('submit', postForms);
})

function loadPHPButton() {
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'process.php?name=Wiktor', true);
      xhr.onload = function () {
            if (xhr.status == 200) {
                  console.log(this.responseText);
            }
      }
      xhr.send();
}

function validForms(e) {
      e.preventDefault();
      var name = document.querySelector('#st-form input[name="name"]').value;
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'process.php?name=' + name, true);
      xhr.onload = function () {
            let outPut = '';
            if (xhr.status == 200) {
                  outPut += "<span>" +
                        this.responseText +
                        "</span>";
            }
            document.querySelector('.col.d-block').innerHTML = outPut;
      }
      xhr.send();
}

function postForms(e) {
      e.preventDefault();
      var name = document.querySelector('#sd-form input[name="name"]').value;
      var rqParam = "name=" + name;
      xhr = new XMLHttpRequest();
      xhr.open('POST', 'process.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
            console.log(this.responseText);
      }
      xhr.send(rqParam);
}


