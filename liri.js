require("dotenv").config();
var keys = require("./keys");

// axios
var axios = require("axios");

// keys
var spotify = new Spotify(keys.spotify);

// time
var moment = require("moment");

// arguments
var go = process.argv[2];
var value = process.argv.slice(3).join("+");

// switch commands
switch(go) {
    case "concert-this":
    concert();
    break;

    case "spotify-this-song":
    spotify();
    break;

    case "movie-this":
    movie();
    break;

    case "do-what-it-says":
    whatItSays();
    break;
}

// creating the fs variable, and adding if else statements to it 
// so that we can get some sort of output weather its an error or the acutal data
var fs = require("fs");

fs.readFile("random.txt", "utf-8", function(err, data) {
    if(err) {

        console.log(err);
    }

    console.log(data);
})

axios.get("")

// declaring the concert function that we called in the switch commands
function concert() {
    var artist = value;

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(
        function(concertResponse) {
            for (var i = 0; i < concertResponse.data.length; i++) {

                var concert = concertResponse.data[i].venue
                console.log("Event Date: " + moment(concert.date).format("L"));
                console.log("Venue Name: " + concert.name);
                console.log("Venue City: " + concert.city); 
            }
        }
    )
}

// spotify this song / spotify function declaration
function spotify () {

    text.search({
        type: 'track',
        query: value,
        limit: 3,
    }) .then(function (response) {
        console.log("Artists: " + response.tracks.items[0].album.artists[0].name);
        console.log("Song Name: " + response. tracks.items[0].name);
        console.log("Song Preview: " + response.tracks.items[0].preview_url);
        console.log("Album Name: " + response.tracks.items[0].album.name);
    })
    .catch(function (err) {
        console.log(err);
    })
}


// declaring movie/OMDB function that was called in the switch commands
function movie() {
    var movieInput = "";

    if (value === "") {
        movieInput = "Mr. Nobody"
    } else {
        movieInput = value
    }

    axios.get("http://www.omdbapi.com/?t=" + movieInput + "&apikey=fccf59cc")
    .then (function (response) {
          console.log("Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("Imdb Rating: " + response.data.imdbRating);
          console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].Value);
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);

    })

};


// what it says function declaration 
function whatItSays (
    
)