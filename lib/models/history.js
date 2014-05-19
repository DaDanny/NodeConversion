'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HistorySchema = new Schema({
  date: Date,
  type : String,
  details : String,
  amount : Number
});

mongoose.model('History', HistorySchema);