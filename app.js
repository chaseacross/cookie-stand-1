
// constructor!!!!!!!1
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var stores = [];
var table;

function Store(storeName, minCustomer, maxCustomer, avgCustomer) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.perHourTotals = [];
  this.grandTotal = 0;
  stores.push(this);

  this.hourTotal();
  renderStore(table, this) ;
}

Store.prototype.getRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

Store.prototype.hourTotal = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomNum = Math.floor(this.avgCustomer * this.getRandom(this.minCustomer, this.maxCustomer));
    this.perHourTotals.push(randomNum);
    this.grandTotal += randomNum;
  }
};

(function renderTable() {
  table = document.createElement('table');
  table.id = 'table';
  var storeNameCell = document.createElement('tr');
  var storeName = document.createElement('th');
  storeName.textContent = '';
  storeNameCell.appendChild(storeName);

  for (var i = 0; i < hours.length; i++) {
    var cookiesSoldThisHour = document.createElement('th');
    cookiesSoldThisHour.textContent = hours[i];
    storeNameCell.appendChild(cookiesSoldThisHour);
  }

  var showsTotal = document.createElement('th');
  showsTotal.textContent = 'Totals';
  storeNameCell.appendChild(showsTotal);

  table.appendChild(storeNameCell);

  document.getElementById('store_data').appendChild(table);
})();

function renderStore(table, store) {
    var placeStoreHere = document.createElement('tr');
    var showStoreName = document.createElement('th');
    showStoreName.textContent = store.storeName;
    placeStoreHere.id = store.id;
    placeStoreHere.appendChild(showStoreName);

    for (var j = 0; j < hours.length; j++) {
      var showTotalThisHour = document.createElement('td');
      showTotalThisHour.textContent = store.perHourTotals[j];
      placeStoreHere.appendChild(showTotalThisHour);
    }

    var showGrandTotal = document.createElement('td');
    showGrandTotal.textContent = store.grandTotal;
    placeStoreHere.appendChild(showGrandTotal);

    table.appendChild(placeStoreHere);
};

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac Airport', 6, 44, 1.2);
var southCenter = new Store('Southcenter Mall', 11, 38, 1.9);
var bellevue = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
