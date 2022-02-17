const request = require('request');


const SEARCHARG = process.argv.slice(2);
const WEBSITE = "https://api.thecatapi.com/v1/breeds/search?q=";


const getBreedDescription = function(breed, callback) {

  request(WEBSITE + breed, (error, response, body)=> {
    
    if (error) {
      callback(error);
    }
    
    let data = JSON.parse(body);

    // If data body exists, return the description via the callback function
    if (data[0]) {
      callback(null,data[0].description);

    }
    
    // If it doesn't exist, return a message saying search was not succesful
    else if (!data[0]) {
      callback(error, `A description wasn't found for breed ${breed}`);
    }
   
  
  });
};


getBreedDescription(SEARCHARG,(error,description) =>{
  if (error) {
    console.log("Error!", error);
  } else {
    console.log(description);
  }
});