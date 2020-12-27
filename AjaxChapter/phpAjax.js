document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementsByClassName('btn-primary')[0];
      var el2 = document.getElementById('st-form');
      el.addEventListener('click', loadPHPButton);
      el2.addEventListener('submit', validForms);
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
      console.log('check name ' + name);

      xhr = new XMLHttpRequest();
      xhr.open('GET', 'process.php?name=' + name, true);
      xhr.onload = function () {
            let outPut = '';
            if (xhr.status == 200) {
                  console.log(this.responseText);
                  outPut += "<span>" +
                        this.responseText +
                        "</span>";
            }
            document.querySelector('.col.d-block').innerHTML = outPut;
      }
      xhr.send();
}


