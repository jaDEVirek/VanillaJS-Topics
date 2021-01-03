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

var formattedData = function () {
      getFoodData().then(dataFiltering)
}

var dataFiltering = function (rq) {
      var data = JSON.parse(rq);
      //   var example1 = data.filter((food) => (Object.values(food).includes('carbs')));
      var filtered = data.filter((food, index) => {
            // food['tags'].contains('carb');
            //  console.log(food.hasOwnProperty('tags'));
            return food.hasOwnProperty('tags') == true;
      }).filter((food) => {
            return food['tags'].includes('carb');
      });
      var outPut = '';
      filtered.forEach(element => {
            outPut += `<li>${element.name}</li><li>${element['nutrition-per-100g'].energy}</li><li>${element['nutrition-per-100g'].protein}</li>` +
                  `<hr>`;
      });
      document.getElementById('output').innerHTML = outPut;
      // var example2 = data.forEach(element => {
      //       elem.push(Object.values(element));
      // });
      // var example3  = Object.values(data).find(val => val['tags'].includes('carb'));
}

document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementById("getData");
      el.addEventListener('click', formattedData);
});