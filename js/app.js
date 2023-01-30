'use strict';

// Setting up Hours
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.','8 p.m.', 'Total: ']
let storeHourDisplay = document.createElement('section');
let ul = document.createElement('ul');
let seattleTotalCookieSales = 0;

// Seattle Store
let seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgSales: 6.3,
  cookieSales: [],
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookiesPerHour: function(){
    return Math.round((this.getNumberOfRandomCustomers() * this.avgSales));
  }
}



// For loop to create a random number per index of the array hours
for (let i = 0; i < hours.length; i++){
  let storeHour = document.createElement('li');
  storeHour.textContent = seattleStore.cookieSales[i] = seattleStore.getCookiesPerHour();
  ul.appendChild(storeHour);
 seattleTotalCookieSales += seattleStore.cookieSales[i];
 console.log(seattleTotalCookieSales);
 
}
let seattleStoreContainer =document.getElementById('seattleStoreID');
seattleStoreContainer.appendChild(ul);

 