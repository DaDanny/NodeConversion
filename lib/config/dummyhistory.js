'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  TxnHistory = mongoose.model('History');


TxnHistory.create({
  date : new Date("1-10-2014"),
  type : 'Purchase',
  details : 'Macys',
  amount : 99.99
},{
  date : new Date("1-02-2014"),
  type : 'Purchase',
  details : 'Home Depot',
  amount : 150.15
}, {
  date : new Date("12-31-2013"),
  type : 'Transfer',
  details : 'Wells Fargo',
  amount : 350.00
},{
  date : new Date("12-15-2013"),
  type : 'Purhcase',
  details : 'Jamba Juice',
  amount : 2.30
},{
  date : new Date("11-01-2013"),
  type : 'Refund',
  details : 'DSW Shows',
  amount : 75.45
},{
  date : new Date("10-20-2013"),
  type : 'Purchase',
  details : 'DSW Shoes',
  amount : 75.45
},{
  date : new Date("10-05-2013"),
  type : 'Purchase',
  details : 'Jamba Juice',
  amount : 3.00
},{
  date : new Date("10-02-2013"),
  type : 'Transfer',
  details : 'Wells Fargo',
  amount : 2.75
}, function(){
  console.log('finished History!');
  });