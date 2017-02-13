// // declare global hour variable
// var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
// // declare object literal for Pike Place
// var pikePlaceStore = {
//   storeName: "Pike Place",
//   minCustomer: 17,
//   maxCustomer: 88,
//   avgCookie: 5.2,
//   perHourTotals: [],
//   grandTotal: 0,
// // declare function for random number generator to use for hourTotal function
//   getRandom: function() {
//     return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
//   },
// // solves for total number of cookies sold per hour then populates perHourTotals array.
//   hourTotal: function() {
//   for(var j = 0; j < hours.length; j++) {
//     var randomNum = Math.floor(this.getRandom() * this.avgCookie);
//     this.perHourTotals.push(randomNum);
//     // adds all cookies together to show a grand total
//     this.grandTotal += randomNum;
//   }
//    return this.hourTotal;
//   },
// // renders the list unto HTML
//   render: function() {
//   this.hourTotal();
//   var pElement = document.getElementById("PikePlace");
//   var ulElement = document.createElement('ul');
//
//   for (var i = 0; i < hours.length; i++) {
//     var liElement = document.createElement('li');
//     pElement.textContent = this.storeName;
//     liElement.textContent = hours[i] + this.perHourTotals[i];
//     ulElement.appendChild(liElement);
//   }
//   var liShowsTotal = document.createElement('li');
//   liShowsTotal.textContent = "Total: " + this.grandTotal;
//   ulElement.appendChild(liShowsTotal);
//   pElement.appendChild(ulElement);
//   }
// };
// // call functions
// pikePlaceStore.getRandom();
// pikePlaceStore.hourTotal();
// pikePlaceStore.render();
//
// var seaTacStore = {
//   storeName: "SeaTac Airport",
//   minCustomer: 6,
//   maxCustomer: 24,
//   avgCookie: 1.2,
//   perHourTotals: [],
//   grandTotal: 0,
//
//   getRandom: function() {
//     return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
//   },
//
//   hourTotal: function() {
//   for(var j = 0; j < hours.length; j++) {
//     var randomNum = Math.floor(this.getRandom() * this.avgCookie);
//     this.perHourTotals.push(randomNum);
//     this.grandTotal += randomNum;
//   }
//    return this.hourTotal;
//   },
//
//   render: function() {
//   this.hourTotal();
//   var pElement = document.getElementById("SeaTac");
//   var ulElement = document.createElement('ul');
//
//   for (var i = 0; i < hours.length; i++) {
//     var liElement = document.createElement('li');
//     pElement.textContent = this.storeName;
//     liElement.textContent = hours[i] + this.perHourTotals[i];
//     ulElement.appendChild(liElement);
//   }
//   var liShowsTotal = document.createElement('li');
//   liShowsTotal.textContent = "Total: " + this.grandTotal;
//   ulElement.appendChild(liShowsTotal);
//   pElement.appendChild(ulElement);
//   }
// };
// seaTacStore.getRandom();
// seaTacStore.hourTotal();
// seaTacStore.render();
//
// var southcenterStore = {
//   storeName: "Southcenter",
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookie: 1.9,
//   perHourTotals: [],
//   grandTotal: 0,
//
//   getRandom: function() {
//     return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
//   },
//
//   hourTotal: function() {
//   for(var j = 0; j < hours.length; j++) {
//     var randomNum = Math.floor(this.getRandom() * this.avgCookie);
//     this.perHourTotals.push(randomNum);
//     this.grandTotal += randomNum;
//   }
//    return this.hourTotal;
//   },
//
//   render: function() {
//   this.hourTotal();
//   var pElement = document.getElementById("Southcenter");
//   var ulElement = document.createElement('ul');
//
//   for (var i = 0; i < hours.length; i++) {
//     var liElement = document.createElement('li');
//     pElement.textContent = this.storeName;
//     liElement.textContent = hours[i] + this.perHourTotals[i];
//     ulElement.appendChild(liElement);
//   }
//   var liShowsTotal = document.createElement('li');
//   liShowsTotal.textContent = "Total: " + this.grandTotal;
//   ulElement.appendChild(liShowsTotal);
//   pElement.appendChild(ulElement);
//   }
// };
// southcenterStore.getRandom();
// southcenterStore.hourTotal();
// southcenterStore.render();
//
// var bellevueSquareStore = {
//   storeName: "Bellevue Square",
//   minCustomer: 20,
//   maxCustomer: 48,
//   avgCookie: 3.3,
//   perHourTotals: [],
//   grandTotal: 0,
//
//   getRandom: function() {
//     return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
//   },
//
//   hourTotal: function() {
//   for(var j = 0; j < hours.length; j++) {
//     var randomNum = Math.floor(this.getRandom() * this.avgCookie);
//     this.perHourTotals.push(randomNum);
//     this.grandTotal += randomNum;
//   }
//    return this.hourTotal;
//   },
//
//   render: function() {
//   this.hourTotal();
//   var pElement = document.getElementById("BellevueSquare");
//   var ulElement = document.createElement('ul');
//
//   for (var i = 0; i < hours.length; i++) {
//     var liElement = document.createElement('li');
//     pElement.textContent = this.storeName;
//     liElement.textContent = hours[i] + this.perHourTotals[i];
//     ulElement.appendChild(liElement);
//   }
//   var liShowsTotal = document.createElement('li');
//   liShowsTotal.textContent = "Total: " + this.grandTotal;
//   ulElement.appendChild(liShowsTotal);
//   pElement.appendChild(ulElement);
//   }
// };
// bellevueSquareStore.getRandom();
// bellevueSquareStore.hourTotal();
// bellevueSquareStore.render();
//
// var alkiStore = {
//   storeName: "Alki",
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookie: 2.6,
//   perHourTotals: [],
//   grandTotal: 0,
//
//   getRandom: function() {
//     return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
//   },
//
//   hourTotal: function() {
//   for(var j = 0; j < hours.length; j++) {
//     var randomNum = Math.floor(this.getRandom() * this.avgCookie);
//     this.perHourTotals.push(randomNum);
//     this.grandTotal += randomNum;
//   }
//    return this.hourTotal;
//   },
//
//   render: function() {
//   this.hourTotal();
//   var pElement = document.getElementById("Alki");
//   var ulElement = document.createElement('ul');
//
//   for (var i = 0; i < hours.length; i++) {
//     var liElement = document.createElement('li');
//     pElement.textContent = this.storeName;
//     liElement.textContent = hours[i] + this.perHourTotals[i];
//     ulElement.appendChild(liElement);
//   }
//   var liShowsTotal = document.createElement('li');
//   liShowsTotal.textContent = "Total: " + this.grandTotal;
//   ulElement.appendChild(liShowsTotal);
//   pElement.appendChild(ulElement);
//   }
// };
// alkiStore.getRandom();
// alkiStore.hourTotal();
// alkiStore.render();

