'use strict';

angular.module('payPalNodeApp')
  .factory('Currencyservice', function($http,$q) {
    return{
      getConversion : function(){
        return $http.get('/paypal/currencyconversion/'+'true')
          .then(function(response){
            if(typeof response.data === 'object'){
              return response.data;
            }
            else{
              return $q.reject(response.data);
            }
          }, function(response){
            return $q.reject(response.data);
          });
      }
    }
  });
