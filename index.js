// index.js

const SEARCHARG = process.argv.slice(2);
const WEBSITE = "https://api.thecatapi.com/v1/breeds/search?q=";
const {getBreedDescription} = require("./breedFetcher");

getBreedDescription(WEBSITE + SEARCHARG,(error, description) =>{
  if (error) {
    console.log("Error: \n\n", error);
    console.log("\n");
  } else {
    console.log(description);
  }
});