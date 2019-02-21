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


// filter objects

let userFriend = 3;

const friendliness = dogs.filter(function (friend) {
    return friend.friendliness >= userFriend;
});



console.log(friendliness);



// count number of times each object was mapped into new array
