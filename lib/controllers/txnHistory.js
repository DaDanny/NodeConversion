'use strict';

var mongoose = require ('mongoose'),
    txnHistory = mongoose.model('History');

exports.allHistory = function(req,res){
  txnHistory.find(function(err,histories){
    if(err){
      res.send(err);
    }
    else{
      res.send(histories);
    }
  });
};