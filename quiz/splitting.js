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
        friendliness: 5,
        goodWithKids: 3,
        goodWithDogs: 2
    },
    {
        name: "Affenpinscher",
        friendliness: 2,
        goodWithKids: 4,
        goodWithDogs: 5
    },
    {
        name: "Husky",
        friendliness: 4,
        goodWithKids: 2,
        goodWithDogs: 5
    }
]



function friendMatch() {
    var userInput = document.getElementById("cuddle").value;

    event.preventDefault();
    console.log(userInput);

    let friendliness = dogs.filter(function (friend) {
        return friend.friendliness >= userInput;
    });

    for(var i=0; i < friendliness.length; i++) {
        console.log(friendliness[i].name);
    }
}



// console.log(friendliness);



// count number of times each object was mapped into new array
