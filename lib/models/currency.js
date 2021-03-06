'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
* Schema for Currency
*/

var CurrencySchema = new Schema({
  code : String,
  conversion : Number,
  symbol : String,
  updatedTime : Number
});

mongoose.model('Currency', CurrencySchema);