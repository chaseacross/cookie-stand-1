


/* More modular yet...
var people = [person5, person6];
for (var i = 0; i < people.length; i++) {
people[i].render()
}
*/


var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "]

var pikeStore = {
  name: "Pike Place",
  min: 17,
  max: 88,
  avg: 5.2,
  arrayCookiesPerHour: [],
  custPerHour: function() {
    return Math.random() * ((this.max - this.min) + this.min + 1);
  },
  displayCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookieSold = Math.floor(this.custPerHour() * this.avg);
      this.arrayCookiesPerHour.push(cookieSold);
    }
    return this.arrayCookiesPerHour;
  },
  render: function() {
    var ul = document.getElementById('PikeStore');
    // ul.textContent = pikeStore.name;
    // ul.appendChild = pikeStore.name;
    // ul.appendChild(pikeStore.name);
    for (var j = 0; j < hours.length; j++) {
      var li = document.createElement('li');
      li.textContent = hours[j] + ' ' + this.arrayCookiesPerHour[j];
      ul.appendChild(li);
    }

    //     var dataStore = document.getElementById('PikeStore');
    //
    //     var liMin = document.createElement('li');
    //     var liMax = document.createElement('li');
    //     var liAvg = document.createElement('li');
    //
    //     ulName.textContent = pikeStore.name;
    //     liMin.textContent = 'min: ' + pikeStore.min;
    //     liMax.textContent = 'max: ' + pikeStore.max;
    //     liAvg.textContent = 'avg: ' + pikeStore.avg;
    //
    //     ulName.appendChild = pikeStore.name;
    //     liMin.appendChild = 'min: ' + pikeStore.min;
    //     liMax.appendChild = 'max: ' + pikeStore.max;
    //     liAvg.appendChild = 'avg: ' + pikeStore.avg;
    //
    //     dataStore.appendChild(ulName);
    //     dataStore.appendChild(liMin);
    //     dataStore.appendChild(liMax);
    //     dataStore.appendChild(liAvg);
  }
};
pikeStore.custPerHour();
pikeStore.displayCookiesPerHour();
pikeStore.render();

// constructor function
// function Store(name, min, max, avg) {
//   this.name = name;
//   this.min = min;
//   this.max = max;
//   this.avg = avg;
//
//   this.renderAsRow = function() {
//
//     Store.randomNum = function getRandom(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//
//     var storeTable = document.getElementById('Stores');
//     var trElement = document.createElement('tr');
//     var nameData = document.createElement('td');
//     var minData = document.createElement('td');
//     var maxData = document.createElement('td');
//     var avgData = document.createElement('td');
//
//     nameData.textContent = this.name;
//     minData.textContent = this.min;
//     maxData.textContent = this.max;
//     avgData.textContent = this.avg;
//
//     trElement.appendChild(nameData);
//     trElement.appendChild(minData);
//     trElement.appendChild(maxData);
//     trElement.appendChild(avgData);
//
//     storeTable.appendChild(trElement);
//
//   };
//
// }
//
//
// var storeOne = new Store('Pike Place', 17, 88, 5.2);
// var storeTwo = new Store('SeaTac Airport', 6, 24, 1.2);
// var storeThree = new Store('Southcenter', 11, 38, 1.9);
// var storeFour = new Store('Bellevue Square', 20, 48, 3.3);
// var storeFive = new Store('Alki', 3, 24, 2.6);
//
// storeOne.renderAsRow();
// storeTwo.renderAsRow();
// storeThree.renderAsRow();
// storeFour.renderAsRow();
// storeFive.renderAsRow();
