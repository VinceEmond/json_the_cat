// breedFetcher

const request = require('request');

const WEBSITE = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedSearch, callback) {
  request(WEBSITE + breedSearch, (error,response, body)=> {
    
    if (error) {
      callback(error);
    }
    
    let data = JSON.parse(body);

    // If data body exists, return the description via the callback function
    if (data[0]) {
      callback(null,data[0].description);
    } else if (!data[0]) {
      // callback(error, `A description could not be found for the breed name: ${breedSearch}!`);
      callback(error, null);
    }
   
  });
};


module.exports = {
  fetchBreedDescription
};
