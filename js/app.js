'use strict';

// Setting up Hours
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
//Seattle
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  salesByHourArray: [],
  dailyTotal: 0,
  calculateRandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.calculateRandomNumberOfCustomers();
      let cookiesSoldThisHour = Math.round(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesPerHour();
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} : ${this.salesByHourArray[i]} `;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
};

// Tokyo
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  salesByHourArray: [],
  dailyTotal: 0,
  calculateRandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.calculateRandomNumberOfCustomers();
      let cookiesSoldThisHour = Math.round(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesPerHour();
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} : ${this.salesByHourArray[i]} `;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
};

// Dubai
let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  salesByHourArray: [],
  dailyTotal: 0,
  calculateRandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.calculateRandomNumberOfCustomers();
      let cookiesSoldThisHour = Math.round(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesPerHour();
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} : ${this.salesByHourArray[i]} `;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
};

// Paris
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  salesByHourArray: [],
  dailyTotal: 0,
  calculateRandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.calculateRandomNumberOfCustomers();
      let cookiesSoldThisHour = Math.round(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesPerHour();
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} : ${this.salesByHourArray[i]} `;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
};

// Lima
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  salesByHourArray: [],
  dailyTotal: 0,
  calculateRandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.calculateRandomNumberOfCustomers();
      let cookiesSoldThisHour = Math.round(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesPerHour();
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} : ${this.salesByHourArray[i]} `;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
