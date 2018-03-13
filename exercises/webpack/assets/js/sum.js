'use strict';

var _client = require('./client');

var pizza = 35;
var coke = 7;

var sum = function sum(a, b) {
  return a + b + '$';
};

console.log(_client.name + ', you have to pay ' + sum(pizza, coke));