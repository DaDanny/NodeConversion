'use strict';

var mongoose = require('mongoose'),
    Currency = mongoose.model('Currency'),
    openExchange = require('open-exchange-rates'),
    http = require('https');

openExchange.set({
  app_id : 'b2a6413f20934c3bbf19dad386ef6367'
});

exports.getJSON = function(request,response){

  var sendDB = function(){
    console.log('in function');
    Currency.find(function(err,currencies){
      if(err){
        response.send(err);
      }
      else{
        response.send(currencies);
      }
    });
  };

  var update = request.params.update;
  console.log('Update:' ,update);
  var options = {
    host: 'openexchangerates.org',
    port : 443,
    path : '/api/latest.json?app_id=b2a6413f20934c3bbf19dad386ef6367',
    method : 'GET',
    headers: {
    'Content-Type': 'application/json'}
  };

  var req = http.get(options,function(res){
    var output = '';
    res.setEncoding('utf8');

    res.on('data', function(chunk){
      output += chunk;
    });

    res.on('end', function(){
      var obj = JSON.parse(output);
      if(update == 'false'){
        makeDB(obj,sendDB);
      }
      else{
        updateDB(obj,sendDB);
      }
      
    });

    req.on('error', function(err){
      console.log(err);
      console.log('Error!');
    });

    req.end();
  });

  var makeDB = function(obj,callBack){
    for(var i in obj.rates){
      var currencyCode = new Currency({
        code : i,
        conversion : obj.rates[i]
      });
      currencyCode.save(function(err){
        if(err){
          console.log(err);
        }
      });
    }
    console.log('made it');
    callBack();
  };

  var updateDB = function(obj,callBack){
    var query = {};
    var update = {};
    var index = 0;
    var options = {new : true};
    for(var i in obj.rates){
      query = {"code": i};
      update = {conversion:obj.rates[i]};
      index++;
      Currency.findOneAndUpdate(query,update,options,function(err,cur){
        if(err){
          console.log('error in update');
        }
      });
    }
    callBack();
  };

  
};
exports.updateConversion = function(req,res){
  };