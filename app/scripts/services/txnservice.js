'use strict';

angular.module('payPalNodeApp')
  .factory('Txnservice', function($http,$q) {
    return{
      getHistory : function(){
        return $http.get('/paypal/txnactivity')
          .then(function(response){
            if(typeof response.data === 'object'){
              return response.data;
            }
            else{
              return $q.reject(response.data);
            }
          },function(response){
            return $q.reject(response.data);
          });
      }
    }
  });
