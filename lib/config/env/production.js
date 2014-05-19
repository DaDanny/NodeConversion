'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://paypal:paypal@novus.modulusmongo.net:27017/yxyxe2Di'
  }
};