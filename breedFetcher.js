// breedFetcher

const request = require('request');

const getBreedDescription = function(breedSearch, callback) {
  request(breedSearch, (error,response, body)=> {
    
    if (error) {
      callback(error);
    }
    
    let data = JSON.parse(body);

    // If data body exists, return the description via the callback function
    if (data[0]) {
      callback(null,data[0].description);
    } else if (!data[0]) {
      callback(error, `A description wasn't found for that breed!`);
    }
   
  });
};


module.exports = {
  getBreedDescription
};
