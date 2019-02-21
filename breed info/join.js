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

dogBreed.forEach((itm, i) => {
    newArr.push(Object.assign({}, itm, friendliness[i], dogExerciseNeeds[i],adaptability[i], category[i], images[i], characteristics[i], dogLifeSpan[i], dogWeight[i], ))
})



// console.log(dogBreedInfo);

fs.writeFile("joinOutPutTwo.js",   JSON.stringify(newArr), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 