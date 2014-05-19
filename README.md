NodeConversion
==============

Currency Conversion

**By Danny Francken**

##Using the OpenExchangeRates API
###Modulus -> 

Using the API provided by OpenExchangeRates, this website is able to make live requests to get the latest, up-to-date exchange rates for 165 different countries. 

##Features of Site

* Currency Conversion -> Using either the public API or the last values stored on a MongoDB, you can select two different currency codes, enter an amount and have the amount converted.

* Exchange Rates -> Find the exchange rates between any two country currencies

* Transaction History -> Demo of a user's transaction history and how the stored values can be displayed in any currency

Website is built with a Node.js backend to handle the routes and database, MongoDB for storing the transaction history and exchange rates and Mongoose for modeling the data from the Database.

On the front-end, Angular.js provides a robust way of linking up the front end with data from the backend. The two communicate via Angular services which issue the GET requests. 
A Grunt file was used to handle the tasks such as minifying the javascript, watching pages during development and deploying the site.

Yeoman was used to get the inital scaffolding up.



