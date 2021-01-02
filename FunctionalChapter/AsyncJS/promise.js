function getFoodData() {
      return new Promise((resolve, reject) => {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'food.json', true);

            xhr.onload = function () {
                  if (this.status >= 200 && this.status <= 300) {
                        resolve(xhr.responseText);
                  } else {
                        reject({
                              status: this.status,
                              statusText: xhr.statusText
                        });
                  }
            }
            xhr.onerror = function () {
                  reject({
                        status: this.status,
                        statusText: xhr.statusText
                  });
            };
            xhr.send();
      });
}
var formatedData = function () {
      getFoodData().then(function (rq) {
            var data = JSON.parse(rq);
            var filtred = data.filter((food) => (food.hasOwnProperty('tags')));
            console.log(filtred);
      });
}

document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementById("getData");
      el.addEventListener('click', formatedData);
});