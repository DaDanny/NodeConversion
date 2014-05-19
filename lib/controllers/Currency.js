'use strict';

var mongoose = require('mongoose'),
    Currency = mongoose.model('Currency'),
    http = require('https'),
    currencyMod = require('currencies');

exports.getJSON = function(request,response){

  /*
  ** Function to send our Collection to Front End
  ** Used as a Callback once we are finished updating
  */
  var sendDB = function(){
    Currency.find(function(err,currencies){
      if(err){
        response.send(err);
      }
      else{
        response.send(currencies);
      }
    });
  };

  /*
  ** Parameters for GET request
  */
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

    /*
    **As we recieve data update the output string
    */
    res.on('data', function(chunk){
      output += chunk;
    });

    /*
    ** After we recieve all the data, Update Collection
    */
    res.on('end', function(){
      var obj = JSON.parse(output);
      updateDB(obj,sendDB); 
    });

    req.on('error', function(err){
      console.log(err);
      console.log('Error!');
    });

    req.end();
  });

  /*
  ** Function used to initally build DB
  ** Should not run after inital setup
  */
  var makeDB = function(obj,callBack){
    var saved = 0;
    for(var i in obj.rates){
      try{
        var currencyCode = new Currency({
          code : i,
          conversion : obj.rates[i],
          symbol : currencyMod.get(i).symbol
        });
      }
      catch(e){
        var currencyCode = new Currency({
          code : i,
          conversion : obj.rates[i]
        }) 
      };
      console.log(i);
      currencyCode.save(function(err){
        if(err){
          console.log(err);
        }
        saved++;
        if(saved ==166){
          callBack();
        }
      });
    }
  };

  var updateDB = function(obj,callBack){
    var query = {};
    var update = {};
    var index = 0;
    var options = {new : true};
    var updated = 0;
    for(var i in obj.rates){
      query = {"code": i};
      update = ({conversion:obj.rates[i]},{updatedTime:obj.timestamp});
      index++;
      Currency.findOneAndUpdate(query,update,options,function(err,cur){
        if(err){
          console.log('error in update');
        }
        updated++;
        if(updated == 166){
          callBack();        }
      });
    }
  };

  
};
exports.allCurrency = function(req,res){
  Currency.find(function(err,currencies){
      if(err){
        res.send(err);
      }
      else{
        res.send(currencies);
      }
    });
};