'use strict';

// Setting up Hours
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let storeForm = document.querySelector('form');

let seattle = new StoreSales('Seattle', 23, 65, 6.3);
let tokyo = new StoreSales('tokyo', 3, 24, 1.2);
let dubai = new StoreSales('Dubai', 11, 38, 3.7);
let paris = new StoreSales('Paris', 20, 38, 2.3);
let lima = new StoreSales('Lima', 2, 16, 4.6);

let storeArray = [seattle, tokyo, dubai, paris, lima];
let cookiesPerHour = [];


//This function creates DOM elements and appends them
function createDOMElement(tagToCreate, parentElement, textContent) {
  let newElement = document.createElement(tagToCreate);
  if (textContent !== ' ') {
    newElement.textContent = textContent;
  }
  parentElement.appendChild(newElement);
}

// Placing the hours in the table
function storeHours() {
  let hoursTable = document.querySelector('table');
  let tab = document.createElement('thead');
  let tr = document.createElement('tr');
  createDOMElement('th', tr, 'City Names');
  for (let i = 0; i < hours.length; i++) {
    createDOMElement('td', tr, hours[i]);
  }
  createDOMElement('td', tr, 'Daily Cookie Sales');
  tab.appendChild(tr);
  hoursTable.appendChild(tab);
}
storeHours();

// Constructor for my store object
function StoreSales(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesByHourArray = [];
  this.dailyTotal = 0;
  this.calculateRandomNumberOfCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.generateCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.calculateRandomNumberOfCustomers();
      let cookiesSoldThisHour = Math.round((customers + 1) * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  };
  this.render = function () {
    this.generateCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} : ${this.salesByHourArray[i]} `;
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
  };
}

// Add the method to constructor to add the data to the table
StoreSales.prototype.renderTable = function () {
  let storeTable = document.querySelector('table');
  let tab = document.createElement('tbody');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    createDOMElement('td', tr, this.salesByHourArray[i]);
  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  tab.appendChild(tr);
  storeTable.appendChild(tab);
  tr.appendChild(td);
};

// Function to create the footer
function footer() {
  let footerTable = document.querySelector('table');
  let tab = document.createElement('tfoot');
  let th = document.createElement('th');
  th.textContent = 'Global Sales Per Hour';
  let tr = document.createElement('tr');
  tr.appendChild(th);
  let dailyGlobalTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let globalCookieSalesPerHour = 0;
    for (let j = 0; j < storeArray.length; j++) {
      globalCookieSalesPerHour += storeArray[j].salesByHourArray[i];
    }
    cookiesPerHour[i] = globalCookieSalesPerHour;
    dailyGlobalTotal += globalCookieSalesPerHour;
    createDOMElement('td', tr, cookiesPerHour[i]);
  }
  createDOMElement('td', tr, dailyGlobalTotal);
  tab.appendChild(tr);
  footerTable.appendChild(tab);
}


//Function to add new store data to the table and update the table
let submitStore = function (event) {
  event.preventDefault();
  let storeName = event.target.newStoreNamename.value;
  let minCustomer = event.target.newStoreMinName.value;
  let maxCustomer = event.target.newStoreMaxName.value;
  let avgCustomer = event.target.newStoreAvgName.value;
  let newStore = new StoreSales(storeName, minCustomer, maxCustomer, avgCustomer);
  storeArray.push(newStore);
  newStore.render();
  newStore.renderTable();
  document.querySelector('tfoot tr').remove();
  footer();
};



seattle.render();
seattle.renderTable();
tokyo.render();
tokyo.renderTable();
dubai.render();
dubai.renderTable();
paris.render();
paris.renderTable();
lima.render();
lima.renderTable();
footer();
storeForm.addEventListener('submit', submitStore);

// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
let myIndex = 0;


function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();
