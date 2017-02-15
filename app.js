
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

function renderNewStore(newName, newMinimum, newMaximum, newAverage) {
  tbl = document.getElementById('table');
  var newStore = new Store(newName, newMinimum, newMaximum, newAverage);
}

function update(newStore, min, max, avg) {
  var addsNewStore = document.getElementById(newStore.newName.replace(' ', ''));

  newStore.minCustomer = min;
  newStore.maxCustomer = max;
  newStore.avgCustomer = avg;
  newStore.perHourTotals = [];
  newStore.grandTotal = 0;
  newStore.hourTotal();

  for (var i = 0; i < newStore.perHourTotals.length; i++) {
    addsNewStore.childNodes[i + 1].textContent = newStore.perHourTotals[i];
  }
  addsNewStore.childNodes[addsNewStore.childNodes.length-1].textContent = newStore.grandTotal;
}


document.getElementById('add-store').addEventListener('submit', function(event) {
  event.preventDefault();
  var exists = false;
  var store = event.target.store.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  for (var i = 0; i < stores.length; i++) {
    if (stores[i].id === store.replace(' ', '')) {
      exists = true;
      break;
    }
  }

  if (exists === true) {
    update(stores[i], min, max, avg);
  } else {
    renderNewStore(store, min, max, avg);
  }

  event.target.store.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
});

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac Airport', 6, 44, 1.2);
var southCenter = new Store('Southcenter Mall', 11, 38, 1.9);
var bellevue = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
