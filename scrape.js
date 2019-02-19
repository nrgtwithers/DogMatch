var cheerio = require ("cheerio");
var axios = require ("axios");
var fs = require ("fs");

axios.get ("https://dogtime.com/dog-breeds/profiles").then(function(response){
    var $ = cheerio.load(response.data);

    var results =[];

    $(".group-list-item").each(function(i, element){
        var breed = $(element).children("h2").children("a").text();

        results.push(
            breed
        )
        fs.writeFile ("breed.json", JSON.stringify(results), function(err) {
            if (err) throw err;
            console.log('complete');
            })
        
    })

    console.log(results)
})