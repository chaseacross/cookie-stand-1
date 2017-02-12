
var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
var pikePlaceStore = {
  storeName: "Pike Place",
  minCustomer: 17,
  maxCustomer: 88,
  avgCookie: 5.2,
  perHourTotals: [],
  grandTotal: 0,

  getRandom: function() {
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },

  hourTotal: function() {
  for(var j = 0; j < hours.length; j++) {
    var randomNum = Math.floor(this.getRandom() * this.avgCookie);
    this.perHourTotals.push(randomNum);
    this.grandTotal += randomNum;
  }
   return this.hourTotal;
  },

  render: function() {
  this.hourTotal();
  var pElement = document.getElementById("PikePlace");
  var ulElement = document.createElement('ul');

  for (var i = 0; i < hours.length; i++) {
    var liElement = document.createElement('li');
    pElement.textContent = this.storeName;
    liElement.textContent = hours[i] + this.perHourTotals[i];
    ulElement.appendChild(liElement);
  }
  var liShowsTotal = document.createElement('li');
  liShowsTotal.textContent = "Total: " + this.grandTotal;
  ulElement.appendChild(liShowsTotal);
  pElement.appendChild(ulElement);
  }
};
pikePlaceStore.getRandom();
pikePlaceStore.hourTotal();
pikePlaceStore.render();
