const adaptability = require ("./adaptability");
const dogBreed = require ("./breed");
const category = require ("./breedGroup");
const dogHeight = require ("./breedHeight");
const images = require ("./breedImages");
const characteristics = require ("./breedInfo");
const dogLifeSpan = require ("./breedLife");
const dogWeight = require ("./breedWeight");
const dogExerciseNeeds = require ("./exerciseNeeds")
const friendliness = require("./friendliness");
const fs = require('fs');


// const dogBreedInfo = adaptability.concat(dogBreed, category, dogHeight, images, characteristics, dogLifeSpan, dogWeight, dogExerciseNeeds, friendliness)
let newArr = []

function combo () {
for (var i=0; i<friendliness.length; i++){
    newArr.push(Object.assign({}))
}
}



// console.log(dogBreedInfo);

// fs.writeFile("joinOutPut.js",   JSON.stringify(dogBreedInfo), function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 