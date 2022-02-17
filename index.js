// index.js

const SEARCHARG = process.argv.slice(2);

const {fetchBreedDescription} = require("./breedFetcher");

fetchBreedDescription(SEARCHARG,(error, description) =>{
  if (error) {
    console.log('Error fetch details:', error);
  } else if (description === null) {
    console.log(`A description could not be found.`);
  } else {
    console.log(description);
  }
});