// constructor function
var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
function Store(storeName, minCustomer, maxCustomer, avgCookie, perHourTotals, grandTotal) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.perHourTotals = perHourTotals;
  this.grandTotal = grandTotal;

    getRandom = function() {
      return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    };

    hourTotal = function() {
    for(var j = 0; j < hours.length; j++) {
      var randomNum = Math.floor(this.getRandom() * this.avgCookie);
      this.perHourTotals.push(randomNum);
      this.grandTotal += randomNum;
    }
     return this.hourTotal;
   };


  this.renderAsRow = function() {

    var storeTable = document.getElementById('Stores');
    var trElement = document.createElement('tr');
    // var nameData = document.createElement('td');
    // var minData = document.createElement('td');
    // var maxData = document.createElement('td');
    // var avgData = document.createElement('td');

    for (var i = 0; i < hours.length; i++) {
      var tdElement = document.createElement('td');
      // var pElement = document.getElementById;
      tdElement.textContent = hours[i] + this.perHourTotals[i];
      storeTable.appendChild(trElement);
    }

    // var tdShowsTotal = document.createElement('td');
    //   tdShowsTotal.textContent = "Total: " + this.grandTotal;
    //   storeTable.appendChild(tdShowsTotal);
    //   trElement.appendChild(storeTable);


    // nameData.textContent = this.name;
    // minData.textContent = this.min;
    // maxData.textContent = this.max;
    // avgData.textContent = this.avg;

    // trElement.appendChild(nameData);
    // trElement.appendChild(minData);
    // trElement.appendChild(maxData);
    // trElement.appendChild(avgData);
    //
    // storeTable.appendChild(trElement);

  };
}



var storeOne = new Store('Pike Place', 17, 88, 5.2, [], 0);
var storeTwo = new Store('SeaTac Airport', 6, 24, 1.2, [], 0);
var storeThree = new Store('Southcenter', 11, 38, 1.9, [], 0);
var storeFour = new Store('Bellevue Square', 20, 48, 3.3, [], 0);
var storeFive = new Store('Alki', 3, 24, 2.6, [], 0);

// storeOne.getRandom();
// storeTwo.getRandom();
// storeThree.getRandom();
// storeFour.getRandom();
// storeFive.getRandom();
//
// storeOne.hourTotal();
// storeTwo.hourTotal();
// storeThree.hourTotal();
// storeFour.hourTotal();
// storeFive.hourTotal();

storeOne.renderAsRow();
storeTwo.renderAsRow();
storeThree.renderAsRow();
storeFour.renderAsRow();
storeFive.renderAsRow();
