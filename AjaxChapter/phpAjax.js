document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementsByClassName('btn-primary')[0];
      el.addEventListener('click', loadPHP);
})


function loadPHP() {
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'process.php?name=Wiktor', true);
      xhr.onload = function () {
            if (xhr.status == 200) {
                  console.log(this.responseText);
            }
      }
      xhr.send();
}



