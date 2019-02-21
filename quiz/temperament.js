// split values so you can grab quiz answers

// example format
/*
corgi = {
    friendliness: 5,
    goodWithKids: 3
}
*/
var dogs = [
    {
        name: "Corgi",
        affectionate: 5,
        goodWithKids: 3,
        goodWithDogs: 2
    },
    {
        name: "Affenpinscher",
        affectionate: 2,
        goodWithKids: 4,
        goodWithDogs: 5
    },
    {
        name: "Husky",
        affectionate: 4,
        goodWithKids: 2,
        goodWithDogs: 5
    }
]

// Affectionate with Family: 4, Incredibly Kid Friendly Dogs: 3, Dog Friendly: 2",

// matching the input with the objects above

// temperament

function friendMatch() {

    event.preventDefault();
    let kids;
    let otherDogs;

    
    // values pulled from form
    let affectionWant = document.getElementById("cuddle").value;

    let kidBoo = document.querySelector('input[name="kidsY"]:checked').value;
    
    let dogBoo = document.querySelector('input[name="existDogs"]:checked').value;
    
    // filtering based on response 

    if (kidBoo === "true") {
         kids = dogs.filter(function(friend) {
            return friend.goodWithKids >= 3;
        })
        // console.log(kids);
    } else {
        kids = dogs.filter(function(friend) {
            return friend.goodWithKids >= 1;
        })
        // console.log(kids);
    }

    if (dogBoo === "true") {
        otherDogs = dogs.filter(function(friend) {
           return friend.goodWithDogs >= 3;
       })
    //    console.log(otherDogs);
   } else {
       otherDogs = dogs.filter(function(friend) {
           return friend.goodWithDogs >= 1;
       })
    //    console.log(otherDogs);
   }

   let dogAffection = dogs.filter(function(friend) {
       return friend.affectionate >= affectionWant; 
   })


console.log(dogAffection);

let temperament = otherDogs.concat(dogAffection).concat(kids);

// count number of times each object was filtered into new array

console.log(temperament);
let dogResults = [];

for(var i=0; i < temperament.length; i++) {
    console.log(temperament[i].name);
    dogResults.push(temperament[i].name);
}

console.log(dogResults);

var counts = {};
dogResults.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

console.log(counts);

}