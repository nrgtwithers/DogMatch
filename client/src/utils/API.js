import fetchJsonp from "fetch-jsonp";


export default {
    getInfo: function (){
        return  fetchJsonp("https://api.petfinder.com/pet.find?format=json&key=e2e2583221dad933a332d4e10738bf15&location=22303&count=3&breed=Affenpinscher", {
            jsonpCallbackFunction: "callback"
          })
    },
    getInputInfo: function (search){
        return  fetchJsonp("https://api.petfinder.com/pet.find?format=json&key=e2e2583221dad933a332d4e10738bf15&count=3&breed=" + search + "&location=22303", {
            jsonpCallbackFunction: "callback"
          })
    }
};